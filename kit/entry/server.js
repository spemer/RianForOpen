/* eslint-disable no-param-reassign, no-console */

// Server entry point, for Webpack.  This will spawn a Koa web server
// and listen for HTTP requests.  Clients will get a return render of React
// or the file they have requested
//
// Note:  No HTTP optimisation is performed here (gzip, http/2, etc).  Node.js
// will nearly always be slower than Nginx or an equivalent, dedicated proxy,
// so it's usually better to leave that stuff to a faster upstream provider

// ----------------------
// IMPORTS

/* Node */
import path from 'path';

/* NPM */

// Patch global.`fetch` so that Apollo calls to GraphQL work
import 'isomorphic-fetch';

// Needed to read manifest files
import { readFileSync } from 'fs';

// React UI
import React from 'react';

// React utility to transform JSX to HTML (to send back to the client)
import ReactDOMServer from 'react-dom/server';

// Koa 2 web server.  Handles incoming HTTP requests, and will serve back
// the React render, or any of the static assets being compiled
import Koa from 'koa';

// Apollo tools to connect to a GraphQL server.  We'll grab the
// `ApolloProvider` HOC component, which will inject any 'listening' React
// components with GraphQL data props.  We'll also use `getDataFromTree`
// to await data being ready before rendering back HTML to the client
import { ApolloProvider, getDataFromTree } from 'react-apollo';

// HTTP header hardening
import koaHelmet from 'koa-helmet';

// Koa Router, for handling URL requests
import KoaRouter from 'koa-router';

// Static file handler
import koaStatic from 'koa-static';

// High-precision timing, so we can debug response time to serve a request
import ms from 'microseconds';

// React Router HOC for figuring out the exact React hierarchy to display
// based on the URL
import { StaticRouter } from 'react-router';

// <Helmet> component for retrieving <head> section, so we can set page
// title, meta info, etc along with the initial HTML
import Helmet from 'react-helmet';

/* Local */

// Grab the shared Apollo Client
import { serverClient } from 'kit/lib/apollo';

// Custom redux store creator.  This will allow us to create a store 'outside'
// of Apollo, so we can apply our own reducers and make use of the Redux dev
// tools in the browser
import createNewStore from 'kit/lib/redux';
import { userLogin, userInformationInject } from 'src/actions/UserActions';
// Initial view to send back HTML render
import Html from 'kit/views/ssr';

// App entry point
import App from 'src/components/app';

// Import paths.  We'll use this to figure out where our public folder is
// so we can serve static files
import PATHS from 'config/paths';
import { PORT } from 'config/project';
import { isLoggedIn } from './utils/serverUtils';
// MongoDB + Mongoose
import mongoose from 'mongoose';
import mongoConfig from 'config/mongoDB';

// Auth
import session from 'koa-session';
import bodyParser from 'koa-bodyparser';
import passport from 'koa-passport';
import passportRoutes from 'config/routes';
import passportConfig from 'config/passport';
import cookieConfig from 'config/cookie';

import { getMyNoteListInfo } from 'database/controllers/note_ctrl';

// GraphQL Server
import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';
import { SubscriptionManager, PubSub } from 'graphql-subscriptions';
import { schema } from 'graphqlServer/qlSchema/schema';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { pubsub } from 'graphqlServer/pubsub/pubsub';
import koaBody from 'koa-bodyparser';
import { createServer } from 'http';
// ----------------------

import cors from 'koa-cors';

// Read in manifest files
const [manifest, chunkManifest] = ['manifest', 'chunk-manifest'].map(name =>
  JSON.parse(readFileSync(path.resolve(PATHS.dist, `${name}.json`), 'utf8')),
);

const scripts = ['manifest.js', 'vendor.js', 'browser.js'].map(
  key => manifest[key],
);

