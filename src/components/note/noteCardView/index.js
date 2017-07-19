// @flow
import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
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
			userId: SERVER ? props.userId : null,
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
  noteData: null,
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
  showModal: boolean
};

@connect(mapToState)
@compose(getAllMyNotePreviewsByTagsQuery)
class NoteCardView extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		themeColor: '',
		noteData: null,
		renderTags: null,
		history: {},
		match: {},
		location: {},
	};
	constructor(props: Props) {
		super(props);
		this.cardRenderer = this.cardRenderer.bind(this);
		this.changeModalState = this.changeModalState.bind(this);
	}

	state = {
		showModal: false,
	};

	componentWillReceiveProps(nextProps: Props) {
		if (
      process.env.NODE_ENV === 'production' &&
      this.props.renderTags !== nextProps.renderTags
    ) {
			this.props.noteData.refetch({
				tags: nextProps.renderTags,
			});
		}
	}

	cardRenderer: Function;
	changeModalState: Function;

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
				preview={
					preview ||
					'자바스크립트(영어: JavaScript)는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹브라우저 내에서 주로 사용하며, 다른 응용 자바스크립트(영어: JavaScript)는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹브라우저 내에서 주로 사용하며, 다른 응용 '
				}
				updatedAt={moment(updatedAt).format('LL')}
				tags={tags}
				preImage={preImage}
				themeColor={this.props.themeColor}
				changeModalState={this.changeModalState}
			/>
		));
	}

	changeModalState(argu: boolean) {
		this.setState({
			showModal: argu,
		});
	}

	render() {
		let { showModal } = this.state;
		const { match, history, location, noteData, renderTags } = this.props;
		const tagName = renderTags.length === 0 ? '전체노트' : `#${renderTags.join('#')}`;
		console.log('pathname', this.props.location.pathname.slice(6));
		if (this.props.location.pathname.slice(6) && this.props.location.pathname.slice(6) !== 'main') {
			showModal = true;
		}
		let noteCount = process.env.NODE_ENV === 'development' ? `${Mock.length}개의 노트` : '';
		if (noteData && !noteData.loading && noteData.getAllMyNotePreviewsByTags) {
			noteCount = `${noteData.getAllMyNotePreviewsByTags.notes.length}개의 노트`;
		}
		return (
			<div className={css.container}>
				<ModalEditor
					showModal={showModal}
					changeModalState={this.changeModalState}
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
