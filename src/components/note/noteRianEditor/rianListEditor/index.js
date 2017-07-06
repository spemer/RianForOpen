// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import css from './rianListEditor.css';
import SideHead from './sideHead';
import EditorHead from './editorHead';
import MainEditor from './editor';
import {
  getSelectedMyNoteData,
  autoSave,
  saveTheme,
} from '../../../../graphqls/NoteEditorGraphQl';

const mapToState = ({ App: { full } }) => ({
	full,
});

const getSelectedMyNoteDataQuery = graphql(getSelectedMyNoteData, {
	options: props => ({
		variables: {
			noteId: props.noteId,
		},
		ssr: false,
	}),
	name: 'oneOfNoteData',
	skip: props => !!(process.env.NODE_ENV === 'development' || props.show === 'MAKE'),
});

const autoSaveMutation = graphql(autoSave, {
	options: () => ({
		ssr: true,
	}),
	name: 'autoSave',
	skip: process.env.NODE_ENV === 'development' && true,
});

const saveThemeMutation = graphql(saveTheme, {
	options: () => ({
		ssr: true,
	}),
	name: 'saveTheme',
	skip: process.env.NODE_ENV === 'development' && true,
});

type DefaultProps = {
	oneOfNoteData: boolean,
	autoSave: boolean,
	saveTheme: boolean,
	full: boolean
};

type Props = {
	oneOfNoteData: boolean,
	autoSave: boolean,
	saveTheme: boolean,
	full: boolean
};

type State = {
  title: string,
  is_publish: boolean
};

type SaveFormat = {
  noteId: string,
  title: string,
  tags: Array<string>,
  data: string,
  pre_image: string,
  is_publish: boolean
};

@connect(mapToState)
@compose(getSelectedMyNoteDataQuery, autoSaveMutation, saveThemeMutation)
class RianListEditor extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		autoSave: false,
		saveTheme: false,
		oneOfNoteData: false,
		full: false,
	}

	constructor(props: Props) {
		super(props);
	}

	state = {
		title: '',
		is_publish: false,
	}

	render() {
		const { full } = this.props;
		return (
			<div className={css.container}>
				<SideHead />
				<EditorHead full={full} />
				<MainEditor />
			</div>
		);
	}
}

export default RianListEditor;
