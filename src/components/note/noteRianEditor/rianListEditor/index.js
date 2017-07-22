// @flow
import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import EditorBox from './editor';
import {
  getSelectedMyNoteData,
  noteSave,
} from '../../../../graphqls/NoteEditorGraphQl';

type DefaultProps = {
	oneOfNoteData: any,
	saveMutate: Function,
	match: any,
};

type Props = {
	oneOfNoteData: any,
	saveMutate: Function,
	match: any,
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
	skip: ({ location: { pathname } }) => (!!(process.env.NODE_ENV === 'development' || pathname === '/list/main' || pathname === '/list/newNote')),
});

const saveMutation = graphql(noteSave, {
	name: 'saveMutate',
	skip: process.env.NODE_ENV === 'development' && true,
});

@compose(getSelectedMyNoteDataQuery, saveMutation)
class RianListEditor extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		oneOfNoteData: {
			loading: true,
		},
		saveMutate: () => {},
		match: {},
	};

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
		console.log('new props in list editor in Apollo', this.props, nextProps);
		if (process.env.NODE_ENV === 'development') return;

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

	render() {
		const {
			saveMutate,
		} = this.props;
		const {
			loading,
			noteId,
			title,
			data,
			isPublish,
		} = this.state;
		return (
			<EditorBox
				loading={loading}
				noteId={noteId}
				saveMutate={saveMutate}
				title={title}
				data={data}
				isPublish={isPublish}
			/>
		);
	}
}

export default RianListEditor;
