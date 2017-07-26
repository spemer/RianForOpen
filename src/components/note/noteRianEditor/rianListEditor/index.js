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
	tags: Array<string>,
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
		tags: [],
	}

	componentWillReceiveProps(nextProps: Props) {
		// console.log('new props in list editor in Apollo', this.props, nextProps);
		if (process.env.NODE_ENV === 'development' && !SERVER) return;

		const { match: { params: { noteId } }, oneOfNoteData } = nextProps;
		// user click other note
		// console.log('check', this.props.match.params.noteId, noteId);
		if (oneOfNoteData.loading) {
			this.setState({
				loading: oneOfNoteData.loading,
				noteId,
				title: '',
				data: '',
				tags: [],
			});
		}
		if (!oneOfNoteData.loading) {
			// console.log('loaded!', oneOfNoteData);
			const { getSelectedMyNoteData: { _id, title, data, tags } } = oneOfNoteData;
			// 라우터랑 가져온 노트 아이디랑 일치해야함
			if (noteId !== _id) {
				// console.log(noteId === _id);
			}
			this.setState({
				loading: oneOfNoteData.loading,
				noteId: _id,
				title,
				data,
				tags,
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
			tags,
		} = this.state;
		return (
			<EditorBox
				loading={loading}
				noteId={noteId}
				saveMutate={saveMutate}
				title={title}
				tags={tags}
				data={data}
			/>
		);
	}
}

export default RianListEditor;
