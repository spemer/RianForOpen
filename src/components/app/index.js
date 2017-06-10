// ----------------------
// IMPORTS

// React
import React from 'react';
import PropTypes from 'prop-types';

// GraphQL
import { gql, graphql } from 'react-apollo';

// Routing
import { Switch, Route } from 'react-router-dom';

// <Helmet> component for setting the page title
import Helmet from 'react-helmet';

// Helper to merge expected React PropTypes to Apollo-enabled component
import { mergeData } from 'kit/lib/apollo';

// Styles
import './styles.global.css';
import css from './app.css';

// Get the ReactQL logo.  This is a local .svg file, which will be made
// available as a string relative to [root]/dist/assets/img/
// import logo from './reactql-logo.svg';

// <Nav> Component
import Nav from './nav';

// <Note> Component
import Note from 'src/components/note';

// <Timeline> Component
import Timeline from 'src/components/timeline';

// <NoteAuth> Component
import NoteAuth from 'src/components/note/noteAuth';
// ----------------------

// Helper component that will be conditionally shown when the route matches.
// This gives you an idea how React Router v4 works
const Page = ({ match }) => <h1>Changed route: {match.params.name}</h1>;

// Specify PropTypes if the `match` object, which is injected to props by
// the <Route> component
Page.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.object,
	}).isRequired,
};

// Stats pulled from the environment.  This demonstrates how data will
// change depending where we're running the code (environment vars, etc)
// and also how we can connect a 'vanilla' React component to an RxJS
// observable source, and feed eventual values in as properties
// const Stats = () => {
//   const info = [
//     ['Environment', process.env.NODE_ENV],
//     ['Running', SERVER ? 'On the server' : 'In the browser'],
//   ];

//   return (
//     <ul className={css.data}>
//       {info.map(([key, val]) => (
//         <li key={key}>{key}: <span>{val}</span></li>
//       ))}
//     </ul>
//   );
// };

// Now, let's create a GraphQL-enabled component...

// First, create the GraphQL query that we'll use to request data from our
// sample endpoint
const query = gql`
  query {
    allMessages(first:1) {
      text
    }
  }
`;

// ... then, let's create the component and decorate it with the `graphql`
// HOC that will automatically populate `this.props` with the query data
// once the GraphQL API request has been completed
@graphql(query)
class GraphQLMessage extends React.PureComponent {
	static propTypes = {
		data: mergeData({
			allMessages: PropTypes.arrayOf(
        PropTypes.shape({
	text: PropTypes.string.isRequired,
}),
      ),
		}),
	};

	render() {
		const { data } = this.props;
		const message = data.allMessages && data.allMessages[0].text;
		const isLoading = data.loading ? 'yes' : 'nope';
		return (
			<div>
				<h2>Message from GraphQL server: <em>{message}</em></h2>
				<h2>Currently loading?: {isLoading}</h2>
			</div>
		);
	}
}

// Export a simple component that allows clicking on list items to change
// the route, along with a <Route> 'listener' that will conditionally display
// the <Page> component based on the route name
export default () => (
	<div id={css.app}>
		<Helmet
			title="ReactQL application"
			meta={[
				{
					name: 'description',
					content: 'ReactQL starter kit app',
				},
			]}
		/>
		<Nav />
		<div id={css.mainComponent}>
			<NoteAuth />
			<Switch>
				<Route exact path="/" component={Note} />
				<Route exact path="/timeline" component={Timeline} />
			</Switch>
		</div>
	</div>
);
