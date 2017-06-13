// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from './note.css';
import NoteCardTimeline from './noteCardTimeline';
import NoteEditor from './noteEditor';
import { autoSaveRequest } from '../../actions/NoteEditorActions';

const mapState = (
  state: {
    Note: { mode: "List" | "Card" },
    User: { themeColor: string, userid: string }
  },
) => ({
	Mode: state.Note.mode,
	themeColor: state.User.themeColor,
	userid: state.User._id,
});

const mapDispatch = dispatch => ({
	autoSaveDispatch: (method) => {
		dispatch(autoSaveRequest(method));
	},
});

type DefaultProps = {
  Mode: "List" | "Card",
  themeColor: string,
  userid: string,
  autoSaveDispatch: Function
};

type Props = {
  Mode: "List" | "Card",
  themeColor: string,
  userid: string,
  autoSaveDispatch: Function
};

type State = {};

@connect(mapState, mapDispatch)
class Note extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		Mode: 'List',
		themeColor: '#ff3466',
		userid: 'none',
		autoSaveDispatch: Function,
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
	themeColor={this.props.themeColor}
	userid={this.props.userid}
	autoSaveDispatch={this.props.autoSaveDispatch}
          />
          : <NoteCardTimeline themeColor={this.props.themeColor} />}
			</div>
		);
	}
}

export default Note;
