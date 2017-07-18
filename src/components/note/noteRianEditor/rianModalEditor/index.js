// @flow
import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import Modal from 'react-modal';
import {
  getSelectedMyNoteData,
} from '../../../../graphqls/NoteEditorGraphQl';
import SideHead from './sideHead';
import EditorHead from './editorHead';
import MainEditor from './editor';
import css from './rianModalEditor.css';

const getSelectedMyNoteDataQuery = graphql(getSelectedMyNoteData, {
	options: ({ match: { params: { noteId } } }) => ({
		variables: {
			noteId,
		},
		ssr: false,
	}),
	name: 'oneOfNoteData',
	skip: ({ location: { pathname } }) => (!!(process.env.NODE_ENV === 'development' || pathname === '/card/main')),
});


type DefaultProps = {
	showModal: boolean,
	changeModalState: Function,
	history: any,
	match: any,
	oneOfNoteData: null,
	location: any,
};

type Props = {
	showModal: boolean,
	changeModalState: Function,
	history: any,
	location: any,
	match: {
		params: {
			noteId: string
		}
	},
	oneOfNoteData: any
};

type State = {
};

@compose(getSelectedMyNoteDataQuery)
class ModalEditor extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		showModal: false,
		changeModalState: () => {},
		match: {},
		history: {},
		location: {},
		oneOfNoteData: null,
	}

	constructor(props: Props) {
		super(props);
	}

	state = {}

	componentWillReceiveProps(nextProps: Props) {
		console.log('new props in card editor', this.props, nextProps);
		if (process.env.NODE_ENV === 'production' && nextProps.location.pathname !== '/card/main') {
			const { match: { params: { noteId } }, oneOfNoteData: { refetch } } = nextProps;
			if (this.props.match.params.noteId !== noteId) {
				console.log('refetch in modal editor', this.props, nextProps);
				refetch({
					noteId,
				});
			}
		}
	}


	render() {
		const { showModal, changeModalState, history, oneOfNoteData } = this.props;
		return (
			<Modal
				isOpen={showModal}
				onRequestClose={() => {
					history.push('/card/main');
					changeModalState(false);
				}}
				className={css.modal}
				overlayClassName={css.overlay}
				contentLabel="ModalEditor"
			>
				<div className={css.ModalContainer}>
					<SideHead changeModalState={changeModalState} history={history} />
					<EditorHead
						loading={oneOfNoteData ? oneOfNoteData.loading : null}
						title={
							oneOfNoteData && !oneOfNoteData.loading
							? oneOfNoteData.getSelectedMyNoteData.title
							: null
						}
					/>
					<MainEditor
						loading={oneOfNoteData ? oneOfNoteData.loading : null}
						data={
							oneOfNoteData && !oneOfNoteData.loading
							? oneOfNoteData.getSelectedMyNoteData.data
							: null
						}
					/>
				</div>
			</Modal>
		);
	}
}


export default ModalEditor;
