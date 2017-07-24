// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
// froala
// import 'FroalaEditor/froala_editor_sources_2.6.2/js/froala_editor.pkgd.js';
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/js/froala_editor.min';
import 'froala-editor/js/plugins/image.min';
import 'froala-editor/js/plugins/quote.min';
import 'froala-editor/js/plugins/align.min';
import 'froala-editor/js/plugins/file.min';
import 'froala-editor/js/plugins/paragraph_format.min';
import 'froala-editor/js/plugins/code_view.min';
import 'froala-editor/js/plugins/lists.min';
import 'froala-editor/js/plugins/line_breaker.min';
import 'froala-editor/js/plugins/video.min';
import 'froala-editor/js/plugins/link.min';
import ReactLoading from 'react-loading';
import editorConfig from '../../editorConfig';
import { changeTimelineLeftBar } from '../../../../../actions/AppActions';
import { getTagsByCondition } from '../../../../../graphqls/TagGraphQl';
import { saveRequest } from '../../../../../actions/NoteEditorActions';
import { notePreviewUpdate } from '../../../../../graphqls/TimelineGraphQl';
import SideHead from './sideHead';
// css
import parentCss from '../rianListEditor.css';
import editorHeadCss from './style/editorHead.css';
import './style/rianList.global.css';
import './style/reactTag.global.css';
import '../../fontawesome.global.css';
import '../../froalaImage.global.css';
import '../../lineBreaker.global.css';


type Store = {
	App: {
		full: boolean,
		timelineLeftBar: boolean,
		themeColor: string,
	}
};

function mapToState({ App: { full, timelineLeftBar, themeColor } }: Store) {
	return {
		full,
		timelineLeftBar,
		themeColor,
	};
}

function mapToDispatch(dispatch) {
	return {
		changeTimelineLeftBarDispatch() {
			dispatch(changeTimelineLeftBar());
		},
		saveRequestDispatch(method: Function) {
			dispatch(saveRequest(method));
		},
	};
}

type DefaultProps = {
	full: boolean,
	timelineLeftBar: boolean,
	themeColor: string,
	loading: boolean,
	noteId: ?string,
	saveMutate: Function,
	title: string,
	data: string,
	tags: Array<string>,
	saveRequestDispatch: Function,
	changeTimelineLeftBarDispatch: Function
};

type Props = {
	full: boolean,
	timelineLeftBar: boolean,
	themeColor: string,
	noteId: ?string,
	saveMutate: Function,
	title: ?string,
	loading: boolean,
	data: ?string,
	tags: Array<string>,
	saveRequestDispatch: Function,
	changeTimelineLeftBarDispatch: Function
};

type SaveFormat = {
	noteId: ?string,
	title: ?string,
	tags: Array<string>,
	data: ?string,
	preImage: ?string,
};

type State = {
	loading: boolean,
	noteId: ?string,
	data: ?string,
	tags: string,
	title: ?string,
};

