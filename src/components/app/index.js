// @flow

// React
import React from 'react';
import { connect } from 'react-redux';

import { Switch, Route, Redirect } from 'react-router-dom';

import Helmet from 'react-helmet';

// <Login> Component
import Login from '../login';
import FirstLogin from '../login/firstUser';
import IsMobile from '../login/isMobile';

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
	location: any,
	history: any,
	userName: string,
};

function mapToState({ User: { userId, userName }, App: { full } }: Store) {
	return {
		userId,
		userName,
		full,
	};
}

function MainComponent({ userId, userName, full, location: { pathname }, history }: Props) {
	// console.log(pathname);
	// if (process.env.NODE_ENV === 'development') return <IsMobile />;
	if (!SERVER && process.env.NODE_ENV !== 'development') {
		if (!userId) {
			return <Redirect to="/login" />;
		}
	}
	if (!SERVER && !userName && process.env.NODE_ENV !== 'development') {
		return <Redirect to="/firstLogin" />;
	}

	if (!SERVER && pathname === '/') {
		return <Redirect to="/card/main" />;
	}
	return (
		<div id={css.mainComponent}>
			<Head pathname={pathname} history={history} />
			<div className={css.mainContainer} style={{ marginTop: !full ? '48px' : '0px' }}>
				<div className={css.note} >
					<TagListBar />
					<Route path="/card/:noteId" component={NoteCardView} />
					<Route path="/list/:noteId" component={NoteTimelineBar} />
					<Route path="/list/:noteId" component={RianListEditor} />
				</div>
			</div>
		</div>
	);
}

const ConnectedMainComponent = connect(mapToState)(MainComponent);

export default () => {
	if (!SERVER && navigator.userAgent.match(
		/Android|Mobile|iP(hone|od|)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)) {
		return (
			<div id={css.app}>
				<Helmet
					title="Rian"
					meta={[
						{
							name: 'description',
							content: 'Rian Mobile Web',
						},
					]}
				/>
				<IsMobile />
			</div>
		);
	}

	return (
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
				<Route exact path="/firstLogin" component={FirstLogin} />
				<Route path="/" component={ConnectedMainComponent} />
			</Switch>
		</div>
	);
};

