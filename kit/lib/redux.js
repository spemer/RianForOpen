/*
Custom Redux store creation.  Instead of using the default Apollo store,
we'll create our own for each request so that we can easily layer in our
own reducers for store state outside of Apollo
*/

// ----------------------
// IMPORTS
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from 'src/epics/index.js';
import Reducers from 'src/reducers';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function createNewStore(apolloClient, preloadedState) {
	const store = createStore(
    combineReducers({ apollo: apolloClient.reducer(), ...Reducers }),
    !SERVER ? window.__STATE__ : preloadedState, // initial state
    compose(
      applyMiddleware(apolloClient.middleware(), epicMiddleware),
      !SERVER && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f,
    ),
  );

	if (!SERVER) {
		// console.log('FIRST STORE: ', store.getState());
	}
	return store;
}
