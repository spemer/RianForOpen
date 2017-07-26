// @flow
import React, { Component } from 'react';
import screenfull from 'screenfull';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import profileImageMock from '../../../static/image/thumb-ex-img.png';
import SearchBox from './searchBox';
import { fullScreenChange, changeLeftBar, changeThemeColor } from '../../actions/AppActions';
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
			renderTags,
			makeNoteMutate,
		} = this.props;
		if (pathname.slice(0, 5) === '/card') {
			this.setState({
				makeNoteLoading: true,
			});
			if (process.env.NODE_ENV === 'production') {
				const makeNoteResult = await makeNoteMutate({
					refetchQueries: [{
						query: getAllMyNotePreviewsByTags,
						variables: { tags: renderTags },
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
						variables: { tags: renderTags },
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
							nextRenderNoteId = nextId || 'loading';
						}
					},
				});
				nextRenderNoteId = nextRenderNoteId || 'loading';
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
								<div className={css.name}>카드</div>
							</div>
						</Link>
						<Link
							className={css.changeLink}
							to={!noteData.loading && noteData.getAllMyNotePreviewsByTags.notes[0] ? `/list/${noteData.getAllMyNotePreviewsByTags.notes[0]._id}` : '/list/loading'}
						>
							<div
								className={css.Button}
								style={{
									backgroundColor: pathname.slice(0, 5) === '/list' ? themeColor : 'white',
									color: pathname.slice(0, 5) === '/list' ? 'white' : '#babac0',
								}}
							>
								<div className={css.name}>목록</div>
							</div>
						</Link>
					</div>
					<div
						className={css.tag}
						onClick={this.changeTagState}
						role="button"
						tabIndex="0"
					>
						<div
							className={css.name}
							style={{
								color: leftBar ? themeColor : 'black',
								opacity: leftBar ? '1' : '0.38',
							}}
						>
						태그
						</div>
					</div>
					<div
						className={css.social}
						onClick={this.changeSocialState}
						role="button"
						tabIndex="-1"
					>
						<div
							className={css.name}
							style={{
								color: socialOnOff ? themeColor : 'black',
								opacity: socialOnOff ? '1' : '0.38',
							}}
						>
						소셜
						</div>
					</div>
					<div
						className={css.focusFull}
						onClick={pathname.slice(0, 5) === '/list' && fullScreen}
						role="button"
						tabIndex="-5"
					>
						<div
							className={css.name}
							style={{
								color: 'black',
								opacity: pathname.slice(0, 5) === '/card' ? '0.1' : '0.38',
							}}
						>
						집중
						</div>
					</div>
					<div
						className={css.theme}
						onClick={this.changeThemeState}
						role="button"
						tabIndex="-5"
					>
						<div
							className={css.name}
							style={{
								color: themeOnOff ? themeColor : 'black',
								opacity: themeOnOff ? '1' : '0.38',
							}}
						>
						테마
						</div>
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
