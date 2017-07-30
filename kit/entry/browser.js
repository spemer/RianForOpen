// Enable async/await and generators, cross-browser
import 'regenerator-runtime/runtime';

import 'isomorphic-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import { browserClient } from 'kit/lib/apollo';

import createNewStore from 'kit/lib/redux';

import App from 'src/components/app';


const client = browserClient();

const store = createNewStore(client);

function doRender() {
	ReactDOM.render(
		<Root />,
    document.getElementById('main'),
  );
}

const Root = (() => {
	const Chain = () => (
		<ApolloProvider store={store} client={client}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ApolloProvider>
  );

	if (module.hot) {
		const AppContainer = require('react-hot-loader').AppContainer;

		module.hot.accept('src/components/app', () => {
			require('src/components/app').default;

			doRender();
		});

		return () => (
			<AppContainer>
				<Chain />
			</AppContainer>
    );
	}
	return Chain;
})();

doRender();
