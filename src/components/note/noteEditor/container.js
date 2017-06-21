// @flow
import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import 'froala-editor/js/froala_editor.pkgd.min';
import FroalaEditor from 'react-froala-wysiwyg';
import TagBar from './TagBar/index';
import totalCss from './totalLayout.css';
import './fontawesome.global.css';
import { mockContent } from './mock';
import editorConfig from './editorConfig';
import { autoSave, saveTheme } from '../../../graphqls/NoteEditorGraphQl';
// import { XYruler } from './util';

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
  full: boolean,
  userId: string,
  autoSave: null,
  saveTheme: null,
  what: "List" | "Card",
  themesave: "click" | "progress" | "nothing",
  autoSaveDispatch: Function,
  themeSaveDispatch: Function
};

type Props = {
  full: boolean,
  userId: string,
  what: "List" | "Card",
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

@compose(autoSaveMutation, saveThemeMutation)
class NoteEditor extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		what: 'List',
		full: false,
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
		this.updateTagInList = this.updateTagInList.bind(this);
		this.removeTagInList = this.removeTagInList.bind(this);
		this.handleModelChange = this.handleModelChange.bind(this);
		this.handleController = this.handleController.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.Interval = null;
	}

	state = {
		title: '자바 프로그래밍과 객체지향',
		options: {},
		initControls: '',
		content: mockContent,
		selectedTag: ['Coding', '자바', '3학년1학기'],
	};

	componentDidMount() {
		this.initControls.initialize();
		this.initControls.getEditor()('toolbar.hide');
		if (process.env.NODE_ENV !== 'development' && this.props.userId) {
			this.Interval = setInterval(() => {
				this.props.autoSaveDispatch(this.autoSaveInterval);
			}, 15000);
		}
    // 만약 카드리스트 모드라면 다른 스타일 적용
		if (!SERVER && this.props.what === 'Card') {
			$('.fr-wrapper').css({
				'background-color': '#FBFBFB',
				'padding-left': '150px',
				'padding-right': '150px',
				'padding-bottom': '20px',
				position: 'relative',
				'z-index': 1,
				'margin-bottom': '30px',
				'border-radius': '10px',
			});
		}
	}

	componentWillReceiveProps(nextProps: Props) {
    // console.log('nextProps', nextProps);
		if (this.props.themesave === 'nothing' && nextProps.themesave === 'click') {
			this.props.themeSaveDispatch(this.saveAsTheme);
		}
	}

	componentWillUnmount() {
		clearInterval(this.Interval);
	}

	autoSaveInterval: Function;
	saveAsTheme: Function;
	updateTagInList: Function;
	removeTagInList: Function;
	handleModelChange: Function;
	handleController: Function;
	handleTitleChange: Function;
	initControls: any;
	Interval: any;

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

	updateTagInList(tagName: string) {
		this.setState((prevState: State) => ({
			selectedTag: prevState.selectedTag.concat(tagName),
		}));
	}

	removeTagInList(tag: string) {
		const deleteItemInArray = (name: string, array: Array<string>) => {
			const result = Array.prototype.slice.call(array);
			const index = result.indexOf(name);
			result.splice(index, 1);
			return result;
		};
		this.setState((prevState: State) => ({
			selectedTag: deleteItemInArray(tag, prevState.selectedTag),
		}));
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
		const { full, what } = this.props;
		let mainBoxStyle = { backgroundColor: 'white' };
		if (what === 'Card') {
			mainBoxStyle = { backgroundColor: '#FBFBFB', borderRadius: '10px' };
		}
		if (full && what === 'List') {
			mainBoxStyle = { backgroundColor: '#FBFBFB' };
		}
		return (
			<div className={totalCss.mainBox} style={mainBoxStyle}>
				{!full &&
				<div
					className={totalCss.head}
					style={{ padding: what === 'Card' && '150px 150px 0 150px' }}
				>
					<textarea
						style={{
							backgroundColor: what === 'Card' ? '#FBFBFB' : 'white',
							padding: '0px',
						}}
						className={totalCss.title}
						placeholder="소중한 순간에 제목을 지어주세요"
						value={this.state.title}
						onChange={this.handleTitleChange}
					/>
					<TagBar
						what={what}
						selectedTag={this.state.selectedTag}
						updateTagInList={this.updateTagInList}
						removeTagInList={this.removeTagInList}
					/>
				</div>}
				<FroalaEditor
					tag="mainwriting"
					model={this.state.content}
					config={config}
					onModelChange={this.handleModelChange}
					onManualControllerReady={this.handleController}
				/>
			</div>
		);
	}
}

export default NoteEditor;