@connect(mapToState, mapToDispatch)
class EditorBox extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		full: false,
		timelineLeftBar: true,
		themeColor: '',
		noteId: null,
		saveMutate: () => {},
		data: '',
		tags: [],
		loading: false,
		title: '',
		saveRequestDispatch: () => {},
		changeTimelineLeftBarDispatch: () => {},
	};

	constructor(props: Props) {
		super(props);
		this.saveObservable = this.saveObservable.bind(this);
		this.handleModelChange = this.handleModelChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleTagChange = this.handleTagChange.bind(this);
	}

	state = {
		loading: this.props.loading,
		noteId: this.props.noteId,
		tags: '',
		title: this.props.title,
		data: this.props.data,
	};

	componentDidMount() {
		$.FroalaEditor.RegisterShortcut(49, 'paragraphFormat', 'H1', 'H', false);
		$.FroalaEditor.RegisterShortcut(50, 'paragraphFormat', 'H2', 'H', false);
		$.FroalaEditor.RegisterShortcut(51, 'paragraphFormat', 'H3', 'H', false);
		$(`.${parentCss.container}`).scroll(() => {
			$('.fr-toolbar.fr-desktop.fr-inline').css('display', 'none');
		});
		$('.fr-box').css({
			position: 'relative',
			'max-width': '540px',
			'min-width': '540px',
			'font-family': 'NotoSansCJKkr-Regular',
			height: '100%',
			'font-size': '15px',
			'font-weight': '300',
			'line-height': '1.62',
			'letter-spacing': '-0.4px',
			color: '#515861',
		});
    // if (process.env.NODE_ENV === 'production') {
    // 	this.Interval = setInterval(() => {
    // 		// if compoennent has noteId, it will be saved
    // 		console.log('setInterval');
    // 		this.saveObservable();
    // 	}, 8000);
	// }
			// when user scroll, it will hide inline toolbar
	}

	componentWillReceiveProps(nextProps: Props) {
		// console.log('editior get new Props', this.props, nextProps);
		if (process.env.NODE_ENV === 'production') {
			const {
				loading,
				noteId,
				data,
				tags,
				title,
				full,
				timelineLeftBar,
			} = nextProps;
			if (this.props.full !== full) return;
			if (this.props.timelineLeftBar !== timelineLeftBar) return;
			let tagsString = tags.join('#').replace(/(\s*)/g, '');
			if (tagsString[0] !== '#') {
				tagsString = `#${tagsString}`;
			}
			this.setState({
				loading,
				noteId,
				title,
				tags: tagsString,
				data,
			});
		}
	}
	saveObservable: Function;
	handleModelChange: Function;
	handleChange: Function;
	handleTagChange: Function;
	initControls: any;
	Interval: any;

	saveObservable() {
		const { noteId, saveMutate } = this.props;
		const { title, data } = this.state;
		let { tags } = this.state;
		let preImage = '';
		if (document.getElementsByClassName('fr-element fr-view')[0].getElementsByTagName('img').length > 0) {
			preImage = document.getElementsByClassName('fr-element fr-view')[0].getElementsByTagName('img')[0].src;
		}
		tags = tags.replace(/(\s*)/g, '');
		if (tags[0] !== '#') {
			tags = `#${tags}`;
		}
		if (tags[tags.length - 1] !== '#') {
			tags = `${tags}#`;
		}
		const tagsArray = tags.split('#');
		tagsArray.pop();
		tagsArray.shift();
		const variables: SaveFormat = {
			noteId,
			title,
			data,
			tags: tagsArray,
			preImage,
		};
		// console.log('variables', variables);
		return saveMutate({
			variables,
			refetchQueries: [
				{
					query: notePreviewUpdate,
					variables: { noteId },
				}, {
					query: getTagsByCondition,
					variables: { condition: 'All' },
				},
			],
		});
	}

	handleModelChange(model: string) {
		this.setState(() => ({ data: model }));
	}

	handleChange({ target: { value } }: any) {
		this.setState({
			title: value,
		});
	}

	handleTagChange({ target: { value } }: any) {
		this.setState({
			tags: value,
		});
	}

	render() {
		const {
			full,
			timelineLeftBar,
			themeColor,
			saveRequestDispatch,
			changeTimelineLeftBarDispatch,
		} = this.props;
		const {
			loading,
			data,
			tags,
			title,
		} = this.state;
		const config = editorConfig;
		return (
			<div
				className={parentCss.container}
				style={{ paddingTop: !full ? '0px' : '40px' }}
			>
				<div className={parentCss.sideLine}>
					<div
						className={parentCss.arrowBox}
						onClick={changeTimelineLeftBarDispatch}
						role="button"
						tabIndex="-13"
					>
						{timelineLeftBar
								? <div className={parentCss.leftArrow} />
								: <div className={parentCss.rightArrow} />}
					</div>
				</div>
				<div className={parentCss.editorBox}>
					{loading && <ReactLoading className={parentCss.loader} type="spinningBubbles" color={themeColor} height="20px" width="20px" />}
					{!full &&
					<SideHead
						timelineLeftBar={timelineLeftBar}
						changeTimelineLeftBarDispatch={changeTimelineLeftBarDispatch}
						saveObservable={this.saveObservable}
						saveRequestDispatch={saveRequestDispatch}
					/>}
					<div className={parentCss.editorHead}>
						<div className={editorHeadCss.container}>
							<div
								className={editorHeadCss.tagBox}
								style={{
									height: full && '0px',
									marginTop: full && '40px',
								}}
							>
								<div className={editorHeadCss.gutter}>
									Tag
								</div>
								<input
									className={editorHeadCss.tagContainer}
									value={tags}
									onChange={this.handleTagChange}
								/>
							</div>
							<div className={editorHeadCss.titleHead}>
								<div className={editorHeadCss.gutter}>
									<p className={editorHeadCss.gutterName}>Title</p>
								</div>
								<input
									className={editorHeadCss.title}
									placeholder=""
									value={title}
									onChange={this.handleChange}
								/>
							</div>
							<div className={editorHeadCss.borderBox}>
								<div className={editorHeadCss.borderLine} />
							</div>
						</div>
					</div>
					<div className={parentCss.mainEditor}>
						<FroalaEditor
							tag="div"
							model={data}
							config={config}
							onModelChange={this.handleModelChange}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default EditorBox;
