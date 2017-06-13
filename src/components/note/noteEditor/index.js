// @flow
import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import 'froala-editor/js/froala_editor.pkgd.min';
import FroalaEditor from 'react-froala-wysiwyg';
import TagBar from './TagBar/index';
import css from '../note.css';
import totalCss from './totalLayout.css';
import './etc.global.css';
import './froalaEditor.global.css';
import './fontawesome.global.css';
import { mockContent } from './mock';
import editorConfig from './editorConfig';
import { autoSave, saveTheme } from '../../../graphqls/NoteEditorGraphQl';
// import { XYruler } from './util';

type DefaultProps = {
  userId: string,
  autoSave: null,
  saveTheme: null,
  themesave: "click" | "progress" | "nothing",
  autoSaveDispatch: Function,
  themeSaveDispatch: Function
};

type Props = {
  userId: string,
  autoSave: Function,
  saveTheme: Function,
  themesave: "click" | "progress" | "nothing",
  autoSaveDispatch: Function,
  themeSaveDispatch: Function
};

type State = {
  title: string,
  initControls: string,
  content: string,
  selectedTag: Array<string>
};

type SaveFormat = {
  _id: string,
  title: string,
  tag: Array<string>,
  notedata: string
};

type ThemeFormat = {
  tag: Array<string>,
  themedata: string
};

const autoSaveMutation = graphql(autoSave, {
	options: () => ({
		ssr: true,
	}),
	name: 'autoSave',
	skip: process.env.NODE_ENV === 'development' && false,
});

const saveThemeMutation = graphql(saveTheme, {
	options: () => ({
		ssr: true,
	}),
	name: 'saveTheme',
	skip: process.env.NODE_ENV === 'development' && false,
});

@compose(autoSaveMutation, saveThemeMutation)
class NoteEditor extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		userId: 'none',
		autoSave: null,
		saveTheme: null,
		themesave: 'click',
		autoSaveDispatch: () => {},
		themeSaveDispatch: () => {},
	};

	constructor(props: Props) {
		super(props);
		this.autoSaveInterval = this.autoSaveInterval.bind(this);
		this.saveAsTheme = this.saveAsTheme.bind(this);
		this.handleModelChange = this.handleModelChange.bind(this);
		this.handleController = this.handleController.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
	}

	state = {
		title: '자바 프로그래밍과 객체지향',
		options: {},
		initControls: '',
		content: mockContent,
		selectedTag: ['수명', '자바'],
	};

	componentDidMount() {
		this.initControls.initialize();
		this.initControls.getEditor()('toolbar.hide');
		if (process.env.NODE_ENV !== 'development' && this.props.userId) {
			setInterval(() => { this.props.autoSaveDispatch(this.autoSaveInterval); }, 15000);
		}
	}

	componentWillReceiveProps(nextProps: Props) {
		// console.log('nextProps', nextProps);
		if (this.props.themesave === 'nothing' && nextProps.themesave === 'click') {
			this.props.themeSaveDispatch(this.saveAsTheme);
		}
	}

	autoSaveInterval: Function;
	saveAsTheme: Function;
	handleModelChange: Function;
	handleController: Function;
	handleTitleChange: Function;
	initControls: any;

	autoSaveInterval() {
		const variables: SaveFormat = {
			_id: this.props.userId,
			title: this.state.title,
			tag: this.state.selectedTag,
			notedata: this.state.content,
		};
		return this.props.autoSave({ variables });
	}

	saveAsTheme() {
		const variables: ThemeFormat = {
			_id: this.props.userId,
			tag: this.state.selectedTag,
			themedata: this.state.content,
		};
		return this.props.saveTheme({ variables });
	}

	handleModelChange(model: string) {
		this.setState(() => ({ content: model }));
	}

	handleController(initControls: any) {
		this.initControls = initControls;
	}

	handleTitleChange(event: Event & { currentTarget: { value: string } }) {
		this.setState({ title: event.currentTarget.value });
	}

	render() {
		const config = editorConfig;
		return (
			<div className={css.paper}>
				<div className={totalCss.container}>
					<div className={totalCss.mainBox}>
						<div className={totalCss.head}>
							<textarea
								className={totalCss.title}
								placeholder="소중한 순간에 제목을 지어주세요"
								value={this.state.title}
								onChange={this.handleTitleChange}
							/>
							<TagBar />
						</div>
						<FroalaEditor
							tag="mainwriting"
							model={this.state.content}
							config={config}
							onModelChange={this.handleModelChange}
							onManualControllerReady={this.handleController}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default NoteEditor;
