// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from './note.css';
import NoteCardTimeline from './noteCardTimeline';
import TimelineNoteEditor from './noteEditor';


const mapState = (
  state: {
		User: { _id: string },
    App: { themeColor: string },
    Note: { mode: "List" | "Card" }
  },
) => ({
	userId: state.User._id,
	Mode: state.Note.mode,
	themeColor: state.App.themeColor,
});

type DefaultProps = {
	userId: string,
  Mode: "List" | "Card",
  themeColor: string
};

type Props = {
	userId: string,
  Mode: "List" | "Card",
  themeColor: string
};

type State = {};

@connect(mapState)
class Note extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		userId: '',
		Mode: 'List',
		themeColor: '#ff3466',
	};

	constructor(props: Props) {
		super(props);
	}

	state = {};

	render() {
		const { Mode, userId, themeColor } = this.props;
		return (
			<div id={css.note}>
				{Mode === 'List'
          ? <TimelineNoteEditor />
          : <NoteCardTimeline themeColor={themeColor} userId={userId} />}
			</div>
		);
	}
}

export default Note;
