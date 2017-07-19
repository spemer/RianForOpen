// @flow
import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import EditorBox from './editor';
import {
  getSelectedMyNoteData,
  autoSave,
} from '../../../../graphqls/NoteEditorGraphQl';

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

const saveMutation = graphql(autoSave, {
	name: 'saveMutate',
	skip: process.env.NODE_ENV === 'development' && true,
});

type DefaultProps = {
	oneOfNoteData: null,
	saveMutate: Function,
	match: any,
	location: any,
};

type Props = {
	oneOfNoteData: any,
	saveMutate: Function,
	match: any,
	location: any,
};

type State = {
	noteId: ?string,
	title: string,
	data: string,
	isPublish: null,
	isBooked: null,
};

@compose(getSelectedMyNoteDataQuery, saveMutation)
class RianListEditor extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		oneOfNoteData: null,
		saveMutate: () => {},
		match: {},
		location: {},
	};

	constructor(props: Props) {
		super(props);
	}

	state = {
		noteId: null,
		title: '',
		data: '',
		isPublish: null,
		isBooked: null,
	}

	componentWillReceiveProps(nextProps: Props) {
		console.log('new props in list editor in Apollo', this.props, nextProps);
		if (process.env.NODE_ENV === 'development') return;

		const { location: { pathname }, match: { params: { noteId } }, oneOfNoteData } = nextProps;
		if (pathname !== '/list/main' && pathname !== '/list/newNote') {
			// user click other note
			console.log('check', this.props.match.params.noteId, noteId);
			// if (this.props.match.params.noteId !== noteId) {
			// 	console.log('refetch in list editor', this.props.match.params.noteId, noteId);
			// 	oneOfNoteData.refetch({
			// 		noteId,
			// 	});
			// }
			// not loading
			if (oneOfNoteData.loading) {
				this.setState({
					noteId,
					title: '로딩중',
					data: '<h1>로딩중</h1>',
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
					noteId: _id,
					title,
					data,
					isPublish,
				});
			}
		}
	}

	render() {
		const {
			saveMutate,
		} = this.props;
		const {
			noteId,
			title,
			data,
			isPublish,
		} = this.state;
		return (
			<EditorBox
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
