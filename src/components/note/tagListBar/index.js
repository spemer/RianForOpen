// @flow
import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import ReactLoading from 'react-loading';
import makeSortableTag from './util';
import GroupedBoxContainer from './groupedBoxContainer';
import SortByManyBoxContainer from './sortByManyBoxContainer';
import { changeRenderTags } from '../../../actions/AppActions';
import { getTagsByCondition } from '../../../graphqls/TagGraphQl';
import css from './tagListBar.css';

const example = [
  { name: '교양', howMany: 14, _id: '123123676iutyregdfvc123123' },
  { name: '가글', howMany: 41, _id: '12312312312sd3' },
  { name: '퍼블', howMany: 5, _id: '1231231231dsssdfdffass23' },
  { name: '다다익선', howMany: 36, _id: '12sdfadfsdfsdf3123123123' },
  { name: '집앞', howMany: 13, _id: '1231asdfasdgsadgsadfg23123123' },
  { name: 'asef', howMany: 1, _id: 'dsdfdfg15ff' },
  { name: '개구리', howMany: 123, _id: '123123sfgnhm7891231sdfsdf23' },
  { name: '그런', howMany: 45, _id: '123123sdsdfsddwer1dfs231sdfsdf23' },
  { name: '많은', howMany: 2, _id: '123123agrgdf12g31sdfsdf23' },
  { name: 'trustme', howMany: 0, _id: '123123sdfbvcvbsadf1231sdfsdf23' },
  { name: '$', howMany: 0, _id: '123123123asdfskjjhgfdfgxccxadfsadf1sdfsdf23' },
  { name: '&*', howMany: 13, _id: '123asdghe1231sdf231sdfsdf23' },
];

const getTagsByConditionQuery = graphql(getTagsByCondition, {
	options: () => ({
		variables: {
			condition: 'All',
		},
		ssr: false,
	}),
	skip: process.env.NODE_ENV === 'development' && true,
	name: 'tagData',
});

type Store = {
	App: {
		full: boolean,
		themeColor: string,
		leftBar: boolean
	}
};

function mapToState({
  App: { full, themeColor, leftBar },
}: Store) {
	return {
		full,
		themeColor,
		leftBar,
	};
}

function mapToDispatch(dispatch) {
	return {
		changeRenderTagsDispatch(tags: Array<string>) {
			dispatch(changeRenderTags(tags));
		},
	};
}

type DefaultProps = {
	full: boolean,
	themeColor: string,
	leftBar: boolean,
	changeRenderTagsDispatch: Function,
	tagData: any
};

type Props = {
	full: boolean,
	themeColor: string,
	leftBar: boolean,
	changeRenderTagsDispatch: Function,
	tagData: any
};

type State = {
	selectedTag: string,
	selectedSort: string,
	onSortList: boolean,
	sortByhowMany: boolean
};

