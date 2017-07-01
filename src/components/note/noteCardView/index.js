// @flow
import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';
import { getAllMyNotePreviews } from '../../../graphqls/TimelineGraphQl';
import css from './noteCardView.css';


const getAllMyNotePreviewsQuery = graphql(getAllMyNotePreviews, {
	options: props => ({
		variables: {
			userId: SERVER ? props.userId : null,
			tags: [],
		},
		ssr: false,
	}),
	name: 'noteData',
	skip: process.env.NODE_ENV === 'development' && true,
});

const mapToState = state => ({
	userId: state.User._id,
});

type DefaultProps = {};

type Props = {};
type State = {};

@connect(mapToState)
@compose(getAllMyNotePreviewsQuery)
class NoteCardView extends Component<DefaultProps, Props, State> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		const noteCount = 36;
		const tagName = '다다익선';
		return (
			<div className={css.container}>
				<div className={css.head}>
					<div className={css.tagTitle}>
						{`#${tagName}`}
					</div>
					<div className={css.noteCount}>
						{`${noteCount}개의 노트`}
					</div>
				</div>
				<div className={css.mainBox} />
			</div>
		);
	}
}

export default NoteCardView;
