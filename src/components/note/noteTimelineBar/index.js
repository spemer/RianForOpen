// @flow
import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';
import TimelineSnippet from './TimelineSnippet';
import { getAllMyNotePreviews } from '../../../graphqls/TimelineGraphQl';
import css from './noteTimelineBar.css';
import './scroll.global.css';
import Mock from '../MOCKNOTE';

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

type Store = {
	User: {
		userId: string
	},
	App: {
		full: boolean,
		themeColor: string,
		leftBar: boolean
	}
}

type DefaultProps = {
	full: boolean,
	themeColor: string,
	leftBar: boolean,
};

type Props = {
	full: boolean,
	themeColor: string,
	leftBar: boolean,
};

type State = {
};

const mapToState = ({ User: { userId }, App: { full, themeColor, leftBar } }: Store) => ({
	userId,
	full,
	leftBar,
	themeColor,
});


@connect(mapToState)
@compose(getAllMyNotePreviewsQuery)
class NoteTimelineBar extends Component<DefaultProps, Props, State> {

	static defaultProps = {
		userId: '',
		full: false,
		themeColor: '',
		leftBar: false,
	}

	constructor(props: Props) {
		super(props);
		this.currentSelected = '';
		this.rowRenderer = this.rowRenderer.bind(this);
		this.changeClickedBox = this.changeClickedBox.bind(this);
	}

	state = {
	}

	rowRenderer: Function;
	changeClickedBox: Function;
	currentSelected: any;

	rowRenderer(argu: { index: number, style: any}) {
		const index = argu.index;
		const style = argu.style;
		let data;
		if (process.env.NODE_ENV === 'development') {
			data = Mock[index];
			return (
				<TimelineSnippet
					key={index}
					_id=""
					title={data.title}
					preview={data.preview}
					tags={[data.tag]}
					updatedAt="3일전"
					style={style}
					changeClickedBox={this.changeClickedBox}
				/>
			);
		}
		data = Mock[index];
		return (
			<TimelineSnippet
				key={index}
				_id=""
				title={data.title}
				preview={data.preview}
				tags={[data.tag]}
				updatedAt="3일전"
				style={style}
				changeClickedBox={this.changeClickedBox}
			/>
		);
	}

	changeClickedBox(e: any) {
		if (this.currentSelected) {
			this.currentSelected.style.backgroundColor = null;
			this.currentSelected.style.paddingLeft = '23px';
			this.currentSelected.style.borderLeft = null;
		}
		this.currentSelected = e.currentTarget;
		this.currentSelected.style.backgroundColor = '#f4f4f4';
		this.currentSelected.style.paddingLeft = '20px';
		this.currentSelected.style.borderLeft = `3px solid ${this.props.themeColor}`;
	}

	render() {
		const noteCount = 36;
		const { leftBar, full } = this.props;
		return (
			<Motion
				style={{
					x: spring(leftBar && !full ? 258 : 0),
				}}
			>
				{({ x }) => (
					<div className={css.container} style={{ flex: `0 0 ${x}px`, borderRight: leftBar ? '1px solid #dfdfdf' : 'none' }}>
						<div className={css.head}>
							<div className={css.status}>
								<div className={css.title}>
									{'#다다익선'}
								</div>
								<div className={css.count} >
									{`${noteCount}개의 노트`}
								</div>
							</div>
							<div className={css.sortButton} />
						</div>
						<div className={css.scrollBox}>
							<AutoSizer>
								{({ height, width }) => (
									<List
										rowRenderer={this.rowRenderer}
										height={height}
										width={width}
										rowHeight={132}
										rowCount={Mock.length}
										style={{ outline: 'none' }}
									/>
								)}
							</AutoSizer>
						</div>
					</div>
		)}
			</Motion>
		);
	}
}

export default NoteTimelineBar;
