// @flow
import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import SideHead from './sideHead';
import EditorHead from './editorHead';
import MainEditor from './editor';
import css from './rianModalEditor.css';

function mapToState() {
	return {};
}

function mapToDispatch() {
	return {};
}

type Props = {
  showModal: boolean,
  changeModalState: Function,
  history: any,
  noteId: ?string
};

const ModalEditor = ({
  showModal = false,
  changeModalState = () => {},
  history = {},
  noteId,
}: Props) => (
	<Modal
		isOpen={showModal}
		onRequestClose={() => {
			history.push('card:main');
			changeModalState(false);
		}}
		className={css.modal}
		overlayClassName={css.overlay}
		contentLabel="ModalEditor"
	>
		<div className={css.ModalContainer}>
			<SideHead changeModalState={changeModalState} history={history} />
			<EditorHead />
			<MainEditor noteId={noteId} />
		</div>
	</Modal>
);
export default connect(mapToState, mapToDispatch)(ModalEditor);