@connect(mapToState, mapToDispatch)
@compose(getTagsByConditionQuery)
class TagListBar extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		userId: null,
		full: false,
		themeColor: '',
		leftBar: false,
		changeRenderTagsDispatch: () => {},
		tagData: {
			loading: true,
		},
	};

	constructor(props: Props) {
		super(props);
		this.currentSelected = null;
		this.currentSelectedSort = null;
		this.changeSortBy = this.changeSortBy.bind(this);
		this.changeClickedBox = this.changeClickedBox.bind(this);
		this.changeClickedSortBox = this.changeClickedSortBox.bind(this);
		this.changeOnSortState = this.changeOnSortState.bind(this);
		this.showAllNote = this.showAllNote.bind(this);
	}

	state = {
		onSortList: false,
		sortByhowMany: false,
		selectedTag: '',
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

	componentDidUpdate(prevProps: Props) {
		if (prevProps.themeColor !== this.props.themeColor) {
			if (this.currentSelected) {
				this.currentSelected.style.borderLeft = `4px solid ${this.props.themeColor}`;
			}
			if (this.currentSelectedSort) {
				this.currentSelectedSort.style.color = this.props.themeColor;
			}
		}
	}

	currentSelected: any;
	currentSelectedSort: any;
	changeSortBy: Function;
	changeClickedBox: Function;
	changeClickedSortBox: Function;
	changeOnSortState: Function;
	showAllNote: Function;

	changeSortBy(argu: boolean) {
		this.setState({
			sortByhowMany: argu,
		});
	}

	changeClickedBox(e: any, tagName: string) {
		this.props.changeRenderTagsDispatch([tagName]);
		this.setState({
			selectedTag: tagName,
		});
		if (this.currentSelected) {
			this.currentSelected.style.backgroundColor = null;
			this.currentSelected.style.paddingLeft = '24px';
			this.currentSelected.style.borderLeft = null;
		}
		this.currentSelected = e.currentTarget;
		this.currentSelected.style.backgroundColor = '#f4f4f4';
		this.currentSelected.style.paddingLeft = '20px';
		this.currentSelected.style.borderLeft = `4px solid ${this.props.themeColor}`;
	}

	changeClickedSortBox(e: any, sortName: string) {
		this.setState({
			selectedSort: sortName,
		});
		if (this.currentSelectedSort) {
			this.currentSelectedSort.style.color = '#515861';
		}
		this.currentSelectedSort = e.currentTarget;
		this.currentSelectedSort.style.color = this.props.themeColor;
	}

	changeOnSortState() {
		this.setState(prevState => ({
			onSortList: !prevState.onSortList,
		}));
	}

	showAllNote() {
		if (this.currentSelected) {
			this.currentSelected.style.backgroundColor = null;
			this.currentSelected.style.paddingLeft = '24px';
			this.currentSelected.style.borderLeft = null;
		}
		if (this.currentSelectedSort) {
			this.currentSelectedSort.style.color = '#515861';
		}
		this.setState({
			selectedTag: '',
		});
		this.props.changeRenderTagsDispatch([]);
	}

	render() {
		const { sortByhowMany, onSortList, selectedTag } = this.state;
		const { leftBar, full, themeColor, tagData } = this.props;
		const tagListGroup = {
			sortedKor: null,
			sortedEng: null,
			sortedEtc: null,
		};
		let tagList;
		let tagCount = '';
		if (process.env.NODE_ENV === 'production') {
			if (!tagData.loading && tagData.getTagsByCondition) {
				tagCount = tagData.getTagsByCondition.tags.length;
				if (!sortByhowMany) {
					Object.assign(tagListGroup, makeSortableTag(tagData.getTagsByCondition.tags));
				} else {
					tagList = tagData.getTagsByCondition.tags;
				}
			}
		}
		if (process.env.NODE_ENV === 'development') {
			tagCount = example.length;
			if (!sortByhowMany) {
				Object.assign(tagListGroup, makeSortableTag(example));
			} else {
				tagList = example;
			}
		}
		return (
			<Motion
				style={{
					x: spring(leftBar && !full ? 155 : 0),
					y: spring(leftBar && !full ? 1 : 0),
				}}
			>
				{({ x, y }) => (
					<div
						className={css.container}
						style={{
							opacity: y,
							flex: `0 0 ${x}px`,
							borderRight: leftBar ? '1px solid #dfdfdf' : 'none',
						}}
					>
						<div className={css.head}>
							<div className={css.status}>
								<div className={css.title}>
									{'태그'}
								</div>
								<div className={css.count}>
									{`${tagCount}개의 태그`}
								</div>
							</div>
							{tagData.loading && <ReactLoading className={css.loader} type="spinningBubbles" color={themeColor} height="15px" width="15px" />}
							<div className={css.selectButton}>
								<div
									className={css.button}
									role="button"
									tabIndex="-10"
								>
									<svg
										version="1.1"
										x="0px"
										y="0px"
										viewBox="0 0 24 24"
										enableBackground="new 0 0 24 24"
										opacity="0.38"
										width="20px"
										height="20px"
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
											<p>전테 태그 보기</p>
										</div>
										<div
											className={css.selectOne}
											onClick={(e) => {
												this.changeClickedSortBox(e, 'bookmark');
											}}
											role="button"
											tabIndex="0"
										>
											<p>즐겨찾기한 태그만</p>
										</div>
										<div
											className={css.selectOne}
											onClick={(e) => {
												this.changeClickedSortBox(e, 'publish');
											}}
											role="button"
											tabIndex="0"
										>
											<p>퍼블리시한 태그만</p>
										</div>
									</div>
								</div>}
							</div>
						</div>
						<div className={css.sortBox}>
							<div
								className={css.sortButtonLeft}
								style={{ color: !sortByhowMany ? themeColor : '#515861' }}
								onClick={() => {
									this.changeSortBy(false);
								}}
								role="button"
								tabIndex="-5"
							>
								가나다순
							</div>
							<div
								className={css.sortButtonRight}
								style={{ color: sortByhowMany ? themeColor : '#515861' }}
								onClick={() => {
									this.changeSortBy(true);
								}}
								role="button"
								tabIndex="-4"
							>
								노트개수순
							</div>
						</div>
						<div
							className={css.showAllNote}
							onClick={this.showAllNote}
							role="button"
							tabIndex="-5"
						>
							전체노트보기
						</div>
						{!sortByhowMany ?
							<GroupedBoxContainer
								selectedTag={selectedTag}
								tagListGroup={tagListGroup}
								themeColor={themeColor}
								changeClickedBox={this.changeClickedBox}
							/> :
							<SortByManyBoxContainer
								selectedTag={selectedTag}
								tagList={tagList}
								themeColor={themeColor}
								changeClickedBox={this.changeClickedBox}
							/>
						}
					</div>
		)}
			</Motion>
		);
	}
}

export default TagListBar;
