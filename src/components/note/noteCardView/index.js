// @flow
import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import ReactLoading from 'react-loading';
import moment from 'moment';
import ModalEditor from '../noteRianEditor/rianModalEditor';
import Mock from '../../../../MockData/noteList';
import { getAllMyNotePreviewsByTags } from '../../../graphqls/TimelineGraphQl';
import CardInstance from './CardInstance';
import css from './noteCardView.css';

moment.locale('ko');

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
  App: {
    themeColor: string,
	renderTags: Array<string>,
	notePreviewSort: {
		byUpdatedAt: boolean,
		byLatest: boolean,
	},
  }
};

const mapToState = ({ App: {
	themeColor,
	renderTags,
	notePreviewSort: {
		byUpdatedAt,
		byLatest,
	},
} }: Store) => ({
	themeColor,
	renderTags,
	byUpdatedAt,
	byLatest,
});

type DefaultProps = {
	themeColor: string,
	noteData: any,
	renderTags: null,
	match: any,
	history: any,
	location: any,
	byUpdatedAt: boolean,
	byLatest: boolean,
};

type Props = {
	themeColor: string,
	noteData: any,
	renderTags: Array<string>,
	match: any,
	history: any,
	location: any,
	byUpdatedAt: boolean,
	byLatest: boolean,
};

type State = {
};

@connect(mapToState)
@compose(getAllMyNotePreviewsByTagsQuery)
class NoteCardView extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		themeColor: '',
		noteData: {
			loading: true,
		},
		renderTags: null,
		byUpdatedAt: true,
		byLatest: true,
		history: {},
		match: {},
		location: {},
	};
	constructor(props: Props) {
		super(props);
		this.cardRenderer = this.cardRenderer.bind(this);
	}

	state = {
	};
	
	cardRenderer: Function;

	cardRenderer(noteData: Array<any>) {
		return noteData.map(({
			_id,
			title,
			updatedAt,
			tags,
			preImage,
			preview,
		}) => (
			<CardInstance
				key={_id}
				noteId={_id}
				title={title}
				preview={preview}
				updatedAt={moment(updatedAt).format('LL')}
				tags={tags}
				preImage={preImage}
			/>
		));
	}

	render() {
		const { match, history, location, noteData, renderTags, themeColor } = this.props;
		const tagName = renderTags.length === 0 ? '전체노트' : `#${renderTags.join('#')}`;
		let noteCount = process.env.NODE_ENV === 'development' ? `${Mock.length}개의 노트` : '';
		if (noteData && !noteData.loading && noteData.getAllMyNotePreviewsByTags) {
			noteCount = `${noteData.getAllMyNotePreviewsByTags.notes.length}개의 노트`;
		}
		return (
			<div className={css.container}>
				<ModalEditor
					match={match}
					location={location}
					history={history}
				/>
				<div className={css.head}>
					<div className={css.tagTitle}>
						{tagName}
					</div>
					<div className={css.noteCount}>
						{noteCount}
					</div>
					{noteData.loading && <ReactLoading className={css.loader} type="spinningBubbles" color={themeColor} height="15px" width="15px" />}
				</div>
				<div className={css.mainBox}>
					{noteData &&
					!noteData.loading &&
					this.cardRenderer(noteData.getAllMyNotePreviewsByTags.notes)}
					{process.env.NODE_ENV === 'development' && this.cardRenderer(Mock)}
				</div>
			</div>
		);
	}
}

export default NoteCardView;
