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
import 'froala-editor/js/plugins/link.min';
import 'froala-editor/js/languages/ko';
import ReactLoading from 'react-loading';
import { makeTagToString, makeStringToTagArray } from '../../../../util/handleData';
import editorConfig from '../../editorConfig';
import { changeTimelineLeftBar } from '../../../../../actions/AppActions';
import { saveRequest, deleteRequest } from '../../../../../actions/NoteEditorActions';
import { notePreviewUpdate } from '../../../../../graphqls/TimelineGraphQl';
import { getTagsByCondition } from '../../../../../graphqls/TagGraphQl';
import SideHead from './sideHead';
// css
import parentCss from '../rianModalEditor.css';
import editorHeadCss from './style/editorHead.css';
import './style/rianModal.global.css';
import './style/reactTag.global.css';
import '../../fontawesome.global.css';
import '../../froalaImage.global.css';
import '../../lineBreaker.global.css';

type Store = {
	App: {
		themeColor: string,
	}
};

function mapToState({ App: { themeColor } }: Store) {
	return {
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
		deleteRequestDispatch(noteId: string) {
			dispatch(deleteRequest(noteId));
		},
	};
}

type DefaultProps = {
	themeColor: string,
	loading: boolean,
	noteId: ?string,
	saveMutate: Function,
	title: string,
	data: string,
	tags: Array<string>,
	saveRequestDispatch: Function,
	changeTimelineLeftBarDispatch: Function,
	deleteRequestDispatch: Function,
};

type Props = {
	themeColor: string,
	noteId: ?string,
	saveMutate: Function,
	title: ?string,
	loading: boolean,
	data: ?string,
	tags: Array<string>,
	saveRequestDispatch: Function,
	changeTimelineLeftBarDispatch: Function,
	deleteRequestDispatch: Function,
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
		themeColor: '',
		noteId: null,
		saveMutate: () => {},
		data: '',
		tags: [],
		loading: false,
		title: '',
		saveRequestDispatch: () => {},
		changeTimelineLeftBarDispatch: () => {},
		deleteRequestDispatch: () => {},
	};

	constructor(props: Props) {
		super(props);
		this.saveObservable = this.saveObservable.bind(this);
		this.handleModelChange = this.handleModelChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleTagChange = this.handleTagChange.bind(this);
		this.saveDebounce = debounce(() => {
			this.props.saveRequestDispatch(this.saveObservable);
		}, 1000);
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
		$(`.${parentCss.overlay}`).scroll(() => {
			$('.fr-toolbar.fr-desktop.fr-inline').css('display', 'none');
		});
		$('.fr-box').css({
			position: 'relative',
			'max-width': '540px',
			'min-width': '540px',
			'min-height': '700px',
			'font-family': 'NotoSansCJKkr-Regular',
			height: '100%',
			'font-size': '15px',
			'font-weight': '300',
			'line-height': '1.62',
			'letter-spacing': '-0.4px',
			color: '#515861',
		});
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
			} = nextProps;

			this.setState({
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
				className={parentCss.ModalContainer}
			>
				<div className={parentCss.editorBox}>
					{loading && <ReactLoading className={parentCss.loader} type="spinningBubbles" color={themeColor} height="20px" width="20px" />}
					<SideHead
						noteId={noteId}
						changeTimelineLeftBarDispatch={changeTimelineLeftBarDispatch}
						saveObservable={this.saveObservable}
						saveRequestDispatch={saveRequestDispatch}
						deleteRequestDispatch={deleteRequestDispatch}
					/>
					<div className={parentCss.editorHead}>
						<div className={editorHeadCss.container}>
							<div
								className={editorHeadCss.tagBox}
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
