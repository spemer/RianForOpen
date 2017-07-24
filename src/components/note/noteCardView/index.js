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
		},
		ssr: false,
	}),
	name: 'noteData',
	skip: process.env.NODE_ENV === 'development' && true,
});

type Store = {
  App: {
    themeColor: string,
    renderTags: Array<string>
  }
};

const mapToState = ({ App: { themeColor, renderTags } }: Store) => ({
	themeColor,
	renderTags,
});

type DefaultProps = {
  themeColor: string,
  noteData: any,
  renderTags: null,
  match: any,
  history: any,
  location: any
};

type Props = {
  themeColor: string,
  noteData: any,
  renderTags: Array<string>,
  match: any,
  history: any,
  location: any
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

	componentWillReceiveProps(props: Props) {
		// console.log('cardsview', this.props, props);
	// 	if (
    //   process.env.NODE_ENV === 'production' &&
    //   this.props.renderTags !== nextProps.renderTags
    // ) {
	// 		this.props.noteData.refetch({
	// 			tags: nextProps.renderTags,
	// 		});
	// 	}
	}

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
				themeColor={this.props.themeColor}
			/>
		));
	}

	render() {
		const { match, history, location, noteData, renderTags, themeColor } = this.props;
		const tagName = renderTags.length === 0 ? '전체노트' : `#${renderTags.join('#')}`;
		// console.log('pathname', this.props.location.pathname.slice(6));
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
