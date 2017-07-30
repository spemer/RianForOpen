import PropTypes from 'prop-types';
import { createNetworkInterface, ApolloClient } from 'react-apollo';
import { APOLLO, IP_ENV } from 'config/project';

const networkInterface = createNetworkInterface({
	uri: APOLLO.uri,
	opts: {
		credentials: 'same-origin',
	},
});

function createClient(opt = {}) {
	return new ApolloClient(
    Object.assign(
	{
		reduxRootSelector: state => state.apollo,
		networkInterface,
	},
      opt,
    ),
  );
}

export function mergeData(toMerge) {
	return PropTypes.shape(
    Object.assign(
	{
		loading: PropTypes.bool.isRequired,
	},
      toMerge,
    ),
  );
}
// Creates a new browser client
export function browserClient() {
	return createClient({ connectToDevTools: true });
}

// Creates a new server-side client
export function serverClient() {
	return createClient({
		ssrMode: true,
	});
}
