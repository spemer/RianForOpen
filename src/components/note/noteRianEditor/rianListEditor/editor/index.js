// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { debounce } from 'lodash';
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
import { makeTagToString, makeStringToTagArray } from '../../../../util/handleData';
import editorConfig from '../../editorConfig';
import { changeTimelineLeftBar } from '../../../../../actions/AppActions';
import { getTagsByCondition } from '../../../../../graphqls/TagGraphQl';
import { saveRequest, saveRequestCancle, deleteRequest } from '../../../../../actions/NoteEditorActions';
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
		saveRequestCancleDispatch() {
			dispatch(saveRequestCancle());
		},
		deleteRequestDispatch(noteId: string) {
			dispatch(deleteRequest(noteId));
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
	data: ?string,
	tags: Array<string>,
	saveRequestDispatch: Function,
	changeTimelineLeftBarDispatch: Function,
	deleteRequestDispatch: Function,
	saveRequestCancleDispatch: Function,
};

type Props = {
	full: boolean,
	timelineLeftBar: boolean,
	themeColor: string,
	noteId: ?string,
	saveMutate: Function,
	title: string,
	loading: boolean,
	data: ?string,
	tags: Array<string>,
	saveRequestDispatch: Function,
	changeTimelineLeftBarDispatch: Function,
	deleteRequestDispatch: Function,
	saveRequestCancleDispatch: Function,
};

type SaveFormat = {
	noteId: ?string,
	title: ?string,
	tags: Array<string>,
	data: ?string,
	preImage: ?string,
};

type State = {
	saveDebounce: boolean,
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
		data: null,
		tags: [],
		loading: false,
		title: '',
		saveRequestDispatch: () => {},
		changeTimelineLeftBarDispatch: () => {},
		deleteRequestDispatch: () => {},
		saveRequestCancleDispatch: () => {},
	};

	constructor(props: Props) {
		super(props);
		this.saveObservable = this.saveObservable.bind(this);
		this.handleModelChange = this.handleModelChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleTagChange = this.handleTagChange.bind(this);
		this.saveDebounce = debounce(() => {
			if (this.state.saveDebounce) {
				this.props.saveRequestDispatch(this.saveObservable);
			} else {
				// 오토세이브 비활성화 상태이고, 로딩을 끝내고 데이터가 도착한 상태이면
				// 첫번째는 오토세이브를 시키지 않고 대신 다음번 변경 부터 오토세이브활성화
				// setState가 배치처리되어 오류가 발생하시 않도록 함수형 setState로 작성
				this.setState(() => ({
					saveDebounce: true,
				}));
			}
		}, 3000);
	}

	state = {
		saveDebounce: false,
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
		$(`.${parentCss.editorBox}`).scroll(() => {
			$('.fr-toolbar.fr-desktop.fr-inline').css('display', 'none');
		});
		$('.fr-box').css({
			position: 'relative',
			width: '540px',
			'max-width': '540px',
			'min-width': '200px',
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
		if (process.env.NODE_ENV === 'production' && !SERVER) {
			const {
				loading,
				noteId,
				data,
				tags,
				title,
				full,
				timelineLeftBar,
				saveRequestCancleDispatch,
			} = nextProps;
			if (this.props.full !== full) return;
			if (this.props.timelineLeftBar !== timelineLeftBar) return;
			// 만약 노트 아이디가 바뀌었으면 기존의 뮤테이션 프로미스를 캔슬
			if (this.props.noteId !== noteId) {
				saveRequestCancleDispatch();
			}
			// 오토 세이브 활성화 조건 지정
			let saveDebounce = true;
			if (loading) {
				// 만약 노트가 로딩중이면 오토세이브 비활성화
				saveDebounce = false;
			} else if (this.props.loading && !loading) {
				// 노트가 로딩을 끝내고 막 도착했을때, 최초의 오토세이브를 막는다.
				saveDebounce = false;
			}
			this.setState({
				saveDebounce,
				loading,
				noteId,
				title,
				tags: makeTagToString(tags),
				data,
			});
		}
	}

	saveObservable: Function;
	handleModelChange: Function;
	handleChange: Function;
	handleTagChange: Function;
	saveDebounce: Function;
	initControls: any;
	Interval: any;

	saveObservable() {
		const { saveMutate } = this.props;
		const { noteId, title, data, tags } = this.state;
		let preImage = '';
		if (document.getElementsByClassName('fr-element fr-view')[0].getElementsByTagName('img').length > 0) {
			preImage = document.getElementsByClassName('fr-element fr-view')[0].getElementsByTagName('img')[0].src;
		}
		const variables: SaveFormat = {
			noteId,
			title,
			data,
			tags: makeStringToTagArray(tags),
			preImage,
		};
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
		this.setState({ data: model });
		// 만약 모델에 아무 값도 없으면(null or '') 세이브 자체를 실행시키지 않는다 ex.로딩중
		if (!model) return;
		this.saveDebounce();
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
			deleteRequestDispatch,
		} = this.props;
		const {
			noteId,
			loading,
			data,
			tags,
			title,
		} = this.state;
		const config = editorConfig;
		return (
			<div
				className={parentCss.container}
			>
				{!full &&
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
				</div>}
				<div className={parentCss.editorBox}>
					{loading && <ReactLoading className={parentCss.loader} type="spinningBubbles" color={themeColor} height="20px" width="20px" />}
					<SideHead
						full={full}
						noteId={noteId}
						timelineLeftBar={timelineLeftBar}
						changeTimelineLeftBarDispatch={changeTimelineLeftBarDispatch}
						saveObservable={this.saveObservable}
						saveRequestDispatch={saveRequestDispatch}
						deleteRequestDispatch={deleteRequestDispatch}
					/>
					<div className={parentCss.editorHead}>
						<div className={editorHeadCss.container}>
							<div
								className={editorHeadCss.tagBox}
								style={{
									visibility: full && 'hidden',
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
