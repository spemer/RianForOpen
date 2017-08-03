// @flow
import React, { Component } from 'react';
import screenfull from 'screenfull';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import profileImageMock from '../../../static/image/thumb-ex-img.png';
import SearchBox from './searchBox';
import { fullScreenChange, changeRenderTags, changeLeftBar, changeThemeColor, changeNotePreviewSort } from '../../actions/AppActions';
import { deleteComplete } from '../../actions/NoteEditorActions';
import { makeNote, deleteNote } from '../../graphqls/NoteEditorGraphQl';
import { getTagsByCondition } from '../../graphqls/TagGraphQl';
import { getAllMyNotePreviewsByTags } from '../../graphqls/TimelineGraphQl';
import parentCss from '../app/app.css';
import css from './head.css';

type Store = {
	App: {
		full: boolean,
		themeColor: string,
		leftBar: boolean,
		renderTags: Array<string>,
		notePreviewSort: {
			byUpdatedAt: boolean,
			byLatest: boolean,
		},
	},
	NoteEditor: {
		deleteNoteState: {
			progress: boolean,
			noteId: ?string
		},
	},
	User: {
		photo: string,
	}
}

function mapToState({
	App: {
		full,
		themeColor,
		leftBar,
		renderTags,
		notePreviewSort: {
			byUpdatedAt,
			byLatest,
		} },
	NoteEditor: { deleteNoteState },
	User: { photo } }: Store) {
	return {
		full,
		themeColor,
		leftBar,
		renderTags,
		getAllMyNotePreviewsByTags,
		byUpdatedAt,
		byLatest,
		deleteNoteState,
		photo,
	};
}

function mapToDispatch(dispatch) {
	return {
		changeFullScreenApp(argu: boolean) {
			dispatch(fullScreenChange(argu));
		},
		changeLeftBarDispatch() {
			dispatch(changeLeftBar());
		},
		changeThemeColorDispatch(themeColor: string) {
			dispatch(changeThemeColor(themeColor));
		},
		deleteCompleteActionDispatch() {
			dispatch(deleteComplete());
		},
		changeRenderTagsDispatch(tags: Array<string>) {
			dispatch(changeRenderTags(tags));
		},
		changeNotePreviewSortDispatch(byUpdatedAt, byLatest) {
			dispatch(changeNotePreviewSort(byUpdatedAt, byLatest));
		},
	};
}

const getAllMyNotePreviewsByTagsQuery = graphql(getAllMyNotePreviewsByTags, {
	options: props => ({
		variables: {
			tags: props.renderTags,
			byUpdatedAt: props.byUpdatedAt,
			byLatest: props.byLatest,
		},
		ssr: false,
	}),
	name: 'noteData',
	skip: process.env.NODE_ENV === 'development' && true,
});

const makeNoteMutation = graphql(makeNote, {
	name: 'makeNoteMutate',
});

const deleteNoteMutation = graphql(deleteNote, {
	name: 'deleteNoteMutate',
});

function fullScreen() {
	if (screenfull.enabled) {
		screenfull.toggle();
	} else {
    // Ignore or do something else
	}
}

type DefaultProps = {
	changeFullScreenApp: Function,
	changeLeftBarDispatch: Function,
	changeThemeColorDispatch: Function,
	deleteCompleteActionDispatch: Function,
	changeRenderTagsDispatch: Function,
	changeNotePreviewSortDispatch: Function,
	makeNoteMutate: Function,
	deleteNoteMutate: Function,
	noteData: any,
	full: boolean,
	themeColor: string,
	leftBar: boolean,
	byUpdatedAt: boolean,
	byLatest: boolean,
	deleteNoteState: {
		progress: boolean,
		noteId: ?string
	},
	renderTags: Array<string>,
	photo: string,
	pathname: string,
	history: any,
};

type Props = {
	changeFullScreenApp: Function,
	changeLeftBarDispatch: Function,
	changeThemeColorDispatch: Function,
	deleteCompleteActionDispatch: Function,
	changeRenderTagsDispatch: Function,
	changeNotePreviewSortDispatch: Function,
	makeNoteMutate: Function,
	deleteNoteMutate: Function,
	noteData: any,
	full: boolean,
	themeColor: string,
	leftBar: boolean,
	byUpdatedAt: boolean,
	byLatest: boolean,
	deleteNoteState: {
		progress: boolean,
		noteId: ?string
	},
	renderTags: Array<string>,
	photo: string,
	pathname: string,
	history: any,
};

