// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from './note.css';
import NoteCardTimeline from './noteCardTimeline';
import NoteEditor from './noteEditor';
import {
  autoSaveRequest,
  themeSaveRequest,
} from '../../actions/NoteEditorActions';

const mapState = (
  state: {
    App: { themeColor: string },
    Note: { mode: "List" | "Card" },
    User: { _id: string },
    NoteEditor: { themesave: "click" | "progress" | "nothing" }
  },
) => ({
	Mode: state.Note.mode,
	themeColor: state.App.themeColor,
	userId: state.User._id,
	themesave: state.NoteEditor.themesave,
});

const mapDispatch = dispatch => ({
	autoSaveDispatch: method => dispatch(autoSaveRequest(method)),
	themeSaveDispatch: method => dispatch(themeSaveRequest(method)),
});

type DefaultProps = {
  Mode: "List" | "Card",
  themeColor: string,
  userId: string,
  themesave: "click" | "progress" | "nothing",
  autoSaveDispatch: Function,
  themeSaveRequest: Function
};

type Props = {
  Mode: "List" | "Card",
  themeColor: string,
  userId: string,
  themesave: "click" | "progress" | "nothing",
  autoSaveDispatch: Function,
  themeSaveDispatch: Function
};

type State = {};

@connect(mapState, mapDispatch)
class Note extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		Mode: 'List',
		themeColor: '#ff3466',
		userId: 'none',
		themesave: 'nothing',
		autoSaveDispatch: () => {},
		themeSaveRequest: () => {},
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
          ? <NoteEditor
	userId={this.props.userId}
	autoSaveDispatch={this.props.autoSaveDispatch}
	themeSaveDispatch={this.props.themeSaveDispatch}
	themesave={this.props.themesave}
          />
          : <NoteCardTimeline themeColor={this.props.themeColor} />}
			</div>
		);
	}
}

export default Note;
