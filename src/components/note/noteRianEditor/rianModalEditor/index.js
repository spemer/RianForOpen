// @flow
import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import Modal from 'react-modal';
import {
  getSelectedMyNoteData,
  noteSave,
} from '../../../../graphqls/NoteEditorGraphQl';
import EditorBox from './editor';
import css from './rianModalEditor.css';

type DefaultProps = {
	changeModalState: Function,
	location: any,
	history: any,
	match: any,
	oneOfNoteData: any,
	saveMutate: Function,
};

type Props = {
	changeModalState: Function,
	location: any,
	history: any,
	match: {
		params: {
			noteId: string,
		}
	},
	oneOfNoteData: any,
	saveMutate: Function,
};

type State = {
	loading: boolean,
	noteId: ?string,
	title: string,
	data: string,
	isPublish: null,
};

const getSelectedMyNoteDataQuery = graphql(getSelectedMyNoteData, {
	options: ({ match: { params: { noteId } } }) => ({
		variables: {
			noteId,
		},
		ssr: false,
		fetchPolicy: 'network-only',
	}),
	name: 'oneOfNoteData',
	skip: ({ location: { pathname } }) => (!!(process.env.NODE_ENV === 'development' || pathname === '/card/main')),
});

const saveMutation = graphql(noteSave, {
	name: 'saveMutate',
	skip: process.env.NODE_ENV === 'development' && true,
});

@compose(getSelectedMyNoteDataQuery, saveMutation)
class ModalEditor extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		changeModalState: () => {},
		location: {},
		history: {},
		match: {},
		oneOfNoteData: {
			loading: true,
		},
		saveMutate: () => {},
	}

	constructor(props: Props) {
		super(props);
	}

	state = {
		loading: false,
		noteId: null,
		title: '',
		data: '',
		isPublish: null,
	}

	componentWillReceiveProps(nextProps: Props) {
		console.log('new props in card editor', this.props, nextProps);
		if (process.env.NODE_ENV === 'development') return;
		if (nextProps.location.pathname !== '/card/main') {
			const { match: { params: { noteId } }, oneOfNoteData } = nextProps;
			// user click other note
			console.log('check', this.props.match.params.noteId, noteId);
			if (oneOfNoteData.loading) {
				this.setState({
					loading: oneOfNoteData.loading,
					noteId,
					title: '',
					data: '',
					isPublish: null,
				});
			}
			if (!oneOfNoteData.loading) {
				console.log('loaded!', oneOfNoteData);
				const { getSelectedMyNoteData: { _id, title, data, isPublish } } = oneOfNoteData;
				// 라우터랑 가져온 노트 아이디랑 일치해야함
				if (noteId !== _id) {
					console.log(noteId === _id);
				}
				this.setState({
					loading: oneOfNoteData.loading,
					noteId: _id,
					title,
					data,
					isPublish,
				});
			}
		}
	}


	render() {
		const { changeModalState, history, location: { pathname }, saveMutate } = this.props;
		console.log('this.state', this.state);
		const {
			loading,
			noteId,
			title,
			data,
			isPublish,
		} = this.state;
		return (
			<Modal
				isOpen={pathname !== '/card/main'}
				onRequestClose={() => {
					history.push('/card/main');
					changeModalState(false);
				}}
				className={css.modal}
				overlayClassName={css.overlay}
				contentLabel="ModalEditor"
			>
				<EditorBox
					loading={loading}
					noteId={noteId}
					saveMutate={saveMutate}
					title={title}
					data={data}
					isPublish={isPublish}
				/>
			</Modal>
		);
	}
}


export default ModalEditor;
