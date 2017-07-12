// @flow
import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import Hangul from 'hangul-js';
import { toPairs } from 'lodash';
import GroupedBox from './groupedBox';
import { getTagList } from '../../../graphqls/TagGraphQl';
import css from './tagListBar.css';

function isInHangeul(argu) {
	const pattern = /[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]/g;
	return !!pattern.test(argu);
}
function isInEnglish(argu) {
	return !argu.match(/[^a-zA-Z]/);
}

const example = [
  { name: '교양', howMany: 14 },
  { name: '병신', howMany: 41 },
  { name: '퍼블', howMany: 5 },
  { name: '다다익선', howMany: 36 },
  { name: '집앞', howMany: 13 },
  { name: 'asef', howMany: 1 },
  { name: '상소리', howMany: 123 },
  { name: '뷰경', howMany: 45 },
  { name: '십잘알', howMany: 2 },
  { name: 'trustme', howMany: 0 },
  { name: '$', howMany: 0 },
  { name: '&*', howMany: 13 },
];
const korResult = {};
const engResult = {};
const etcResult = {};

example.map((tagSet) => {
	const firstname = tagSet.name[0];
  // in korean
	if (isInHangeul(firstname)) {
		const firstLetter = Hangul.disassemble(tagSet.name)[0];
		if (korResult[firstLetter]) {
			korResult[firstLetter].push(tagSet);
			return null;
		}
		korResult[firstLetter] = [tagSet];
		return null;
	}
  // in alphabet
	if (isInEnglish(firstname)) {
		if (engResult[firstname]) {
			engResult[firstname].push(tagSet);
			return null;
		}
		engResult[firstname] = [tagSet];
		return null;
	}
  // etc
	if (etcResult.etc) {
		etcResult.etc.push(tagSet);
		return null;
	}
	etcResult.etc = [tagSet];
	return null;
});

const sortedKorModel = toPairs(korResult).sort((a, b) => {
	if (a[0] > b[0]) return 1;
	if (a[0] < b[0]) return -1;
	return 0;
});
const sortedEngModel = toPairs(engResult).sort((a, b) => {
	if (a[0] > b[0]) return 1;
	if (a[0] < b[0]) return -1;
	return 0;
});
const sortedEtcModel = toPairs(etcResult);

const getTagListQuery = graphql(getTagList, {
	options: props => ({
		variables: {
			userId: SERVER ? props.userId : null,
			condition: 'All',
		},
		ssr: true,
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

const mapToState = ({ App: { full, themeColor, leftBar } }: Store) => ({
	full,
	themeColor,
	leftBar,
});

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
  tagCount: number,
  selectedTag: string,
  selectedSort: string,
  onSortList: boolean,
  sortByhowMany: boolean,
  sortedKor: Array<any>,
  sortedEng: Array<any>,
  sortedEtc: Array<any>
};

@connect(mapToState)
@compose(getTagListQuery)
class TagListBar extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		userId: '',
		full: false,
		themeColor: '',
		leftBar: false,
	};

	constructor(props: Props) {
		super(props);
		this.currentSelected = null;
		this.currentSelectedSort = null;
		this.changeSelectedTag = this.changeSelectedTag.bind(this);
		this.changeSortBy = this.changeSortBy.bind(this);
		this.changeClickedBox = this.changeClickedBox.bind(this);
		this.changeClickedSortBox = this.changeClickedSortBox.bind(this);
		this.changeOnSortState = this.changeOnSortState.bind(this);
	}

	state = {
		tagCount: 174,
		onSortList: false,
		sortByhowMany: true,
		selectedTag: '',
		selectedSort: '',
		sortedKor: sortedKorModel,
		sortedEng: sortedEngModel,
		sortedEtc: sortedEtcModel,
	};

	componentWillReceiveProps(nextProps: Props) {
		// hide menu on LeftBar Coming
		if (!this.props.leftBar && nextProps.leftBar) {
			this.setState({
				onSortList: false,
			});
		}
	}

	currentSelected: any;
	currentSelectedSort: any;
	changeSelectedTag: Function;
	changeSortBy: Function;
	changeClickedBox: Function;
	changeClickedSortBox: Function;
	changeOnSortState: Function;

	changeSelectedTag(argu: string) {
		this.setState({
			selectedTag: argu,
		});
	}

	changeSortBy(argu: boolean) {
		this.setState({
			sortByhowMany: argu,
		});
	}

	changeClickedBox(e: any, tagName: string) {
		if (this.currentSelected) {
			this.currentSelected.style.backgroundColor = null;
			this.currentSelected.style.paddingLeft = '24px';
			this.currentSelected.style.borderLeft = null;
		}
		this.setState({
			selectedTag: tagName,
		});
		this.currentSelected = e.currentTarget;
		this.currentSelected.style.backgroundColor = '#f4f4f4';
		this.currentSelected.style.paddingLeft = '20px';
		this.currentSelected.style.borderLeft = `4px solid ${this.props.themeColor}`;
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
		const {
		tagCount,
		sortByhowMany,
		onSortList,
		sortedKor,
		sortedEng,
		sortedEtc,
    } = this.state;
		const { leftBar, full, themeColor } = this.props;
		return (
			<Motion
				style={{
					x: spring(leftBar && !full ? 179 : 0),
					y: spring(leftBar && !full ? 1 : 0),
				}}
			>
				{({ x, y }) => (
					<div
						className={css.container}
						style={{
							flex: `0 0 ${x}px`,
							borderRight: leftBar ? '1px solid #dfdfdf' : 'none',
							opacity: y,
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
							<div className={css.selectButton}>
								<div className={css.button} onClick={this.changeOnSortState} role="button" tabIndex="-10">
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
								{leftBar && onSortList &&
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
							<span
								className={css.sortButtonLeft}
								style={{ color: sortByhowMany ? themeColor : '#515861' }}
								onClick={() => {
									this.changeSortBy(true);
								}}
								role="button"
								tabIndex="-4"
							>
                노트 개수순
              </span>
							<span
								className={css.sortButtonRight}
								style={{ color: !sortByhowMany ? themeColor : '#515861' }}
								onClick={() => {
									this.changeSortBy(false);
								}}
								role="button"
								tabIndex="-5"
							>
                태그 이름순
              </span>
						</div>
						<div className={css.scrollBox}>
							{sortedKor &&
                sortedKor.map((tagGroup, index) => (
	<GroupedBox
		key={index}
		group={tagGroup[0]}
		tagSet={tagGroup[1]}
		changeClickedBox={this.changeClickedBox}
		themeColor={themeColor}
	/>
                ))}
							{sortedEng &&
                sortedEng.map((tagGroup, index) => (
	<GroupedBox
		key={index}
		group={tagGroup[0]}
		tagSet={tagGroup[1]}
		changeClickedBox={this.changeClickedBox}
		themeColor={themeColor}
	/>
                ))}
							{sortedEtc &&
                sortedEtc.map((tagGroup, index) => (
	<GroupedBox
		key={index}
		group={tagGroup[0]}
		tagSet={tagGroup[1]}
		changeClickedBox={this.changeClickedBox}
		themeColor={themeColor}
	/>
                ))}
						</div>
					</div>
        )}
			</Motion>
		);
	}
}

export default TagListBar;
