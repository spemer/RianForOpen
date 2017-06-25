// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  autoSaveRequest,
  themeSaveRequest,
} from '../../../actions/NoteEditorActions';
import css from '../note.css';
import './froalaEditor.global.css';
import totalCss from './totalLayout.css';
import Editor from './container';

const mapState = (
  state: {
    App: { full: boolean },
    User: { _id: string },
    NoteEditor: { noteId: string, themesave: "click" | "progress" | "nothing" }
  },
) => ({
	full: state.App.full,
	noteId: state.NoteEditor.noteId,
	userId: state.User._id,
	themesave: state.NoteEditor.themesave,
});

const mapDispatch = dispatch => ({
	autoSaveDispatch: method => dispatch(autoSaveRequest(method)),
	themeSaveDispatch: method => dispatch(themeSaveRequest(method)),
});

type DefaultProps = {
  full: boolean,
  userId: string,
	noteId: string,
  themesave: "click" | "progress" | "nothing",
  autoSaveDispatch: Function,
  themeSaveDispatch: Function
};

type Props = {
  full: boolean,
  userId: string,
	noteId: string,
  themesave: "click" | "progress" | "nothing",
  autoSaveDispatch: Function,
  themeSaveDispatch: Function
};

type State = {};

@connect(mapState, mapDispatch)
class EditorContainer extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		full: false,
		userId: 'none',
		string: '',
		themesave: 'nothing',
		autoSaveDispatch: () => {},
		themeSaveDispatch: () => {},
	};

	constructor(props: Props) {
		super(props);
	}

	state = {};

	render() {
		const {
      full,
      userId,
			noteId,
      autoSaveDispatch,
      themeSaveDispatch,
      themesave,
    } = this.props;
		return (
			<div
				className={css.paper}
				style={{ backgroundColor: full ? '#FBFBFB' : 'white' }}
			>
				<div className={totalCss.container}>
					<Editor
						what="List"
						full={full}
						userId={userId}
						noteId={noteId}
						autoSaveDispatch={autoSaveDispatch}
						themeSaveDispatch={themeSaveDispatch}
						themesave={themesave}
					/>
				</div>
			</div>
		);
	}
}

export default EditorContainer;
