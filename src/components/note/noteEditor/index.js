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
import { autoSave } from '../../../graphqls/NoteEditorGraphQl';
// import { XYruler } from './util';

const autoSaveMutation = graphql(autoSave, {
	props: ({ mutate }) => ({
		autosave: (userid, title, tag, data) =>
      mutate({ variables: { userid, title, tag, data } }),
	}),
	options: () => ({
		ssr: true,
	}),
	name: 'autoSave',
	skip: process.env.NODE_ENV === 'development' && false,
});

type DefaultProps = {
  themeColor: string,
  userid: string
};

type Props = {
  themeColor: string,
  userid: string
};

type State = {
  title: string,
  initControls: string,
  content: string,
  selectedTag: Array<string>
};

@compose(autoSaveMutation)
class NoteEditor extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		themeColor: '#FF3466',
		userid: 'none'
	};

	constructor(props: Props) {
		super(props);
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
	}

	handleModelChange: Function;
	handleController: Function;
	handleTitleChange: Function;
	initControls: any;

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
								placeholder="title"
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
