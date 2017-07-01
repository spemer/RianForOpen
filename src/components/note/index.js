// @flow
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import parentCss from '../app/app.css';
import TagListBar from './tagListBar';
import NoteCardView from './noteCardView';
import TimelineNoteEditor from './noteEditor';
import NoteTimelineBar from './noteTimelineBar';

const mapState = state => ({
	userId: state.User._id,
});

type DefaultProps = {};

type Props = {};

type State = {};

@connect(mapState)
class Note extends Component<DefaultProps, Props, State> {
	static defaultProps = {};

	constructor(props: Props) {
		super(props);
	}

	state = {};

	render() {
		const { userId, location: { pathname }, match: { url } } = this.props;
		return (
			<div className={parentCss.note}>
				<TagListBar />
				{pathname === '/list' && <NoteTimelineBar />}
				{pathname === '/card' && <NoteTimelineBar />}
				<Route path={`${url}card`} component={NoteCardView} />
				<Route path={`${url}list`} component={TimelineNoteEditor} />
				{/* {Mode === 'List'
          ? <TimelineNoteEditor />
          : <NoteCardTimeline themeColor={themeColor} userId={userId} />}*/}
			</div>
		);
	}
}

export default Note;
