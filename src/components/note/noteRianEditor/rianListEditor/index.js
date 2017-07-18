// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import { changeTimelineLeftBar } from '../../../../actions/AppActions';
import css from './rianListEditor.css';
import SideHead from './sideHead';
import EditorHead from './editorHead';
import MainEditor from './editor';
import {
  getSelectedMyNoteData,
  autoSave,
} from '../../../../graphqls/NoteEditorGraphQl';

type Store = {
  App: {
    full: boolean,
    timelineLeftBar: boolean
  }
};

function mapToState({ App: { full, timelineLeftBar } }: Store) {
	return {
		full,
		timelineLeftBar,
	};
}

function mapToDispatch(dispatch) {
	return {
		changeTimelineLeftBarDispatch() {
			dispatch(changeTimelineLeftBar());
		},
	};
}

const getSelectedMyNoteDataQuery = graphql(getSelectedMyNoteData, {
	options: ({ match: { params: { noteId } } }) => ({
		variables: {
			noteId,
		},
		ssr: false,
	}),
	name: 'oneOfNoteData',
	skip: ({ location: { pathname } }) => (process.env.NODE_ENV === 'development' || pathname === '/list/main' && true),
});

const autoSaveMutation = graphql(autoSave, {
	options: ({ match: { params: { noteId } } }) => ({
		variables: {
			noteId,
		},
		ssr: false,
	}),
	name: 'autoSave',
	skip: process.env.NODE_ENV === 'development' && true,
});

type DefaultProps = {
  oneOfNoteData: null,
  autoSave: null,
  full: boolean,
  timelineLeftBar: null,
  changeTimelineLeftBarDispatch: null,
  match: any
};

type Props = {
  oneOfNoteData: any,
  autoSave: any,
  full: boolean,
  timelineLeftBar: boolean,
  changeTimelineLeftBarDispatch: Function,
  match: {
    params: {
      noteId: string
    }
  }
};

type State = {
};

type SaveFormat = {
  noteId: string,
  title: string,
  tags: Array<string>,
  data: string,
  preImage: string,
  isPublish: boolean
};

@connect(mapToState, mapToDispatch)
@compose(getSelectedMyNoteDataQuery, autoSaveMutation)
class RianListEditor extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		autoSave: null,
		oneOfNoteData: null,
		full: false,
		timelineLeftBar: null,
		changeTimelineLeftBarDispatch: null,
		match: {},
	};

	constructor(props: Props) {
		super(props);
	}

	state = {}

	componentWillReceiveProps(nextProps: Props) {
		if (process.env.NODE_ENV === 'production') {
			const { match: { params: { noteId } }, oneOfNoteData: { refetch } } = nextProps;
			if (this.props.match.params.noteId !== noteId) {
				refetch({
					noteId,
				});
			}
		}
	}

	render() {
		const {
			full,
			timelineLeftBar,
			changeTimelineLeftBarDispatch,
			oneOfNoteData,
		} = this.props;
		console.log(this.props);
		return (
			<div
				className={css.container}
				style={{ paddingTop: !full ? '0px' : '40px' }}
			>
				{!full &&
				<SideHead
					timelineLeftBar={timelineLeftBar}
					changeTimelineLeftBarDispatch={changeTimelineLeftBarDispatch}
				/>}
				<EditorHead
					full={full}
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
		);
	}
}

export default RianListEditor;
