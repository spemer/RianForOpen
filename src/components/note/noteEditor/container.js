// @flow
import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import 'froala-editor/js/froala_editor.pkgd.min';
import FroalaEditor from 'react-froala-wysiwyg';
import TagBar from './TagBar/index';
import totalCss from './totalLayout.css';
import './fontawesome.global.css';
import editorConfig from './editorConfig';
import {
  getSelectedMyNoteData,
  autoSave,
  saveTheme,
} from '../../../graphqls/NoteEditorGraphQl';
// import { XYruler } from './util';

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
  full: boolean,
  noteId: string,
  show: boolean,
  autoSave: boolean,
  saveTheme: boolean,
  what: "List" | "Card",
  themesave: "click" | "progress" | "nothing",
  oneOfNoteData: boolean,
  autoSaveDispatch: Function,
  themeSaveDispatch: Function
};

type Props = {
  full: boolean,
  noteId: string,
  show: 'GET' | 'MAKE' | 'HIDDEN',
  what: "List" | "Card",
  autoSave: Function,
  saveTheme: Function,
  themesave: "click" | "progress" | "nothing",
  oneOfNoteData: any,
  autoSaveDispatch: Function,
  themeSaveDispatch: Function
};

type State = {
  title: string,
  initControls: string,
  content: string,
  selectedTag: Array<string>,
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

type ThemeFormat = {
  tag: Array<string>,
  themedata: string
};

@compose(getSelectedMyNoteDataQuery, autoSaveMutation, saveThemeMutation)
class NoteEditor extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		what: 'List',
		full: false,
		noteId: '',
		show: false,
		autoSave: false,
		saveTheme: false,
		themesave: 'click',
		oneOfNoteData: false,
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
		title: this.props.oneOfNoteData && !this.props.oneOfNoteData.loading
      ? this.props.oneOfNoteData.getSelectedMyNoteData.title
      : '',
		initControls: '',
		content: this.props.oneOfNoteData && !this.props.oneOfNoteData.loading
      ? this.props.oneOfNoteData.getSelectedMyNoteData.data
      : '<h3>당신의 이야기를 쓰세요</h3>',
		selectedTag: this.props.oneOfNoteData && !this.props.oneOfNoteData.loading
      ? this.props.oneOfNoteData.getSelectedMyNoteData.tags
      : [],
		is_publish: false,
	};

	componentDidMount() {
		const { autoSaveDispatch } = this.props;
		this.initControls.initialize();
		this.initControls.getEditor()('toolbar.hide');
		if (process.env.NODE_ENV !== 'development') {
			this.Interval = setInterval(() => {
				// if compoennent has noteId, it will be saved
				console.log('setInterval');
				if (this.props.show !== 'MAKE') {
					autoSaveDispatch(this.autoSaveInterval);
				}
			}, 8000);
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
		if (this.props.themesave === 'nothing' && nextProps.themesave === 'click') {
			this.props.themeSaveDispatch(this.saveAsTheme);
		}
		// if node development mode, this.props.neOfNoteData doen't exist
		// if show === 'MAKE', this.props.oneOfNoteData doen't exist
		// console.log('thisprops', this.props.show);
		// console.log('nextProps', nextProps.show);
		if (process.env.NODE_ENV === 'development') return;
		// if every note change in List mode, Editor unmount

		if (nextProps.show === 'MAKE') {
			this.setState({
				title: '노트를 만들고 있는 중입니다.',
				content: '노트를 만들고 있는 중입니다.',
				selectedTag: [],
			});
			return;
		}

		if (this.props.what === 'Card') {
			// loading = true => loading = false
			if (this.props.oneOfNoteData.loading && !nextProps.oneOfNoteData.loading) {
				this.setState({
					title: nextProps.oneOfNoteData.getSelectedMyNoteData.title,
					content: nextProps.oneOfNoteData.getSelectedMyNoteData.data,
					selectedTag: nextProps.oneOfNoteData.getSelectedMyNoteData.tags,
				});
			}
			return;
		}
		// if in List mode, Editor will not unmount
		if (this.props.what === 'List') {
			// get another note
			if (nextProps.show === 'GET' && this.props.noteId !== nextProps.noteId) {
				// console.log('change noteId');
				// console.log('refetch', nextProps);
				nextProps.oneOfNoteData.refetch({
					variables: {
						noteId: nextProps.noteId,
					},
				});
				this.setState({
					title: '노트를 가져오고 있는 중입니다.',
					content: '',
					selectedTag: [],
				});
				return;
			}
			if (this.props.oneOfNoteData.loading && !nextProps.oneOfNoteData.loading) {
				// loading = true => loading = false
				this.setState({
					title: nextProps.oneOfNoteData.getSelectedMyNoteData.title,
					content: nextProps.oneOfNoteData.getSelectedMyNoteData.data,
					selectedTag: nextProps.oneOfNoteData.getSelectedMyNoteData.tags,
				});
			}
		}
	}

	componentWillUnmount() {
    // console.log('unmount');
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
		let pre_image = '';
		if (document.getElementsByClassName('fr-element fr-view')[0].getElementsByTagName('img').length > 0) {
			pre_image = document.getElementsByClassName('fr-element fr-view')[0].getElementsByTagName('img')[0].src;
		}
		document.getElementsByClassName('fr-element fr-view')[0].getElementsByTagName('img');
		const variables: SaveFormat = {
			noteId: this.props.noteId,
			title: this.state.title,
			tags: this.state.selectedTag,
			data: this.state.content,
			is_publish: this.state.is_publish,
			pre_image,
		};
		return this.props.autoSave({ variables });
	}

	saveAsTheme() {
		const variables: ThemeFormat = {
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
		if (what === 'Card') {
			return (
				<div className={totalCss.mainBox} style={{ backgroundColor: '#FBFBFB', borderRadius: '10px' }}>
					{!full &&
					<div
						className={totalCss.head}
						style={{ padding: '150px 150px 0 150px' }}
					>
						<input
							style={{
								backgroundColor: '#FBFBFB',
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
		if (what === 'List') {
			let mainBoxStyle = { backgroundColor: 'white' };
			if (full) {
				mainBoxStyle = { backgroundColor: '#FBFBFB' };
			}
			return (
				<div className={totalCss.mainBox} style={mainBoxStyle}>
					{!full &&
					<div
						className={totalCss.head}
					>
						<input
							style={{
								backgroundColor: 'white',
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
		return <div />;
	}
}

export default NoteEditor;
