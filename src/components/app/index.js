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

// <Head> Component
import Head from '../head';

// <Sidebar> Component
import SideBar from '../sideBar';

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

const mapState = state => ({
	userId: state.User._id,
	leftBar: state.App.leftBar,
});

type DefaultProps = {
	userId: string,
	leftBar: boolean,
};

type Props = {
	userId: string,
	leftBar: boolean,
};

type State = {};

@connect(mapState)
class MainComponent extends React.PureComponent<DefaultProps, Props, State> {
	static defaultProps = {
		userId: '',
		leftBar: false,
	};

	constructor(props: Props) {
		super(props);
	}

	state = {};

	render() {
		console.log(this.props)
		const { userId, leftBar, location: { pathname }, match: { url } } = this.props;
		if (process.env.NODE_ENV !== 'development') {
			if (!userId) {
				return <Redirect to="/login" />;
			}
		} else if (pathname === '/' ) {
			return <Redirect to="/card" />
		}
		return (
			<div id={css.mainComponent}>
				<Head />
				<SideBar />
				<div className={css.note} style={{ marginLeft: leftBar ? '0px' : '1px' }}>
					<TagListBar />
					{pathname === '/list' && <NoteTimelineBar />}
					<Switch>
						<Route path={`${url}card`} component={NoteCardView} />
						<Route path={`${url}list`} component={RianListEditor} />
					</Switch>	
				</div>
			</div>
		);
	}
}


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
			<Route path="/" component={MainComponent} />
		</Switch>
	</div>
);
