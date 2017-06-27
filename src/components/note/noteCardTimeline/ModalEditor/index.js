// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import {
  autoSaveRequest,
  themeSaveRequest,
	changeNoteShow,
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
    NoteEditor: { show: 'GET' | 'MAKE' | 'HIDDEN', noteId: string, themesave: "click" | "progress" | "nothing" }
  },
) => ({
	full: state.App.full,
	show: state.NoteEditor.show,
	noteId: state.NoteEditor.noteId,
	themesave: state.NoteEditor.themesave,
});

const mapDispatch = dispatch => ({
	autoSaveDispatch: method => dispatch(autoSaveRequest(method)),
	themeSaveDispatch: method => dispatch(themeSaveRequest(method)),
	changeNoteShowDispatch: () => dispatch(changeNoteShow('HIDDEN')),
});

type DefaultProps = {
  full: boolean,
	show: boolean,
	noteId: string,
  themesave: "click" | "progress" | "nothing",
  autoSaveDispatch: Function,
  themeSaveDispatch: Function,
	changeNoteShowDispatch: Function
};

type Props = {
  full: boolean,
	show: 'GET' | 'MAKE' | 'HIDDEN',
	noteId: string,
  themesave: "click" | "progress" | "nothing",
  autoSaveDispatch: Function,
  themeSaveDispatch: Function,
	changeNoteShowDispatch: Function
};

type State = {}

@connect(mapState, mapDispatch)
class ModalEditor extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		full: false,
		show: false,
		noteId: '',
		themesave: 'nothing',
		autoSaveDispatch: () => {},
		themeSaveDispatch: () => {},
		changeNoteShowDispatch: () => {},
	};

	constructor(props: Props) {
		super(props);
	}

	state = {};


	render() {
		const {
      full,
			show,
			noteId,
      autoSaveDispatch,
      themeSaveDispatch,
			changeNoteShowDispatch,
      themesave,
    } = this.props;
		return (
			<Modal
				isOpen={show !== 'HIDDEN'}
				onRequestClose={() => {
					changeNoteShowDispatch('HIDDEN');
				}}
				className={css.modal}
				overlayClassName={css.overlay}
				contentLabel="ModalEditor"
			>

				<div className={css.container}>
					<Editor
						what="Card"
						full={full}
						show={show}
						noteId={noteId}
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
