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
	skip: true,
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
};

type DefaultProps = {
  full: boolean,
  themeColor: string,
  leftBar: boolean
};

type Props = {
  full: boolean,
  themeColor: string,
  leftBar: boolean
};

type State = {
  onSortList: boolean,
  selectedSort: string
};

const mapToState = ({
  User: { userId },
  App: { full, themeColor, leftBar },
}: Store) => ({
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
	};

	constructor(props: Props) {
		super(props);
		this.currentSelected = '';
		this.rowRenderer = this.rowRenderer.bind(this);
		this.changeClickedBox = this.changeClickedBox.bind(this);
		this.changeOnSortState = this.changeOnSortState.bind(this);
	}

	state = {
		onSortList: false,
		selectedSort: '',
	};

	componentWillReceiveProps(nextProps: Props) {
		// hide menu on LeftBar Coming
		if (!this.props.leftBar && nextProps.leftBar) {
			this.setState({
				onSortList: false,
			});
		}
	}


	rowRenderer: Function;
	changeClickedBox: Function;
	changeOnSortState: Function;
	currentSelected: any;
	currentSelectedSort: any;

	rowRenderer(argu: { index: number, style: any }) {
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

	changeClickedSortBox(e: any, sortName: string) {
		if (this.currentSelectedSort) {
			this.currentSelectedSort.style.color = '#515861';
		}
		this.setState({
			selectedSort: sortName,
		});
		this.currentSelectedSort = e.currentTarget;
		this.currentSelectedSort.style.color = this.props.themeColor;
	}

	changeOnSortState() {
		this.setState(prevState => ({
			onSortList: !prevState.onSortList,
		}));
	}

	render() {
		const noteCount = 36;
		const { onSortList } = this.state;
		const { leftBar, full } = this.props;
		return (
			<Motion
				style={{
					x: spring(leftBar && !full ? 258 : 0),
					y: spring(leftBar && !full ? 1 : 0),
				}}
			>
				{({ x, y}) => (
					<div
						className={css.container}
						style={{
							flex: `0 0 ${x}px`,
							borderRight: leftBar ? '1px solid #dfdfdf' : 'none',
							opacity: y
						}}
					>
						<div className={css.head}>
							<div className={css.status}>
								<div className={css.title}>
									{'#다다익선'}
								</div>
								<div className={css.count}>
									{`${noteCount}개의 노트`}
								</div>
							</div>
							<div className={css.selectButton}>
								<div
									className={css.button}
									onClick={this.changeOnSortState}
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
								{leftBar &&
                  onSortList &&
                  <div className={css.selectList}>
	<div className={css.menuTitle}>
		<p>태그분류</p>
	</div>
	<div className={css.selectBox}>
		<div
			className={css.selectOne}
			onClick={(e) => {
				this.changeClickedSortBox(e, 'all');
			}}
			role="button"
			tabIndex="0"
		>
			<p>작성한 시간 순</p>
		</div>
		<div
			className={css.selectOne}
			onClick={(e) => {
				this.changeClickedSortBox(e, 'bookmark');
			}}
			role="button"
			tabIndex="-3"
		>
			<p>작성한 시간 역순</p>
		</div>
		<div
			className={css.selectOne}
			onClick={(e) => {
				this.changeClickedSortBox(e, 'publish');
			}}
			role="button"
			tabIndex="-7"
		>
			<p>수정한 시간 순</p>
		</div>
		<div
			className={css.selectOne}
			onClick={(e) => {
				this.changeClickedSortBox(e, 'publish');
			}}
			role="button"
			tabIndex="-7"
		>
			<p>수정한 시간 역순</p>
		</div>
		<div
			className={css.selectOne}
			onClick={(e) => {
				this.changeClickedSortBox(e, 'publish');
			}}
			role="button"
			tabIndex="-7"
		>
			<p>가나다 순</p>
		</div>
		<div
			className={css.selectOne}
			onClick={(e) => {
				this.changeClickedSortBox(e, 'publish');
			}}
			role="button"
			tabIndex="-7"
		>
			<p>가나다 역순</p>
		</div>
	</div>
                  </div>}
							</div>
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
