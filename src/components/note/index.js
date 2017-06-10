// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from './note.css';
import NoteCardTimeline from './noteCardTimeline';
import NoteEditor from './noteEditor';

const mapState = (state: { Note: { mode: "List" | "Card" } }) => ({
	Mode: state.Note.mode,
	themeColor: state.User.themeColor,
});

type DefaultProps = {
  Mode: "List" | "Card",
  themeColor: string
};

type Props = {
  Mode: "List" | "Card",
  themeColor: string
};

type State = {};

@connect(mapState)
class Note extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		Mode: 'List',
		themeColor: '#ff3466',
	};

	constructor(props: Props) {
		super(props);
	}

	state = {};

	render() {
		const { Mode } = this.props;
		return (
			<div id={css.note}>
				{Mode === 'List'
          ? <NoteEditor themeColor={this.props.themeColor} />
          : <NoteCardTimeline themeColor={this.props.themeColor} />}
			</div>
		);
	}
}

export default Note;
