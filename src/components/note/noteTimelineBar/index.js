// @flow
import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';
import moment from 'moment';
import { graphql, compose } from 'react-apollo';
import ReactLoading from 'react-loading';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';
import TimelineSnippet from './TimelineSnippet';
import { changeNotePreviewSort } from '../../../actions/AppActions';
import { changeTrashBoxOn } from '../../../actions/NoteEditorActions';
import { getAllMyNotePreviewsByTags } from '../../../graphqls/TimelineGraphQl';
import css from './noteTimelineBar.css';
import './scroll.global.css';
import Mock from '../../../../MockData/noteList';

const getAllMyNotePreviewsByTagsQuery = graphql(getAllMyNotePreviewsByTags, {
	options: props => ({
		variables: {
			tags: props.renderTags,
			byUpdatedAt: props.byUpdatedAt,
			byLatest: props.byLatest,
		},
		ssr: false,
		fetchPolicy: 'network-only',
	}),
	name: 'noteData',
	skip: process.env.NODE_ENV === 'development' && true,
});

type Store = {
	User: {
		userId: string
	},
	App: {
		full: boolean,
		themeColor: string,
		renderTags: Array<string>,
		leftBar: boolean,
		timelineLeftBar: boolean,
		notePreviewSort: {
			byUpdatedAt: boolean,
			byLatest: boolean,
		},
	},
};

function mapToState({
	User: { userId },
	App: {
		full,
		themeColor,
		renderTags,
		leftBar,
		timelineLeftBar,
		notePreviewSort: {
			byUpdatedAt,
			byLatest,
		},
	},
}: Store) {
	return {
		userId,
		full,
		themeColor,
		renderTags,
		leftBar,
		timelineLeftBar,
		byUpdatedAt,
		byLatest,
	};
}

function mapToDispatch(dispatch) {
	return {
		changeNotePreviewSortDispatch(byUpdatedAt, byLatest) {
			dispatch(changeNotePreviewSort(byUpdatedAt, byLatest));
		},
		changeTrashBoxOnDispatch() {
			dispatch(changeTrashBoxOn(false));
		},
	};
}

type DefaultProps = {
	full: boolean,
	themeColor: string,
	renderTags: Array<string>,
	noteData: any,
	leftBar: boolean,
	timelineLeftBar: boolean,
	match: any,
	byUpdatedAt: boolean,
	byLatest: boolean,
	changeNotePreviewSortDispatch: null,
	changeTrashBoxOnDispatch: Function,
};

type Props = {
	full: boolean,
	themeColor: string,
	renderTags: Array<string>,
	noteData: any,
	leftBar: boolean,
	timelineLeftBar: boolean,
	match: {
		params: {
			noteId: string
		}
	},
	byUpdatedAt: boolean,
	byLatest: boolean,
	changeNotePreviewSortDispatch: Function,
	changeTrashBoxOnDispatch: Function,
};

type State = {
  onSortList: boolean,
};

