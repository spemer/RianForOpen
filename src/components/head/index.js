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
		if (!SERVER && !navigator.userAgent.match(
			/Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)) {
			screenfull.onchange(() => {
				if (screenfull.isFullscreen) {
					this.props.changeFullScreenApp(true);
				} else {
					this.props.changeFullScreenApp(false);
				}
			});
		}
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
								<svg className={css.name} viewBox="0 0 26 14">
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
							</div>
						</Link>
					</div>
					<div
						className={css.tag}
						onClick={this.changeTagState}
						role="button"
						tabIndex="0"
					>
						<svg className={css.icon} viewBox="0 0 58 24" opacity={leftBar ? '1' : '0.38'}>
							<g>
								<g>
									<path
										fill={tagIconColor}
										d="M14,20c-0.2,0-0.4-0.1-0.5-0.2l-7.3-7.3C6,12.4,6,12.2,6,12V4.7C6,4.3,6.3,4,6.7,4H14
			c0.2,0,0.4,0.1,0.5,0.2l7.3,7.3c0.3,0.3,0.3,0.8,0,1l-7.3,7.3C14.3,19.9,14.2,20,14,20z M7.4,11.7l6.5,6.5l6.2-6.2l-6.5-6.5H7.4
			V11.7z"
									/>
									<circle fill={tagIconColor} cx="9.6" cy="7.6" r="1.1" />
									<path
										fill={tagIconColor}
										d="M15.9,14.6c-0.2,0-0.4-0.1-0.5-0.2l-3.7-3.7c-0.3-0.3-0.3-0.8,0-1s0.8-0.3,1,0l3.7,3.7
			c0.3,0.3,0.3,0.8,0,1C16.3,14.6,16.1,14.6,15.9,14.6z"
									/>
									<path
										fill={tagIconColor}
										d="M17.5,13.1c-0.2,0-0.4-0.1-0.5-0.2l-3.8-3.8c-0.3-0.3-0.3-0.8,0-1c0.3-0.3,0.8-0.3,1,0l3.8,3.8
			c0.3,0.3,0.3,0.8,0,1C17.9,13,17.7,13.1,17.5,13.1z"
									/>
									<path
										fill={tagIconColor}
										d="M14.3,16.3c-0.2,0-0.4-0.1-0.5-0.2L10,12.2c-0.3-0.3-0.3-0.8,0-1s0.8-0.3,1,0l3.8,3.8c0.3,0.3,0.3,0.8,0,1
			C14.7,16.2,14.5,16.3,14.3,16.3z"
									/>
								</g>
								<g>
									<path
										fill={tagIconColor}
										d="M29.7,14c1.4,0,2.5-0.1,3.7-0.3l0.2,1.5c-1.5,0.3-2.8,0.3-4.7,0.3h-0.9V6.9h5.2v1.5h-3.5v1.9h3.2v1.4h-3.2
			V14z M38.5,5.5v12.9h-1.8V12h-1v5.9H34V5.8h1.7v4.8h1v-5H38.5z"
									/>
									<path
										fill={tagIconColor}
										d="M52,15.3v1.5H40.4v-1.5H52z M48.8,8.2h-7.2V6.7h9v1.5c0,1.8,0,3.6-0.5,6.2l-1.8-0.2
			C48.8,11.9,48.8,10,48.8,8.2L48.8,8.2z"
									/>
								</g>
							</g>
						</svg>
					</div>
					<div
						className={css.theme}
						onClick={this.changeThemeState}
						role="button"
						tabIndex="-5"
					>
						<svg className={css.icon} viewBox="0 0 58 24" opacity={themeOnOff ? '1' : '0.38'}>
							<g>
								<path
									fill={themeOnOff ? themeColor : 'black'}
									d="M13.9,4c-4.4,0-8,3.6-8,8s3.6,8,8,8c0.7,0,1.3-0.6,1.3-1.3c0-0.3-0.1-0.7-0.3-0.9c-0.2-0.2-0.3-0.5-0.3-0.9
		c0-0.7,0.6-1.3,1.3-1.3h1.6c2.5,0,4.4-2,4.4-4.4C21.9,7.2,18.3,4,13.9,4z M9,12c-0.7,0-1.3-0.6-1.3-1.3S8.3,9.3,9,9.3
		s1.3,0.6,1.3,1.3S9.7,12,9,12z M11.7,8.4c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3S13,6.4,13,7.1S12.4,8.4,11.7,8.4z M16.1,8.4
		c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3S16.8,8.4,16.1,8.4z M18.8,12c-0.7,0-1.3-0.6-1.3-1.3
		s0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3S19.5,12,18.8,12z"
								/>
								<g>
									<path
										fill={themeOnOff ? themeColor : 'black'}
										d="M29.4,14.1c1.3,0,2.4-0.1,3.5-0.3l0.2,1.5c-1.5,0.2-2.7,0.3-4.5,0.3h-0.9V7h4.8v1.5h-3v2h2.5v1.4h-2.5
			V14.1z M33.9,5.8h1.7v12.1h-1.7v-6.1h-1.4v-1.5h1.4V5.8z M38.3,5.5v12.9h-1.8V5.5H38.3z"
									/>
									<path
										fill={themeOnOff ? themeColor : 'black'}
										d="M40.5,6.8h6.2v8.5h-6.2V6.8z M42.4,13.9h2.5V8.2h-2.5V13.9z M52.1,11.9h-1.9v6.5h-1.8V5.6h1.8v4.8h1.9
			V11.9z"
									/>
								</g>
							</g>
						</svg>
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
					</div>
					<div
						className={css.focusFull}
						onClick={pathname.slice(0, 5) === '/list' && fullScreen}
						role="button"
						tabIndex="-5"
					>
						<svg className={css.icon} viewBox="0 0 58 24" opacity={pathName ? '0.1' : '0.38'}>
							<g>
								<g>
									<circle fill="black" cx="13.9" cy="12" r="8" />
									<circle fill="#FFFFFF" cx="13.9" cy="12" r="6.2" />
									<circle fill="black" cx="13.9" cy="12" r="1.8" />
								</g>
								<g>
									<path
										fill="black"
										d="M34.7,12.4c-1.5-0.4-2.5-1.3-3-2.4c-0.6,1.2-1.6,2.2-3.1,2.6l-0.9-1.5c2-0.6,3-2,3.1-3.5h-2.6V6.2h7v1.5
			h-2.5c0.1,1.4,1.1,2.7,3,3.3L34.7,12.4z M36.5,13.1h1.8v5.2h-8.6v-5.2h1.8v1.2h4.9V13.1z M36.5,15.7h-4.9v1.1h4.9V15.7z M38.3,5.5
			v7h-1.9v-7H38.3z"
									/>
									<path
										fill="black"
										d="M47.2,12.9v1c2.2,0.2,3.5,1,3.5,2.3c0,1.5-1.7,2.3-4.5,2.3c-2.8,0-4.5-0.9-4.5-2.3c0-1.3,1.3-2.1,3.6-2.3
			v-0.9h-4.9v-1.5h11.7v1.5H47.2z M41,9.5c2.4-0.2,3.7-1.1,4-1.9h-3.4V6.1h9.5v1.5h-3.4c0.3,0.9,1.6,1.7,4,1.9L51,10.9
			c-2.4-0.2-4-1.1-4.7-2.3c-0.7,1.2-2.3,2.1-4.7,2.3L41,9.5z M46.3,15.2c-1.7,0-2.6,0.3-2.6,0.9c0,0.6,0.9,0.9,2.6,0.9
			s2.6-0.3,2.6-0.9C48.9,15.5,48,15.2,46.3,15.2z"
									/>
								</g>
							</g>
						</svg>
					</div>
					<div
						className={css.social}
						onClick={this.changeSocialState}
						role="button"
						tabIndex="-1"
					>
						<svg className={css.icon} viewBox="0 0 58 24" opacity="0.1">
							<g>
								<g>
									<path
										fill="black"
										d="M19.4,12.5c1.8,0,3.1-1.4,3.1-3s-1.5-3-3.1-3c-1.8,0-3.1,1.4-3.1,3C16.3,11.2,17.7,12.5,19.4,12.5z
			M17.5,9.6c0.1-1,0.9-1.8,1.8-1.8c1,0,1.8,0.8,1.8,1.8s-0.8,1.8-1.8,1.8C18.4,11.3,17.5,10.5,17.5,9.6z"
									/>
									<path
										fill="black"
										d="M19.4,14.1c-0.5,0-1.4,0.1-2.4,0.4h-0.1l0.1,0.1c0.3,0.3,0.5,0.7,0.6,1.1v0.1h0.1c0.7-0.1,1.3-0.2,1.7-0.2
			c1.7,0,4.2,0.8,4.2,1.8v1.3h-5.7v0.6c0,0.2-0.1,0.4-0.2,0.7v-0.1h6.7c0.5,0,0.7-0.3,0.7-0.7v-2C25,14.8,21.1,14.1,19.4,14.1z"
									/>
									<path
										fill="black"
										d="M9.7,11.5c2.1,0,3.9-1.7,3.9-3.7S11.8,4,9.7,4C7.5,4.1,5.9,5.7,5.9,7.7S7.5,11.5,9.7,11.5z M7.5,7.7
			c0-1.2,1-2.1,2.2-2.1s2.2,1,2.2,2.1s-1,2.1-2.2,2.1S7.5,8.9,7.5,7.7z"
									/>
									<path
										fill="black"
										d="M15.7,14.9c-1.5-1.3-4.4-1.9-5.9-1.9c-2.3,0-6.8,1.2-6.8,3.7v2.4c0,0.4,0.4,0.8,0.8,0.8h12.1
			c0.5,0,0.8-0.4,0.8-0.8V17c0-0.3-0.1-0.6-0.2-0.9C16.2,15.6,16,15.2,15.7,14.9z M4.5,16.9c0-1.2,3.2-2.1,5.2-2.1
			c1.3,0,3.3,0.4,4.5,1.2c0.5,0.3,0.7,0.5,0.7,0.9v1.7H4.5V16.9z"
									/>
								</g>
								<g>
									<path
										fill="black"
										d="M42.7,15.5V17H31v-1.5h4.9v-2.9h1.8v2.9H42.7z M41.6,13c-2.3-0.4-3.9-1.6-4.8-3.2
			c-0.8,1.6-2.5,2.8-4.7,3.2l-0.8-1.5c2.9-0.5,4.5-2.5,4.5-4.2V6.3h2v0.9c0,1.8,1.6,3.8,4.5,4.2L41.6,13z"
									/>
									<path
										fill="black"
										d="M50.7,12.3c-1.4-0.5-2.3-1.4-2.9-2.6c-0.6,1.3-1.6,2.3-3,2.8L43.8,11c2.1-0.7,3-2.3,3-4V6h1.9v1.1
			c0,1.6,0.9,3.2,2.9,3.8L50.7,12.3z M55.1,17v1.4h-8.9v-3.5h6.7v-0.7h-6.7v-1.4h8.5v3.4H48V17H55.1z M52.9,10.2h-2.1V8.8h2.1V8
			h-2.1V6.6h2.1V5.6h1.8v6.7h-1.8V10.2z"
									/>
								</g>
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
