// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import css from './rianModalEditor.css';
import SideHead from './sideHead';
import EditorHead from './editorHead';
import MainEditor from './editor';
import { } from '../../../../graphqls/NoteEditorGraphQl';

const mapToState = ({ App: { full } }) => ({
	full,
});

type DefaultProps = {
	full: boolean
};

type Props = {
	full: boolean
};

type State = {
  title: string,
};

type SaveFormat = {
  noteId: string,
  title: string,
  tags: Array<string>,
  data: string,
  preImage: string,
  isPublish: boolean
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
		isPublish: false,
	}

	render() {
		const { full } = this.props;
		return (
			<div className={css.container} style={{ paddingTop: !full ? '0px' : '40px' }}>
				{!full && <SideHead />}
				<EditorHead full={full} />
				<MainEditor />
			</div>
		);
	}
}

export default RianListEditor;
