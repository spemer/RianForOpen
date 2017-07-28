// @flow
import React, { Component } from 'react';
import screenfull from 'screenfull';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import profileImageMock from '../../../static/image/thumb-ex-img.png';
import SearchBox from './searchBox';
import { fullScreenChange, changeRenderTags, changeLeftBar, changeThemeColor } from '../../actions/AppActions';
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
	App: { full, themeColor, leftBar, renderTags },
	NoteEditor: { deleteNoteState },
	User: { photo } }: Store) {
	return {
		full,
		themeColor,
		leftBar,
		renderTags,
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
	};
}

const getAllMyNotePreviewsByTagsQuery = graphql(getAllMyNotePreviewsByTags, {
	options: props => ({
		variables: {
			tags: props.renderTags,
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
	makeNoteMutate: Function,
	deleteNoteMutate: Function,
	noteData: any,
	full: boolean,
	themeColor: string,
	leftBar: boolean,
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
	makeNoteMutate: Function,
	deleteNoteMutate: Function,
	noteData: any,
	full: boolean,
	themeColor: string,
	leftBar: boolean,
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
		leftBar: true,
		deleteNoteState: {
			progress: false,
			noteId: null,
		},
		renderTags: [],
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
		} = this.props;
		changeRenderTagsDispatch([]);
		if (pathname.slice(0, 5) === '/card') {
			this.setState({
				makeNoteLoading: true,
			});
			if (process.env.NODE_ENV === 'production') {
				const makeNoteResult = await makeNoteMutate({
					refetchQueries: [{
						query: getAllMyNotePreviewsByTags,
						variables: { tags: [] },
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
						variables: { tags: [] },
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
		} = this.props;
		try {
			if (pathname.slice(0, 5) === '/card') {
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
							variables: { tags: renderTags },
						});
						for (i = 0; i < data.getAllMyNotePreviewsByTags.notes.length; i += 1) {
							if (data.getAllMyNotePreviewsByTags.notes[i]._id === noteId) {
								data.getAllMyNotePreviewsByTags.notes.splice(i, 1);
								break;
							}
						}
						store.writeQuery({
							query: getAllMyNotePreviewsByTags,
							variables: { tags: renderTags },
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
							variables: { tags: renderTags },
						});
						for (i = 0; i < data.getAllMyNotePreviewsByTags.notes.length; i += 1) {
							if (data.getAllMyNotePreviewsByTags.notes[i]._id === noteId) {
								data.getAllMyNotePreviewsByTags.notes.splice(i, 1);
								break;
							}
						}
						store.writeQuery({
							query: getAllMyNotePreviewsByTags,
							variables: { tags: renderTags },
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
			socialOnOff,
			themeOnOff,
			makeNoteLoading,
		} = this.state;
		const { full,
			changeThemeColorDispatch,
			themeColor,
			pathname,
			leftBar,
			noteData,
			photo,
		} = this.props;
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
								style={{
									backgroundColor: pathname.slice(0, 5) === '/card' ? themeColor : 'white',
									color: pathname.slice(0, 5) === '/card' ? 'white' : '#babac0',
								}}
							>
								<svg className={css.name} x="0px" y="0px" viewBox="0 0 54 29" enableBackground="new 0 0 54 29">
									<g>
										<path
											fill={pathname.slice(0, 5) === '/card' ? '#ffffff' : '#BABAC0'}
											d="M21.4,9.3c0,4-0.9,7.3-5.7,9.7l-1-1.4c2.1-1.1,3.4-2.3,4.1-3.7L15,14.3l-0.2-1.6l4.5-0.3
											c0.1-0.5,0.2-1.1,0.3-1.7h-4.1V9.3H21.4z M26.7,14.5h-1.8v6.4H23V8.1h1.8V13h1.8V14.5z"
										/>
										<path
											fill={pathname.slice(0, 5) === '/card' ? '#ffffff' : '#BABAC0'}
											d="M39.3,17.9v1.5H27.6v-1.5H39.3z M38.1,15.5H29V9.1h9v1.5h-7.1V14h7.2V15.5z"
										/>
									</g>
								</svg>
							</div>
						</Link>
						<Link
							className={css.changeLink}
							to={!noteData.loading && noteData.getAllMyNotePreviewsByTags.notes[0] ? `/list/${noteData.getAllMyNotePreviewsByTags.notes[0]._id}` : '/list/none'}
						>
							<div
								className={css.Button}
								style={{
									backgroundColor: pathname.slice(0, 5) === '/list' ? themeColor : 'white',
									color: pathname.slice(0, 5) === '/list' ? 'white' : '#babac0',
								}}
							>
								<svg className={css.name} x="0px" y="0px" viewBox="0 0 54 29" enableBackground="new 0 0 54 29">
									<g>
										<path
											fill={pathname.slice(0, 5) === '/list' ? '#ffffff' : '#BABAC0'}
											d="M26.4,14.2v1.5H14.7v-1.5h4.9V13h-3.5V8.4h8.8V13h-3.4v1.2H26.4z M16,16.6h9v4.2h-1.8v-2.8H16V16.6z
											M18,11.5h5.1V9.9H18V11.5z"
										/>
										<path
											fill={pathname.slice(0, 5) === '/list' ? '#ffffff' : '#BABAC0'}
											d="M39.3,14.8v1.5H27.6v-1.5h4.9v-0.9h-3.5v-3.5h7V9.6h-7V8.2h8.8v3.5h-7v0.8h7.2v1.4h-3.8v0.9H39.3z M28.9,17
											h9v3.8h-1.8v-2.3h-7.2V17z"
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
						<svg
							className={css.name}
							x="0px"
							y="0px"
							viewBox="0 0 54 29"
							enableBackground="new 0 0 54 29"
							opacity={leftBar ? '1' : '0.38'}
						>
							<g>
								<path
									fill={leftBar ? themeColor : 'black'}
									d="M16.7,16.5c1.4,0,2.5-0.1,3.7-0.3l0.2,1.5C19,18,17.8,18,15.8,18h-0.9V9.4h5.2v1.5h-3.5v1.9h3.2v1.4h-3.2
									V16.5z M25.6,8V21h-1.8v-6.4h-1v5.9h-1.7V8.3h1.7V13h1V8H25.6z"
								/>
								<path
									fill={leftBar ? themeColor : 'black'}
									d="M39.1,17.8v1.5H27.4v-1.5H39.1z M35.8,10.7h-7.2V9.2h9v1.5c0,1.8,0,3.6-0.5,6.2l-1.8-0.2
									C35.8,14.4,35.8,12.5,35.8,10.7L35.8,10.7z"
								/>
							</g>
						</svg>
					</div>
					<div
						className={css.social}
						onClick={this.changeSocialState}
						role="button"
						tabIndex="-1"
					>
						<svg
							className={css.name}
							x="0px"
							y="0px"
							viewBox="0 0 54 29"
							enableBackground="new 0 0 54 29"
							opacity={socialOnOff ? '1' : '0.38'}
						>
							<g>
								<path
									fill={socialOnOff ? themeColor : 'black'}
									d="M26.7,18v1.5H15V18h4.9v-2.9h1.8V18H26.7z M25.5,15.5c-2.3-0.4-3.9-1.6-4.8-3.2c-0.8,1.6-2.5,2.8-4.7,3.2
									L15.3,14c2.9-0.5,4.5-2.5,4.5-4.2V8.8h2v0.9c0,1.8,1.6,3.8,4.5,4.2L25.5,15.5z"
								/>
								<path
									fill={socialOnOff ? themeColor : 'black'}
									d="M34.6,14.8c-1.4-0.5-2.3-1.4-2.9-2.6c-0.6,1.3-1.6,2.3-3,2.8l-0.9-1.4c2.1-0.7,3-2.3,3-4V8.5h1.9v1.1
									c0,1.6,0.9,3.2,2.9,3.8L34.6,14.8z M39,19.5v1.4h-8.9v-3.5h6.7v-0.7h-6.7v-1.4h8.5v3.4H32v0.8H39z M36.8,12.7h-2.1v-1.4h2.1v-0.8
									h-2.1V9.1h2.1V8.1h1.8v6.7h-1.8V12.7z"
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
						<svg
							className={css.name}
							x="0px"
							y="0px"
							viewBox="0 0 54 29"
							enableBackground="new 0 0 54 29"
							opacity={pathname.slice(0, 5) === '/card' ? '0.1' : '0.38'}
						>
							<g>
								<path
									fill="black"
									d="M21.9,14.9c-1.5-0.4-2.5-1.3-3-2.4c-0.6,1.2-1.6,2.2-3.1,2.6l-0.9-1.5c2-0.6,3-2,3.1-3.5h-2.6V8.7h7v1.5
									h-2.5c0.1,1.4,1.1,2.7,3,3.3L21.9,14.9z M23.6,15.6h1.8v5.2h-8.6v-5.2h1.8v1.2h4.9V15.6z M23.6,18.2h-4.9v1.1h4.9V18.2z M25.4,8v7
									h-1.9V8H25.4z"
								/>
								<path
									fill="black"
									d="M34.3,15.4v1c2.2,0.2,3.5,1,3.5,2.3c0,1.5-1.7,2.3-4.5,2.3c-2.8,0-4.5-0.9-4.5-2.3c0-1.3,1.3-2.1,3.6-2.3
									v-0.9h-4.9v-1.5h11.7v1.5H34.3z M28.1,12c2.4-0.2,3.7-1.1,4-1.9h-3.4V8.6h9.5V10h-3.4c0.3,0.9,1.6,1.7,4,1.9l-0.6,1.4
									c-2.4-0.2-4-1.1-4.7-2.3c-0.7,1.2-2.3,2.1-4.7,2.3L28.1,12z M33.4,17.7c-1.7,0-2.6,0.3-2.6,0.9c0,0.6,0.9,0.9,2.6,0.9
									s2.6-0.3,2.6-0.9C36,18,35.1,17.7,33.4,17.7z"
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
						<svg
							className={css.name}
							x="0px"
							y="0px"
							viewBox="0 0 54 29"
							enableBackground="new 0 0 54 29"
							opacity={themeOnOff ? '1' : '0.38'}
						>
							<g>
								<path
									fill={themeOnOff ? themeColor : 'black'}
									d="M16.5,16.6c1.3,0,2.4-0.1,3.5-0.3l0.2,1.5c-1.5,0.2-2.7,0.3-4.5,0.3h-0.9V9.5h4.8v1.5h-3v2H19v1.4h-2.5
									V16.6z M21,8.3h1.7v12.1H21v-6.1h-1.4v-1.5H21V8.3z M25.5,8v12.9h-1.8V8H25.5z"
								/>
								<path
									fill={themeOnOff ? themeColor : 'black'}
									d="M27.7,9.3h6.2v8.5h-6.2V9.3z M29.5,16.4H32v-5.6h-2.5V16.4z M39.2,14.4h-1.9V21h-1.8V8.1h1.8v4.8h1.9V14.4z
									"
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
