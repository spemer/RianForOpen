// @flow

// React
import React from 'react';
import { connect } from 'react-redux';

// GraphQL
// import { gql, graphql } from 'react-apollo';

// Routing
import { Switch, Route, Redirect } from 'react-router-dom';

// <Helmet> component for setting the page title
import Helmet from 'react-helmet';

// Get the ReactQL logo.  This is a local .svg file, which will be made
// available as a string relative to [root]/dist/assets/img/
// import logo from './reactql-logo.svg';

// <Login> Component
import Login from '../login';
import firstLogin from '../login/firstUser';

// <Head> Component
import Head from '../head';

// <Note> Component
import TagListBar from '../note/tagListBar';
import NoteCardView from '../note/noteCardView';
import NoteTimelineBar from '../note/noteTimelineBar';
import RianListEditor from '../note/noteRianEditor/rianListEditor';

// Styles
import './styles.global.css';
import css from './app.css';


// Stats pulled from the environmenㅎt.  This demonstrates how data will
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

// Export a simple component that allows clicking on list items to change
// the route, along with a <Route> 'listener' that will conditionally display
// the <Page> component based on the route name

type Store = {
	User: {
		userId: string,
		userName: string,
	},
	App: {
		full: boolean,
	}
}

type Props = {
	userId: string,
	full: boolean,
	location: Location,
	userName: string,
};

function mapToState({ User: { userId, userName }, App: { full } }: Store) {
	return {
		userId,
		userName,
		full,
	};
}

function MainComponent({ userId, userName, full, location: { pathname } }: Props) {
	// if (!userName) {
	// 	return <Redirect to="/firstLogin" />;
	// }
	if (process.env.NODE_ENV !== 'development') {
		if (!userId) {
			return <Redirect to="/login" />;
		}
	}
		// if setup initial page -> 'card'
	if (pathname === '/') {
		return <Redirect to="/card/main" />;
	}
	return (
		<div id={css.mainComponent}>
			<Head pathname={pathname} />
			<div className={css.mainContainer} style={{ marginTop: !full ? '48px' : '0px' }}>
				<div className={css.note} >
					<TagListBar />
					{pathname.slice(0, 5) === '/list' && <NoteTimelineBar />}
					<Switch>
						<Route path="/card/:noteId" component={NoteCardView} />
						<Route path="/list/:noteId" component={RianListEditor} />
					</Switch>
				</div>
			</div>
		</div>
	);
}

const ConnectedMainComponent = connect(mapToState)(MainComponent);

export default () => (
	<div id={css.app}>
		<Helmet
			title="Rian"
			meta={[
				{
					name: 'description',
					content: 'Rian Desktop Web',
				},
			]}
		/>
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route exact path="/firstLogin" component={firstLogin} />
			<Route path="/" component={ConnectedMainComponent} />
		</Switch>
	</div>
);
