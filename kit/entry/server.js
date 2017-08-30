import path from 'path';

import 'isomorphic-fetch';

// Needed to read manifest files
import { readFileSync } from 'fs';

import React from 'react';

import ReactDOMServer from 'react-dom/server';

import Koa from 'koa';

import { ApolloProvider, getDataFromTree } from 'react-apollo';

import koaHelmet from 'koa-helmet';

import KoaRouter from 'koa-router';

import koaStatic from 'koa-static';

import ms from 'microseconds';

import { StaticRouter } from 'react-router';

import Helmet from 'react-helmet';


import { serverClient } from 'kit/lib/apollo';


import createNewStore from 'kit/lib/redux';
import { userLogin } from 'src/actions/UserActions';

import Html from 'kit/views/ssr';


import App from 'src/components/app';


import PATHS from 'config/paths';
import { PORT } from 'config/project';
import { isLoggedIn } from './utils/serverUtils';
import mongoose from 'mongoose';
import mongoConfig from 'config/mongoDB';

// Auth
import session from 'koa-session';
import bodyParser from 'koa-bodyparser';
import passport from 'koa-passport';
import passportRoutes from 'config/routes';
import passportConfig from 'config/passport';
import cookieConfig from 'config/cookie';

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

	const router = new KoaRouter()
    .post('/api/graphql', graphqlKoa(ctx => ({
	schema,
	context: { userId: ctx.state.user },
})))
    .get('/api/graphiql', graphiqlKoa({ endpointURL: '/api/graphql' }))
    .get('/ping', async (ctx) => {
	ctx.body = 'pong';
})
    .get('/favicon.ico', async (ctx) => {
	ctx.res.statusCode = 204;
})
    // Sign out
    .get('/auth/signout', (ctx) => {
	ctx.logout();
	ctx.redirect('/');
})

    .get('/*', async (ctx) => {
	const route = {};

	// Create a new server Apollo client for this request
	const client = serverClient();

	// Create a new Redux store for this request
	const store = createNewStore(client);

	// inject initial state to serverSideRendering Html Store
	if (ctx.isAuthenticated()) {
		console.log(ctx.state.user);
		store.dispatch(userLogin(ctx.state.user));
	}

	const components = (
		<StaticRouter location={ctx.request.url} context={route}>
			<ApolloProvider store={store} client={client}>
				<App />
			</ApolloProvider>
		</StaticRouter>
					);

	await getDataFromTree(components);

	// Full React HTML render for Server Side Rendering
	const html = ReactDOMServer.renderToString(components);

	ctx.body = `<!DOCTYPE html>\n${ReactDOMServer.renderToStaticMarkup(<Html html={html} head={Helmet.rewind()} window={{ webpackManifest: chunkManifest, __STATE__: store.getState() }} scripts={scripts} css={manifest['browser.css']} />)}`;
});

	const websocketServer = createServer((request, response) => {
		response.writeHead(404);
		response.end();
	});


  // Start Koa
	const app = new Koa();
	app.use(cors({ credentials: 'include' }));
	app.keys = ['your-session-secret'];
	app.use(session(cookieConfig, app));
	app.use(bodyParser());
	app.use(koaBody());
  // Preliminary security for HTTP headers
	app.use(koaHelmet());
	passportConfig(passport);
	app.use(passport.initialize());
	app.use(passport.session());
	const authRoute = passportRoutes(passport);
	app.use(authRoute.routes());
	app.use(authRoute.allowedMethods());

	app.use(async (ctx, next) => {
		try {
			await next();
		} catch (e) {
			console.log('Error', e.message);
			ctx.body = 'There was an error. Please try again later.';
		}
	});

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
	maxage: 31536000000,
	defer: false,
}),
  );

	app.use(router.routes());
	app.use(router.allowedMethods());
	app.listen(PORT, () => console.log('Rock Spirit comes from ', PORT));
}());
