// @flow
import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import MockList from 'MockData/noteList';
// react virtualized
// import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
// import CellMeasurer from 'react-virtualized/dist/commonjs/CellMeasurer';
// import CellMeasurerCache
//   from 'react-virtualized/dist/commonjs/CellMeasurer/CellMeasurerCache';
// import createMasonryCellPositioner
//   from 'react-virtualized/dist/commonjs/Masonry/createCellPositioner';
// import WindowScroller from 'react-virtualized/dist/commonjs/WindowScroller';
// import Masonry from 'react-virtualized/dist/commonjs/Masonry';
// graphQL
import { getAllMyNotePreviews } from '../../../graphqls/TimelineGraphQl';
import CardInstance from './CardInstance';
import css from './noteCardView.css';


const Mock = [...MockList, ...MockList, ...MockList, ...MockList];

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

const mapToState = ({ User: { _id }, App: { themeColor } }) => ({
	userId: _id,
	themeColor,
});

type DefaultProps = {
	userId: string,
	themeColor: string,
};
type Props = {
	userId: string,
	themeColor: string,
};
type State = {
};

@connect(mapToState)
@compose(getAllMyNotePreviewsQuery)
class NoteCardView extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		userId: '',
		themeColor: '',
	};
	constructor(props: Props) {
		super(props);
		this.cardRenderer = this.cardRenderer.bind(this);
	}

	state = {
	};

	cardRenderer: Function;

	cardRenderer(noteData: Array<any>) {
		return noteData.map((data, index) => (
			<CardInstance
				key={index}
				title={data.title}
				preview="자바스크립트(영어: JavaScript)는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹브라우저 내에서 주로 사용하며, 다른 응용 자바스크립트(영어: JavaScript)는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹브라우저 내에서 주로 사용하며, 다른 응용 "
				updated_at={data.updated_at}
				tags={data.tags}
				pre_image={data.pre_image}
				themeColor={this.props.themeColor}
			/>
		));
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
				<div className={css.mainBox}>
					{this.cardRenderer(Mock)}
				</div>
			</div>
		);
	}
}

export default NoteCardView;
