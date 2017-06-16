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

const mapState = (
  state: {
    App: { full: boolean },
    User: { _id: string },
    NoteEditor: { themesave: "click" | "progress" | "nothing" }
  },
) => ({
	full: state.App.full,
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
  themesave: "click" | "progress" | "nothing",
  autoSaveDispatch: Function,
  themeSaveDispatch: Function,
  handleOnEditor: Function
};

type Props = {
  onEditor: boolean,
  full: boolean,
  userId: string,
  themesave: "click" | "progress" | "nothing",
  autoSaveDispatch: Function,
  themeSaveDispatch: Function,
  handleOnEditor: Function
};

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
