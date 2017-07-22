// @flow
import React, { Component } from 'react';
import screenfull from 'screenfull';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import profileImageMock from '../../../static/image/thumb-ex-img.png';
import SearchBox from './searchBox';
import { fullScreenChange, changeLeftBar } from '../../actions/AppActions';
import { makeNote } from '../../graphqls/NoteEditorGraphQl';
import { getAllMyNotePreviewsByTags } from '../../graphqls/TimelineGraphQl';
import parentCss from '../app/app.css';
import css from './head.css';

type DefaultProps = {
	changeFullScreenApp: Function,
	changeLeftBarDispatch: Function,
	makeNote: Function,
	full: boolean,
	themeColor: string,
	noteData: any,
	pathname: string,
	history: any,
	leftBar: boolean,
	renderTags: Array<string>
};

type Props = {
	changeFullScreenApp: Function,
	changeLeftBarDispatch: Function,
	makeNote: Function,
	full: boolean,
	themeColor: string,
	noteData: any,
	pathname: string,
	history: any,
	leftBar: boolean,
	renderTags: Array<string>
};

type State = {
  modeIsTag: boolean,
  socialOnOff: boolean,
  trashOnOff: boolean,
  makeNoteLoading: boolean,
};

function mapToState({ App: { full, themeColor, leftBar, renderTags } }) {
	return {
		full,
		themeColor,
		leftBar,
		renderTags,
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
	};
}

const getAllMyNotePreviewsByTagsQuery = graphql(getAllMyNotePreviewsByTags, {
	options: props => ({
		variables: {
			userId: SERVER ? props.userId : null,
			tags: props.renderTags,
		},
		ssr: false,
	}),
	name: 'noteData',
	skip: process.env.NODE_ENV === 'development' && true,
});

const makeNoteMutation = graphql(makeNote, {
	options: () => ({
		ssr: false,
	}),
	name: 'makeNote',
});

function fullScreen() {
	if (screenfull.enabled) {
		screenfull.toggle();
	} else {
    // Ignore or do something else
	}
}

@connect(mapToState, mapToDispatch)
@compose(makeNoteMutation, getAllMyNotePreviewsByTagsQuery)
class Head extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		changeFullScreenApp: () => {},
		changeLeftBarDispatch: () => {},
		makeNote: () => {},
		full: false,
		string: '',
		pathname: '/card',
		history: {},
		themeColor: '',
		leftBar: true,
		renderTags: [],
		noteData: {
			loading: false,
			getAllMyNotePreviewsByTags: {
				notes: [{ _id: '342!!@31312312312' }, { _id: 'sdf123sdfasdfasdf' }],
			},
		},
	};

	constructor(props: Props) {
		super(props);
		this.changeSearchMode = this.changeSearchMode.bind(this);
		this.changeSocialState = this.changeSocialState.bind(this);
		this.changeTagState = this.changeTagState.bind(this);
		this.changeTrashState = this.changeTrashState.bind(this);
		this.fireMutation = this.fireMutation.bind(this);
	}

	state = {
		modeIsTag: false,
		socialOnOff: false,
		trashOnOff: false,
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

	changeSearchMode: Function;
	changeSocialState: Function;
	changeTagState: Function;
	changeTrashState: Function;
	fireMutation: Function;

	changeSearchMode() {
		this.setState(prevState => ({
			modeIsTag: !prevState.modeIsTag,
		}));
	}

	changeTagState() {
		this.props.changeLeftBarDispatch();
	}

	changeSocialState() {
		this.setState(prevState => ({
			socialOnOff: !prevState.socialOnOff,
		}));
	}

	changeTrashState() {
		this.setState(prevState => ({
			trashOnOff: !prevState.trashOnOff,
		}));
	}

	async fireMutation() {
		const {
			pathname,
			history,
			renderTags,
		} = this.props;
		if (pathname.slice(0, 5) === '/card') {
			this.setState({
				makeNoteLoading: true,
			});
			if (process.env.NODE_ENV === 'production') {
				const makeNoteResult = await this.props.makeNote({
					refetchQueries: [{
						query: getAllMyNotePreviewsByTags,
						variables: { tags: renderTags, userId: null },
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
				const makeNoteResult = await this.props.makeNote({
					refetchQueries: [{
						query: getAllMyNotePreviewsByTags,
						variables: { tags: renderTags, userId: null },
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

	render() {
		const { modeIsTag, socialOnOff, trashOnOff, makeNoteLoading } = this.state;
		const { full, themeColor, pathname, leftBar, noteData } = this.props;
		return (
			<div
				className={parentCss.head}
				style={{ height: !full ? '48px' : '0px' }}
			>
				<div className={css.container}>
					<SearchBox
						themeColor={themeColor}
						modeIsTag={modeIsTag}
						changeSearchMode={this.changeSearchMode}
					/>
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
							className={css.cardButton}
							to="/card/main"
							style={{
								backgroundColor: pathname.slice(0, 5) === '/card' ? themeColor : 'white',
								color: pathname.slice(0, 5) === '/card' ? 'white' : '#babac0',
							}}
						>
							<div className={css.modeName}>카드</div>
						</Link>
						<Link
							className={css.noteButton}
							to={!noteData.loading && noteData.getAllMyNotePreviewsByTags.notes[0] ? `/list/${noteData.getAllMyNotePreviewsByTags.notes[0]._id}` : '/list/loading}'}
							style={{
								backgroundColor: pathname.slice(0, 5) === '/list' ? themeColor : 'white',
								color: pathname.slice(0, 5) === '/list' ? 'white' : '#babac0',
							}}
						>
							<div className={css.modeName}>목록</div>
						</Link>
					</div>
					<div
						className={css.tag}
						onClick={this.changeTagState}
						role="button"
						tabIndex="0"
					>
						<p
							style={{
								color: leftBar ? themeColor : 'black',
								opacity: leftBar ? '1' : '0.38',
							}}
						>
						태그
						</p>
					</div>
					<div
						className={css.social}
						onClick={this.changeSocialState}
						role="button"
						tabIndex="-1"
					>
						<p
							style={{
								color: socialOnOff ? themeColor : 'black',
								opacity: socialOnOff ? '1' : '0.38',
							}}
						>
						소셜
						</p>
					</div>
					<div
						className={css.trash}
						onClick={this.changeTrashState}
						onClick={fullScreen}
						role="button"
						tabIndex="-5"
					>
						<p
							style={{
								color: trashOnOff ? themeColor : 'black',
								opacity: trashOnOff ? '1' : '0.38',
							}}
						>
						집중
						</p>
					</div>
					<div className={css.profileBox}>
						<div
							className={css.photo}
							style={{ backgroundImage: `url(${profileImageMock})` }}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Head;