// Run the server
(async function server() {
  // 몽고DB 연결
	mongoose.Promise = global.Promise;
	mongoose.connect(mongoConfig.mongoURL).then(
    () => {
	console.log(`connected to RockofMongo: ${mongoConfig.mongoURL}`);
},
    (error) => {
	console.error('Mongo is Rock City');
	throw error;
},
  );

  // Set up routes
	const router = new KoaRouter()
    .post('/api/graphql', graphqlKoa(ctx => ({
	schema,
	context: { userId: ctx.state.user },
})))
    .get('/api/graphiql', graphiqlKoa({ endpointURL: '/api/graphql' }))
    // Set-up a general purpose /ping route to check the server is alive
    .get('/ping', async (ctx) => {
	ctx.body = 'pong';
})
    // Favicon.ico.  By default, we'll serve this as a 204 No Content.
    // If /favicon.ico is available as a static file, it'll try that first
    .get('/favicon.ico', async (ctx) => {
	ctx.res.statusCode = 204;
})
    // Sign out
    .get('/auth/signout', (ctx) => {
	ctx.logout();
	ctx.redirect('/');
})
		.get('/api/test', async (ctx) => {
			const arg = {
				userId: '593e422abfc14bfb57224337', // 9번 user
				tags: ['성찬', '문규'],
				updatedAt: '2013-08-12T15:02:28.854Z',
			};

			const myNoteListInfo = await getMyNoteListInfo(arg).then(result => result);

			ctx.body = myNoteListInfo;
		})
    // Everything else is React
    .get('/*', async (ctx) => {
      // const preloadedState = ctx.state.initial || {};
	const route = {};

					// Create a new server Apollo client for this request
	const client = serverClient();

					// Create a new Redux store for this request
	const store = createNewStore(client);
					// const store = createNewStore(client, preloadedState);

					// inject initial state to serverSideRendering Html Store
	if (ctx.isAuthenticated()) {
		store.dispatch(userLogin(ctx.state.user));
	}
					// store.dispatch(userInformationInject({ email: 'cci45@naver.com' }));

					// Generate the HTML from our React tree.  We're wrapping the result
					// in `react-router`'s <StaticRouter> which will pull out URL info and
					// store it in our empty `route` object
	const components = (
		<StaticRouter location={ctx.request.url} context={route}>
			<ApolloProvider store={store} client={client}>
				<App />
			</ApolloProvider>
		</StaticRouter>
					);

					// Wait for GraphQL data to be available in our initial render,
					// before dumping HTML back to the client
	await getDataFromTree(components);

					// Full React HTML render
	const html = ReactDOMServer.renderToString(components);

					// Render the view with our injected React data.  We'll pass in the
					// Helmet component to generate the <head> tag, as well as our Redux
					// store state so that the browser can continue from the server
	ctx.body = `<!DOCTYPE html>\n${ReactDOMServer.renderToStaticMarkup(<Html html={html} head={Helmet.rewind()} window={{ webpackManifest: chunkManifest, __STATE__: store.getState() }} scripts={scripts} css={manifest['browser.css']} />)}`;
	ctx.redirect('/card');
});

  // Create WebSocket listener server
	const websocketServer = createServer((request, response) => {
		response.writeHead(404);
		response.end();
	});
  // Bind it to port and start listening

  // Start Koa

	const app = new Koa();
	app.use(cors({ credentials: 'include' }));
	app.keys = ['your-session-secret'];
	app.use(session(cookieConfig, app));
	app.use(bodyParser());
	app.use(koaBody());
  // Preliminary security for HTTP headers
	app.use(koaHelmet());
  // Passport 설정 실행 및 각 로컬 및 소셜 로그인 Strategy 추가
	passportConfig(passport);
	app.use(passport.initialize());
	app.use(passport.session());
	const authRoute = passportRoutes(passport);
	app.use(authRoute.routes());
	app.use(authRoute.allowedMethods());
  // Error wrapper.  If an error manages to slip through the middleware
  // chain, it will be caught and logged back here
	app.use(async (ctx, next) => {
		try {
			await next();
		} catch (e) {
      // TODO we've used rudimentary console logging here.  In your own
      // app, I'd recommend you implement third-party logging so you can
      // capture errors properly
			console.log('Error', e.message);
			ctx.body = 'There was an error. Please try again later.';
		}
	});

  // It's useful to see how long a request takes to respond.  Add the
  // timing to a HTTP Response header
	app.use(async (ctx, next) => {
		const start = ms.now();
		await next();
		const end = ms.parse(ms.since(start));
		const total = end.microseconds + end.milliseconds * 1e3 + end.seconds * 1e6;
		ctx.set('Response-Time', `${total / 1e3}ms`);
	});

  // Serve static files from our dist/public directory, which is where
  // the compiled JS, images, etc will wind up.  Note this is being checked
  // FIRST before any routes -- static files always take priority
	app.use(
    koaStatic(PATHS.public, {
      // All asset names contain the hashes of their contents so we can
      // assume they are immutable for caching
	maxage: 31536000000,
      // Don't defer to middleware.  If we have a file, serve it immediately
	defer: false,
}),
  );

  // If the requests makes it here, we'll assume they need to be handled
  // by the router
	app.use(router.routes());
	app.use(router.allowedMethods());
  // Bind to the specified port
	app.listen(PORT, () => console.log('Rock Spirit comes from ', PORT));
}());
