// @flow
import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import SideHead from './sideHead';
import EditorHead from './editorHead';
import MainEditor from './editor';
import css from './rianModalEditor.css';

function mapToState() {
	return {
	};
}

function mapToDispatch() {
	return {};
}

type Props = {
  showModal: boolean,
  changeModalState: Function
};


const ModalEditor = ({ showModal = false, changeModalState = () => {} }: Props) => (
	<Modal
		isOpen={showModal}
		onRequestClose={() => {
			changeModalState(false);
		}}
		className={css.modal}
		overlayClassName={css.overlay}
		contentLabel="ModalEditor"
	>
		<div className={css.container}>
			<SideHead />
			<EditorHead />
			<MainEditor />
		</div>
	</Modal>
		);
export default connect(mapToState, mapToDispatch)(ModalEditor);
