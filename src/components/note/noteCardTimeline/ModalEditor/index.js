// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import {
  autoSaveRequest,
  themeSaveRequest,
} from '../../../../actions/NoteEditorActions';
import Editor from '../../noteEditor/container';
import css from './modalEditor.css';
// .fr-wrapper {
//   background-color: #FBFBFB;
//   padding-left: 150px;
//   padding-right: 150px;
//   padding-bottom: 20px;
//   position: relative;
//   z-index: 1;
//   margin-bottom: 30px;
//   border-radius: 10px;
// }
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
  onEditor: boolean,
  full: boolean,
  userId: string,
	noteId: string,
  themesave: "click" | "progress" | "nothing",
  autoSaveDispatch: Function,
  themeSaveDispatch: Function,
  handleOnEditor: Function
};

type Props = {
  onEditor: boolean,
  full: boolean,
  userId: string,
	noteId: string,
  themesave: "click" | "progress" | "nothing",
  autoSaveDispatch: Function,
  themeSaveDispatch: Function,
  handleOnEditor: Function
};

type State = {}

@connect(mapState, mapDispatch)
class ModalEditor extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		onEditor: false,
		full: false,
		userId: 'none',
		themesave: 'nothing',
		autoSaveDispatch: () => {},
		themeSaveDispatch: () => {},
		handleOnEditor: () => {},
	};

	constructor(props: Props) {
		super(props);
	}

	state = {};


	render() {
		const {
      onEditor,
      full,
      userId,
			noteId,
      autoSaveDispatch,
      themeSaveDispatch,
      themesave,
      handleOnEditor,
    } = this.props;
		return (
			<Modal
				isOpen={onEditor}
				onRequestClose={() => {
					handleOnEditor(false);
				}}
				className={css.modal}
				overlayClassName={css.overlay}
				contentLabel="ModalEditor"
			>

				<div className={css.container}>
					<Editor
						what="Card"
						full={full}
						noteId={noteId}
						userId={userId}
						autoSaveDispatch={autoSaveDispatch}
						themeSaveDispatch={themeSaveDispatch}
						themesave={themesave}
					/>
				</div>
			</Modal>
		);
	}
}

export default ModalEditor;