type State = {
  socialOnOff: boolean,
  themeOnOff: boolean,
  makeNoteLoading: boolean,
};

@connect(mapToState, mapToDispatch)
@compose(getAllMyNotePreviewsByTagsQuery, makeNoteMutation, deleteNoteMutation)
class Head extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		changeFullScreenApp: () => {},
		changeLeftBarDispatch: () => {},
		changeThemeColorDispatch: () => {},
		deleteCompleteActionDispatch: () => {},
		changeRenderTagsDispatch: () => {},
		deleteNoteMutate: () => {},
		makeNoteMutate: () => {},
		changeNotePreviewSortDispatch: () => {},
		noteData: {
			loading: false,
			getAllMyNotePreviewsByTags: {
				notes: [{ _id: '342!!@31312312312' }, { _id: 'sdf123sdfasdfasdf' }],
			},
		},
		full: false,
		pathname: '/card',
		history: {},
		themeColor: '',
		renderTags: [],
		leftBar: true,
		byUpdatedAt: true,
		byLatest: true,
		deleteNoteState: {
			progress: false,
			noteId: null,
		},
		photo: profileImageMock,
	};

	constructor(props: Props) {
		super(props);
		this.changeSocialState = this.changeSocialState.bind(this);
		this.changeTagState = this.changeTagState.bind(this);
		this.changeThemeState = this.changeThemeState.bind(this);
		this.fireMutation = this.fireMutation.bind(this);
		this.deleteNoteMutation = this.deleteNoteMutation.bind(this);
	}

	state = {
		socialOnOff: false,
		themeOnOff: false,
		makeNoteLoading: false,
	};

	componentDidMount() {
		$('head').append('<script id="fr-fek">try{(function (k){localStorage.FEK=k;t=document.getElementById(\'fr-fek\');t.parentNode.removeChild(t);})(\'cntD-16qnnvfH3fij==\')}catch(e){}</script>');
		screenfull.onchange(() => {
			if (screenfull.isFullscreen) {
				this.props.changeFullScreenApp(true);
			} else {
				this.props.changeFullScreenApp(false);
			}
		});
	}

	componentDidUpdate(prevProps: Props) {
		// console.log('componentDidUpdate in Head', prevProps, this.props);
		if (!prevProps.deleteNoteState.progress &&
			this.props.deleteNoteState.progress &&
			this.props.deleteNoteState.noteId) {
			this.deleteNoteMutation();
		}
	}

	changeSocialState: Function;
	changeTagState: Function;
	changeThemeState: Function;
	fireMutation: Function;
	deleteNoteMutation: Function;

	changeTagState() {
		this.props.changeLeftBarDispatch();
	}

	changeSocialState() {
		this.setState(prevState => ({
			socialOnOff: !prevState.socialOnOff,
		}));
	}

	changeThemeState() {
		this.setState(prevState => ({
			themeOnOff: !prevState.themeOnOff,
		}));
	}

	async fireMutation() {
		const {
			pathname,
			history,
			makeNoteMutate,
			changeRenderTagsDispatch,
			changeNotePreviewSortDispatch,
			byUpdatedAt,
			byLatest,
		} = this.props;
		changeRenderTagsDispatch([]);
		changeNotePreviewSortDispatch(true, true);
		if (pathname.slice(0, 5) === '/card') {
			this.setState({
				makeNoteLoading: true,
			});
			if (process.env.NODE_ENV === 'production') {
				const makeNoteResult = await makeNoteMutate({
					refetchQueries: [{
						query: getAllMyNotePreviewsByTags,
						variables: { tags: [], byUpdatedAt, byLatest },
					}, {
						query: getTagsByCondition,
						variables: { condition: 'All' },
					}],
				});
				const { data } = makeNoteResult;
				this.setState({
					makeNoteLoading: false,
				});
				history.push(`/card/${data.makeNote.noteId}`);
			}
		}
		if (pathname.slice(0, 5) === '/list') {
			this.setState({
				makeNoteLoading: true,
			});
			if (process.env.NODE_ENV === 'production') {
				const makeNoteResult = await makeNoteMutate({
					refetchQueries: [{
						query: getAllMyNotePreviewsByTags,
						variables: { tags: [], byUpdatedAt, byLatest },
					}, {
						query: getTagsByCondition,
						variables: { condition: 'All' },
					}],
				});
				const { data } = makeNoteResult;
				this.setState({
					makeNoteLoading: false,
				});
				history.push(`/list/${data.makeNote.noteId}`);
			}
		}
	}

	async deleteNoteMutation() {
		const {
			pathname,
			history,
			renderTags,
			deleteNoteMutate,
			deleteNoteState: { noteId },
			deleteCompleteActionDispatch,
			byUpdatedAt,
			byLatest,
		} = this.props;
		try {
			if (pathname.slice(0, 5) === '/card') {
				const deleteNoteResult = await deleteNoteMutate({
					variables: {
						noteId,
					},
					refetchQueries: [{
						query: getAllMyNotePreviewsByTags,
						variables: { tags: renderTags, byUpdatedAt, byLatest },
					}, {
						query: getTagsByCondition,
						variables: { condition: 'All' },
					}],
					update: (store) => {
						let i;
						const data = store.readQuery({
							query: getAllMyNotePreviewsByTags,
							variables: { tags: renderTags, byUpdatedAt, byLatest },
						});
						for (i = 0; i < data.getAllMyNotePreviewsByTags.notes.length; i += 1) {
							if (data.getAllMyNotePreviewsByTags.notes[i]._id === noteId) {
								data.getAllMyNotePreviewsByTags.notes.splice(i, 1);
								break;
							}
						}
						store.writeQuery({
							query: getAllMyNotePreviewsByTags,
							variables: { tags: renderTags, byUpdatedAt, byLatest },
							data,
						});
					},
				});
				const { data: { deleteNote: { success } } } = deleteNoteResult;
				if (success) {
					deleteCompleteActionDispatch();
					history.push('/card/main');
				}
			}
			if (pathname.slice(0, 5) === '/list') {
				let nextRenderNoteId = '';
				const deleteNoteResult = await deleteNoteMutate({
					variables: {
						noteId,
					},
					refetchQueries: [{
						query: getAllMyNotePreviewsByTags,
						variables: { tags: renderTags },
					}, {
						query: getTagsByCondition,
						variables: { condition: 'All' },
					}],
					update: (store) => {
						let i;
						const data = store.readQuery({
							query: getAllMyNotePreviewsByTags,
							variables: { tags: renderTags, byUpdatedAt, byLatest },
						});
						for (i = 0; i < data.getAllMyNotePreviewsByTags.notes.length; i += 1) {
							if (data.getAllMyNotePreviewsByTags.notes[i]._id === noteId) {
								data.getAllMyNotePreviewsByTags.notes.splice(i, 1);
								break;
							}
						}
						store.writeQuery({
							query: getAllMyNotePreviewsByTags,
							variables: { tags: renderTags, byUpdatedAt, byLatest },
							data,
						});
						if (data.getAllMyNotePreviewsByTags.notes[0]) {
							const nextId = data.getAllMyNotePreviewsByTags.notes[0]._id;
							nextRenderNoteId = nextId || 'none';
						}
					},
				});
				nextRenderNoteId = nextRenderNoteId || 'none';
				const { data: { deleteNote: { success } } } = deleteNoteResult;
				if (success) {
					deleteCompleteActionDispatch();
					history.push(`/list/${nextRenderNoteId}`);
				}
			}
		} catch (e) {
			deleteCompleteActionDispatch();
		}
	}

	render() {
		const {
			themeOnOff,
			makeNoteLoading,
		} = this.state;
		const { full,
			changeThemeColorDispatch,
			changeNotePreviewSortDispatch,
			themeColor,
			pathname,
			leftBar,
			noteData,
			photo,
		} = this.props;
		const pathName = pathname.slice(0, 5) === '/card';
		const cardIconColor = pathName ? '#ffffff' : '#BABAC0';
		const listIconColor = !pathName ? '#ffffff' : '#BABAC0';
		const tagIconColor = leftBar ? themeColor : 'black';
		return (
			<div
				className={parentCss.head}
				style={{ height: !full ? '48px' : '0px' }}
			>
				<div className={css.container}>
					<SearchBox />
					{!makeNoteLoading ?
						<div className={css.addNoteIconBox} onClick={this.fireMutation} role="button" tabIndex="-6">
							<svg
								version="1.1"
								id="Capa_1"
								viewBox="0 0 24 24"
								enableBackground="new 0 0 24 24"
								role="button"
								className={css.addNoteIcon}
								fill={themeColor}
							>
								<path d="M8.7,12.4l-1,3c-0.1,0.3,0,0.6,0.2,0.7c0.1,0.1,0.3,0.2,0.5,0.2c0.1,0,0.2,0,0.2,0l3-1c0.1,0,0.2-0.1,0.3-0.2l6.8-6.8
										c0.6-0.6,0.6-1.6,0-2.2l-0.9-0.9c-0.6-0.6-1.6-0.6-2.2,0l-6.8,6.8C8.8,12.2,8.8,12.3,8.7,12.4z M16.3,8.6l-1-1l1.4-1.4
										c0,0,0,0,0.1,0l0.9,0.9c0,0,0,0.1,0,0.1L16.3,8.6z M14.4,8.7l1,1L11,13.9l-1.4,0.5l0.5-1.4L14.4,8.7z"
								/>
								<path d="M19.2,10.3c-0.4,0-0.8,0.4-0.8,0.8v6.9c0,0.2-0.2,0.4-0.4,0.4H6.1c-0.2,0-0.4-0.2-0.4-0.4V6.1c0-0.2,0.2-0.4,0.4-0.4h6.9
										c0.4,0,0.8-0.4,0.8-0.8S13.4,4,12.9,4H6.1C4.9,4,4,4.9,4,6.1v11.9C4,19.1,4.9,20,6.1,20h11.9c1.1,0,2.1-0.9,2.1-2.1v-6.9
										C20,10.6,19.6,10.3,19.2,10.3z"
								/>
							</svg>
							<svg className={css.textIcon} x="0px" y="0px" viewBox="0 0 54 29" enableBackground="new 0 0 54 29">
								<g>
									<path
										fill={themeColor}
										d="M17.9,8V21h-1.8v-6.4h-1v5.8h-1.7v-3.8L12.3,18c-1.1-0.6-1.8-1.7-2.2-2.9c-0.4,1.4-1.2,2.6-2.4,3.3L6.6,17
										c1.9-1.1,2.6-3.5,2.6-5.7V9.2H11v2c0,2.2,0.6,4.3,2.4,5.3V8.3h1.7v4.8h1V8H17.9z"
									/>
									<path fill={themeColor} d="M34.5,18v1.5H22.9V18h4.9v-2.9h-3.6V9H26v4.6h7.3v1.5h-3.7V18H34.5z" />
									<path fill={themeColor} d="M47.4,18v1.5H35.7V18H47.4z M46.2,16.2h-9.1V9h9v1.5H39v1.4h6.8v1.4H39v1.4h7.2V16.2z" />
								</g>
							</svg>
						</div> :
						<ReactLoading className={css.loader} type="spinningBubbles" color={themeColor} height="15px" width="15px" />}
					<div className={css.changeMode}>
						<Link
							className={css.changeLink}
							to="/card/main"
						>
							<div
								className={css.Button}
								onClick={() => { changeNotePreviewSortDispatch(true, true); }}
								style={{
									backgroundColor: pathname.slice(0, 5) === '/card' ? themeColor : 'white',
									color: pathname.slice(0, 5) === '/card' ? 'white' : '#babac0',
								}}
								role="button"
								tabIndex="-5"
							>
								<svg className={css.icon} viewBox="0 0 24 24">
									<g>
										<rect x="18" y="2" fill={cardIconColor} width="4" height="4" />
										<rect x="18" y="10" fill={cardIconColor} width="4" height="4" />
										<rect x="18" y="18" fill={cardIconColor} width="4" height="4" />
										<rect x="10" y="2" fill={cardIconColor} width="4" height="4" />
										<rect x="10" y="10" fill={cardIconColor} width="4" height="4" />
										<rect x="10" y="18" fill={cardIconColor} width="4" height="4" />
										<rect x="2" y="2" fill={cardIconColor} width="4" height="4" />
										<rect x="2" y="10" fill={cardIconColor} width="4" height="4" />
										<rect x="2" y="18" fill={cardIconColor} width="4" height="4" />
									</g>
								</svg>
								<svg className={css.name} viewBox="0 0 26 14">
									<g>
										<path
											fill={cardIconColor}
											d="M7.4,1.8c0,4-0.9,7.3-5.7,9.7l-1-1.4c2.1-1.1,3.4-2.3,4.1-3.7L1,6.8L0.8,5.2L5.3,5c0.1-0.5,0.2-1.1,0.3-1.7
											H1.5V1.8H7.4z M12.7,7h-1.8v6.4H9V0.6h1.8v4.9h1.8V7z"
										/>
										<path fill={cardIconColor} d="M25.3,10.4v1.5H13.6v-1.5H25.3z M24.1,8H15V1.6h9v1.5h-7.1v3.4h7.2V8z" />
									</g>
								</svg>
							</div>
						</Link>
						<Link
							className={css.changeLink}
							to={!noteData.loading && noteData.getAllMyNotePreviewsByTags.notes.length > 0 ? `/list/${noteData.getAllMyNotePreviewsByTags.notes[0]._id}` : '/list/none'}
						>
							<div
								className={css.Button}
								onClick={() => { changeNotePreviewSortDispatch(true, true); }}
								style={{
									backgroundColor: pathname.slice(0, 5) === '/list' ? themeColor : 'white',
									color: pathname.slice(0, 5) === '/list' ? 'white' : '#babac0',
								}}
								role="button"
								tabIndex="-4"
							>
								<svg className={css.listName} viewBox="0 0 26 14">
									<g>
										<path
											fill={listIconColor}
											d="M12.4,6.7v1.5H0.7V6.7h4.9V5.5H2.1V0.9h8.8v4.6H7.5v1.2H12.4z M2,9.1h9v4.2H9.1v-2.8H2V9.1z M4,4h5.1V2.4H4
											V4z"
										/>
										<path
											fill={listIconColor}
											d="M25.3,7.3v1.5H13.6V7.3h4.9V6.4h-3.5V2.9h7V2.1h-7V0.7h8.8v3.5h-7V5h7.2v1.4h-3.8v0.9H25.3z M14.9,9.5h9
											v3.8h-1.8V11h-7.2V9.5z"
										/>
									</g>
								</svg>
								<svg className={css.listIcon} viewBox="0 0 24 24">
									<g>
										<rect x="2" y="2" fill={listIconColor} width="20" height="4" />
										<rect x="2" y="10" fill={listIconColor} width="20" height="4" />
										<rect x="2" y="18" fill={listIconColor} width="20" height="4" />
									</g>
								</svg>
							</div>
						</Link>
					</div>
					<div
						className={css.tag}
						onClick={this.changeTagState}
						role="button"
						tabIndex="0"
					>
						<svg className={css.icon} viewBox="0 0 24 24" opacity={leftBar ? '1' : '0.38'}>
							<g>
								<path
									fill={tagIconColor}
									d="M12,22.9c-0.3,0-0.5-0.1-0.7-0.3l-9.9-9.9c-0.2-0.2-0.3-0.4-0.3-0.7V2.1c0-0.6,0.4-1,1-1H12
									c0.3,0,0.5,0.1,0.7,0.3l9.9,9.9c0.4,0.4,0.4,1,0,1.4l-9.9,9.9C12.5,22.8,12.3,22.9,12,22.9z M3.1,11.6l8.9,8.9l8.5-8.5l-8.9-8.9
									H3.1V11.6z"
								/>
								<circle fill={tagIconColor} cx="6" cy="6" r="1.5" />
								<path
									fill={tagIconColor}
									d="M14.6,15.6c-0.3,0-0.5-0.1-0.7-0.3l-5.1-5.1c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.1,5.1c0.4,0.4,0.4,1,0,1.4
									C15.1,15.5,14.9,15.6,14.6,15.6z"
								/>
								<path
									fill={tagIconColor}
									d="M16.8,13.5c-0.3,0-0.5-0.1-0.7-0.3L10.9,8c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.2,5.2c0.4,0.4,0.4,1,0,1.4
									C17.3,13.4,17.1,13.5,16.8,13.5z"
								/>
								<path
									fill={tagIconColor}
									d="M12.5,17.8c-0.3,0-0.5-0.1-0.7-0.3l-5.2-5.2c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.2,5.2c0.4,0.4,0.4,1,0,1.4
									C13,17.7,12.8,17.8,12.5,17.8z"
								/>
							</g>
						</svg>
						<svg className={css.name} viewBox="0 0 26 14" opacity={leftBar ? '1' : '0.38'}>
							<g>
								<path
									fill={tagIconColor}
									d="M2.7,9c1.4,0,2.5-0.1,3.7-0.3l0.2,1.5c-1.5,0.3-2.8,0.3-4.7,0.3H0.9V1.9h5.2v1.5H2.7v1.9h3.2v1.4H2.7V9z
									M11.6,0.5v12.9H9.8V7h-1v5.9H7.1V0.8h1.7v4.8h1v-5H11.6z"
								/>
								<path
									fill={tagIconColor}
									d="M25.1,10.3v1.5H13.4v-1.5H25.1z M21.8,3.2h-7.2V1.7h9v1.5c0,1.8,0,3.6-0.5,6.2l-1.8-0.2
									C21.8,6.9,21.8,5,21.8,3.2L21.8,3.2z"
								/>
							</g>
						</svg>
					</div>
					<div
						className={css.focusFull}
						onClick={pathname.slice(0, 5) === '/list' && fullScreen}
						role="button"
						tabIndex="-5"
					>
						<svg className={css.icon} viewBox="0 0 24 24" opacity={pathName ? '0.1' : '0.38'}>
							<circle fill="black" cx="12" cy="12" r="9" />
							<circle fill="#FFFFFF" cx="12" cy="12" r="7" />
							<circle fill="black" cx="12" cy="12" r="2" />
						</svg>
						<svg className={css.name} viewBox="0 0 26 14" opacity={pathName ? '0.1' : '0.38'}>
							<g>
								<path
									fill="black"
									d="M7.9,7.4C6.4,7,5.4,6.1,4.8,5C4.2,6.2,3.2,7.1,1.7,7.6L0.8,6.2c2-0.6,3-2,3.1-3.5H1.3V1.2h7v1.5H5.7
									c0.1,1.4,1.1,2.7,3,3.3L7.9,7.4z M9.6,8.1h1.8v5.2H2.9V8.1h1.8v1.2h4.9V8.1z M9.6,10.7H4.7v1.1h4.9V10.7z M11.4,0.5v7H9.6v-7H11.4z
									"
								/>
								<path
									fill="black"
									d="M20.3,7.9v1c2.2,0.2,3.5,1,3.5,2.3c0,1.5-1.7,2.3-4.5,2.3c-2.8,0-4.5-0.9-4.5-2.3c0-1.3,1.3-2.1,3.6-2.3
									V7.9h-4.9V6.4h11.7v1.5H20.3z M14.1,4.5c2.4-0.2,3.7-1.1,4-1.9h-3.4V1.1h9.5v1.5h-3.4c0.3,0.9,1.6,1.7,4,1.9l-0.6,1.4
									c-2.4-0.2-4-1.1-4.7-2.3c-0.7,1.2-2.3,2.1-4.7,2.3L14.1,4.5z M19.4,10.2c-1.7,0-2.6,0.3-2.6,0.9c0,0.6,0.9,0.9,2.6,0.9
									s2.6-0.3,2.6-0.9C22,10.5,21.1,10.2,19.4,10.2z"
								/>
							</g>
						</svg>
					</div>
					<div
						className={css.theme}
						onClick={this.changeThemeState}
						role="button"
						tabIndex="-5"
					>
						<svg className={css.icon} viewBox="0 0 24 24" opacity={themeOnOff ? '1' : '0.38'}>
							<path
								fill={themeOnOff ? themeColor : 'black'}
								d="M12,3c-5,0-9,4-9,9s4,9,9,9c0.8,0,1.5-0.7,1.5-1.5c0-0.4-0.1-0.7-0.4-1c-0.2-0.3-0.4-0.6-0.4-1
								c0-0.8,0.7-1.5,1.5-1.5H16c2.8,0,5-2.2,5-5C21,6.6,17,3,12,3z M6.5,12C5.7,12,5,11.3,5,10.5S5.7,9,6.5,9S8,9.7,8,10.5S7.3,12,6.5,12
								z M9.5,8C8.7,8,8,7.3,8,6.5S8.7,5,9.5,5S11,5.7,11,6.5S10.3,8,9.5,8z M14.5,8C13.7,8,13,7.3,13,6.5S13.7,5,14.5,5S16,5.7,16,6.5
								S15.3,8,14.5,8z M17.5,12c-0.8,0-1.5-0.7-1.5-1.5S16.7,9,17.5,9S19,9.7,19,10.5S18.3,12,17.5,12z"
							/>
						</svg>

						<svg className={css.name} viewBox="0 0 26 14" opacity={themeOnOff ? '1' : '0.38'}>
							<g>
								<path
									fill={themeOnOff ? themeColor : 'black'}
									d="M2.5,9.1c1.3,0,2.4-0.1,3.5-0.3l0.2,1.5c-1.5,0.2-2.7,0.3-4.5,0.3H0.8V2h4.8v1.5h-3v2H5v1.4H2.5V9.1z
									M7,0.8h1.7v12.1H7V6.7H5.6V5.2H7V0.8z M11.5,0.5v12.9H9.7V0.5H11.5z"
								/>
								<path
									fill={themeOnOff ? themeColor : 'black'}
									d="M13.7,1.8h6.2v8.5h-6.2V1.8z M15.5,8.9H18V3.2h-2.5V8.9z M25.2,6.9h-1.9v6.5h-1.8V0.6h1.8v4.8h1.9V6.9z"
								/>
							</g>
						</svg>
					</div>
					{themeOnOff &&
					<div className={css.selectList} style={{ zIndex: '777' }}>
						<div className={css.menuTitle}>
							<div className={css.name}>색상선택</div>
						</div>
						<div className={css.selectBox}>
							<div
								className={css.selectOne}
								onClick={() => { this.changeThemeState(); changeThemeColorDispatch('#ff9ab2'); }}
								style={{ borderLeft: themeColor === '#ff9ab2' && '4px solid #ff9ab2' }}
								role="button"
								tabIndex="0"
							>
								<div className={css.name} style={{ color: '#ff9ab2', left: themeColor === '#ff9ab2' && '10px' }}>베이비 핑크</div>
								<div className={css.circle} style={{ backgroundColor: '#ff9ab2' }} />
							</div>
							<div
								className={css.selectOne}
								onClick={() => { this.changeThemeState(); changeThemeColorDispatch('#ff3466'); }}
								style={{ borderLeft: themeColor === '#ff3466' && '4px solid #ff3466' }}
								role="button"
								tabIndex="-7"
							>
								<div className={css.name} style={{ color: '#ff3466', left: themeColor === '#ff3466' && '10px' }}>레드 핑크</div>
								<div className={css.circle} style={{ backgroundColor: '#ff3466' }} />
							</div>
							<div
								className={css.selectOne}
								onClick={() => { this.changeThemeState(); changeThemeColorDispatch('#1ce8b5'); }}
								style={{ borderLeft: themeColor === '#1ce8b5' && '4px solid #1ce8b5' }}
								role="button"
								tabIndex="-7"
							>
								<div className={css.name} style={{ color: '#1ce8b5', left: themeColor === '#1ce8b5' && '10px' }}>아쿠아마린</div>
								<div className={css.circle} style={{ backgroundColor: '#1ce8b5' }} />
							</div>
							<div
								className={css.selectOne}
								onClick={() => { this.changeThemeState(); changeThemeColorDispatch('#2dcc4f'); }}
								style={{ borderLeft: themeColor === '#2dcc4f' && '4px solid #2dcc4f' }}
								role="button"
								tabIndex="-7"
							>
								<div className={css.name} style={{ color: '#2dcc4f', left: themeColor === '#2dcc4f' && '10px' }}>네츄럴 그린</div>
								<div className={css.circle} style={{ backgroundColor: '#2dcc4f' }} />
							</div>
							<div
								className={css.selectOne}
								onClick={() => { this.changeThemeState(); changeThemeColorDispatch('#0088ff'); }}
								style={{ borderLeft: themeColor === '#0088ff' && '4px solid #0088ff' }}
								role="button"
								tabIndex="-7"
							>
								<div className={css.name} style={{ color: '#0088ff', left: themeColor === '#0088ff' && '10px' }}>라이트 블루</div>
								<div className={css.circle} style={{ backgroundColor: '#0088ff' }} />
							</div>
							<div
								className={css.selectOne}
								onClick={() => { this.changeThemeState(); changeThemeColorDispatch('#536dfe'); }}
								style={{ borderLeft: themeColor === '#536dfe' && '4px solid #536dfe' }}
								role="button"
								tabIndex="-7"
							>
								<div className={css.name} style={{ color: '#536dfe', left: themeColor === '#536dfe' && '10px' }}>퍼플 블루</div>
								<div className={css.circle} style={{ backgroundColor: '#536dfe' }} />
							</div>
							<div
								className={css.selectOne}
								onClick={() => { this.changeThemeState(); changeThemeColorDispatch('#9f9f9f'); }}
								style={{ borderLeft: themeColor === '#9f9f9f' && '4px solid #9f9f9f' }}
								role="button"
								tabIndex="-7"
							>
								<div className={css.name} style={{ color: '#9f9f9f', left: themeColor === '#9f9f9f' && '10px' }}>웜 그레이</div>
								<div className={css.circle} style={{ backgroundColor: '#9f9f9f' }} />
							</div>
							<div
								className={css.selectOne}
								onClick={() => { this.changeThemeState(); changeThemeColorDispatch('#353946'); }}
								style={{ borderLeft: themeColor === '#353946' && '4px solid #353946' }}
								role="button"
								tabIndex="-7"
							>
								<div className={css.name} style={{ color: '#353946', left: themeColor === '#353946' && '10px' }}>클래식 다크</div>
								<div className={css.circle} style={{ backgroundColor: '#353946' }} />
							</div>
						</div>
					</div>}
					<div
						className={css.social}
						onClick={this.changeSocialState}
						role="button"
						tabIndex="-1"
					>
						<svg className={css.icon} viewBox="0 0 24 24" opacity="0.1">
							<g>
								<path
									fill="black"
									d="M17.5,12.6c1.8,0,3.2-1.5,3.2-3.3s-1.5-3.3-3.2-3.3c-1.8,0-3.2,1.5-3.2,3.3C14.3,11.1,15.8,12.6,17.5,12.6z
									M15.6,9.4c0.1-1.1,1-1.9,1.9-1.9c1,0,1.9,0.9,1.9,1.9s-0.9,1.9-1.9,1.9C16.4,11.2,15.6,10.4,15.6,9.4z"
								/>
								<path
									fill="black"
									d="M17.5,14.3c-0.5,0-1.4,0.1-2.5,0.4h-0.1l0.1,0.1c0.3,0.3,0.5,0.8,0.7,1.2V16h0.1c0.8-0.1,1.3-0.2,1.7-0.2
									c1.7,0,4.4,0.9,4.4,1.9v1.4H16v0.7c0,0.2-0.1,0.5-0.2,0.8v-0.1h7c0.5,0,0.8-0.3,0.8-0.8v-2.2C23.3,15.1,19.3,14.3,17.5,14.3z"
								/>
								<path
									fill="black"
									d="M7.5,11.4c2.2,0,4-1.8,4-4s-1.8-4-4-4c-2.2,0.1-3.9,1.8-3.9,4S5.3,11.4,7.5,11.4z M5.2,7.4
									c0-1.2,1-2.3,2.3-2.3s2.3,1.1,2.3,2.3s-1,2.3-2.3,2.3S5.2,8.6,5.2,7.4z"
								/>
								<path
									fill="black"
									d="M13.7,15.2c-1.5-1.4-4.6-2-6.1-2c-2.4,0-7.1,1.2-7.1,4v2.6c0,0.4,0.4,0.9,0.9,0.9h12.5
									c0.5,0,0.9-0.4,0.9-0.9v-2.4c0-0.3-0.1-0.7-0.2-1C14.2,15.8,14,15.4,13.7,15.2z M2.1,17.3C2.1,16,5.5,15,7.5,15
									c1.3,0,3.4,0.5,4.7,1.2c0.5,0.3,0.8,0.6,0.8,1V19H2.1V17.3z"
								/>
							</g>
						</svg>
						<svg className={css.name} viewBox="0 0 26 14" opacity="0.1">
							<g>
								<path
									fill="black"
									d="M12.7,10.5V12H1v-1.5h4.9V7.6h1.8v2.9H12.7z M11.5,8C9.2,7.6,7.6,6.4,6.8,4.8C5.9,6.4,4.3,7.6,2,8L1.3,6.5
									C4.2,6,5.8,4.1,5.8,2.3V1.3h2v0.9c0,1.8,1.6,3.8,4.5,4.2L11.5,8z"
								/>
								<path
									fill="black"
									d="M20.6,7.3c-1.4-0.5-2.3-1.4-2.9-2.6c-0.6,1.3-1.6,2.3-3,2.8L13.8,6c2.1-0.7,3-2.3,3-4V1h1.9v1.1
									c0,1.6,0.9,3.2,2.9,3.8L20.6,7.3z M25,12v1.4h-8.9V9.9h6.7V9.2h-6.7V7.8h8.5v3.4H18V12H25z M22.8,5.2h-2.1V3.8h2.1V3h-2.1V1.6h2.1
									V0.6h1.8v6.7h-1.8V5.2z"
								/>
							</g>
						</svg>
					</div>
					<div className={css.profileBox}>
						<div
							className={css.photo}
							style={{ backgroundImage: `url(${photo})` }}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Head;