@connect(mapToState, mapToDispatch)
@compose(getAllMyNotePreviewsByTagsQuery)
class NoteTimelineBar extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		userId: '',
		full: false,
		themeColor: '',
		renderTags: [],
		leftBar: true,
		timelineLeftBar: true,
		match: {},
		noteData: {
			loading: false,
			getAllMyNotePreviewsByTags: {
				notes: Mock,
			},
		},
		byUpdatedAt: true,
		byLatest: true,
		changeNotePreviewSortDispatch: null,
		changeTrashBoxOnDispatch: () => {},
	};

	constructor(props: Props) {
		super(props);
		this.currentSelected = '';
		this.rowRenderer = this.rowRenderer.bind(this);
		this.changeOnSortState = this.changeOnSortState.bind(this);
	}

	state = {
		onSortList: false,
	};

	componentWillReceiveProps(nextProps: Props) {
	// hide menu on LeftBar Coming
		if (!this.props.timelineLeftBar && nextProps.timelineLeftBar) {
			this.setState({
				onSortList: false,
			});
		}
	}

	rowRenderer: Function;
	changeOnSortState: Function;
	currentSelected: any;
	currentSelectedSort: any;

	rowRenderer(argu: { index: number, style: any }) {
		const index = argu.index;
		const style = argu.style;
		const data = this.props.noteData.getAllMyNotePreviewsByTags.notes[index];
		const noteId = this.props.match.params.noteId;
		let selected = false;
		if (`${data._id}` === noteId) {
			selected = true;
		}
		// console.log(data._id);
		return (
			<TimelineSnippet
				selected={selected}
				key={data._id}
				noteId={data._id}
				title={data.title}
				preview={data.preview}
				updatedAt={moment(data.updatedAt).format('LL')}
				style={style}
				themeColor={this.props.themeColor}
				changeTrashBoxOnDispatch={this.props.changeTrashBoxOnDispatch}
			/>
		);
	}

	changeOnSortState(e: any) {
		e.preventDefault();
		this.setState(prevState => ({
			onSortList: !prevState.onSortList,
		}));
	}

	render() {
		const { onSortList } = this.state;
		const { full,
			noteData,
			leftBar,
			renderTags,
			timelineLeftBar,
			themeColor,
			byUpdatedAt,
			byLatest,
			changeNotePreviewSortDispatch,
		} = this.props;
		const tagName = renderTags.length === 0 ? '전체노트' : `#${renderTags.join('#')}`;

		let noteCount = '';
		if (!noteData.loading && noteData.getAllMyNotePreviewsByTags) {
			noteCount = `${noteData.getAllMyNotePreviewsByTags.notes.length}개의 노트`;
		}
		return (
			<Motion
				style={{
					x: spring(timelineLeftBar && !full ? 258 : 0),
					y: spring(timelineLeftBar && !full ? 1 : 0),
				}}
			>
				{({ x, y }) => (
					<div
						className={css.container}
						style={{
							flex: `0 0 ${x}px`,
							opacity: y,
							borderRight: timelineLeftBar && !full ? '1px solid #dfdfdf' : 'none',
						}}
					>
						<div className={css.head}>
							<div className={css.status}>
								<div className={css.title}>
									{tagName}
								</div>
								<div className={css.count}>
									{noteCount}
								</div>
							</div>
							{noteData.loading && <ReactLoading className={css.loader} type="spinningBubbles" color={themeColor} height="15px" width="15px" />}
							<div className={css.selectButton} onClick={this.changeOnSortState} role="button" tabIndex="-2">
								<div
									className={css.button}
									role="button"
									tabIndex="-4"
								>
									<svg
										version="1.1"
										x="0px"
										y="0px"
										viewBox="0 0 24 24"
										enableBackground="new 0 0 24 24"
										opacity="0.38"
										className={css.buttonIcon}
									>
										<line
											fill="none"
											stroke="#000000"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											x1="7.2"
											y1="9.8"
											x2="12"
											y2="14.2"
										/>
										<line
											fill="none"
											stroke="#000000"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											x1="16.8"
											y1="9.8"
											x2="12"
											y2="14.2"
										/>
									</svg>
								</div>
								{timelineLeftBar && onSortList &&
								<div className={!leftBar ? css.selectList : css.selectListWithLeftBar}>
									<div className={css.menuTitle}>
										<p>태그분류</p>
									</div>
									<div className={css.selectBox}>
										<div
											className={css.selectOne}
											onClick={() => {
												changeNotePreviewSortDispatch(true, true);
											}}
											style={{
												color: byUpdatedAt && byLatest && themeColor,
											}}
											role="button"
											tabIndex="0"
										>
											<p>수정한 시간 순</p>
										</div>
										<div
											className={css.selectOne}
											onClick={() => {
												changeNotePreviewSortDispatch(true, false);
											}}
											style={{
												color: byUpdatedAt && !byLatest && themeColor,
											}}
											role="button"
											tabIndex="-3"
										>
											<p>수정한 시간 역순</p>
										</div>
										<div
											className={css.selectOne}
											onClick={() => {
												changeNotePreviewSortDispatch(false, false);
											}}
											style={{
												color: !byUpdatedAt && !byLatest && themeColor,
											}}
											role="button"
											tabIndex="-7"
										>
											<p>작성한 시간 순</p>
										</div>
										<div
											className={css.selectOne}
											onClick={() => {
												changeNotePreviewSortDispatch(false, true);
											}}
											style={{
												color: !byUpdatedAt && byLatest && themeColor,
											}}
											role="button"
											tabIndex="-7"
										>
											<p>작성한 시간 역순</p>
										</div>
									</div>
								</div>}
							</div>
						</div>
						<div className={css.scrollBox}>
							{noteData.getAllMyNotePreviewsByTags &&
								<AutoSizer>
									{({ height, width }) => (
										<List
											rowRenderer={this.rowRenderer}
											height={height}
											width={width}
											rowHeight={132}
											rowCount={noteData.getAllMyNotePreviewsByTags.notes.length}
											style={{ outline: 'none' }}
										/>
								)}
								</AutoSizer>}
						</div>
					</div>
        )}
			</Motion>
		);
	}
}

export default NoteTimelineBar;
