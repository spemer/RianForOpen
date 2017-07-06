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

const isInHangeul = function (argu) {
	const pattern = /[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]/g;
	return !!pattern.test(argu);
};
const isInEnglish = function (argu) {
	return !argu.match(/[^a-zA-Z]/);
};

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

const sortedKor = toPairs(korResult).sort((a, b) => {
	if (a[0] > b[0]) return 1;
	if (a[0] < b[0]) return -1;
	return 0;
});
const sortedEng = toPairs(engResult).sort((a, b) => {
	if (a[0] > b[0]) return 1;
	if (a[0] < b[0]) return -1;
	return 0;
});
const sortedEtc = toPairs(etcResult);

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

const mapToState = ({ User: { _id }, App: { full, leftBar } }) => ({
	userId: _id,
	leftBar,
	full,
});

type DefaultProps = {
  userId: string,
  leftBar: boolean,
  full: boolean,
};

type Props = {
  userId: string,
  leftBar: boolean,
  full: boolean,
};

type State = {
  tagCount: number,
  selectedTag: string,
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
		leftBar: false,
		full: false,
	};

	constructor(props: Props) {
		super(props);
		this.currentSelected = '';
		this.changeSelectedTag = this.changeSelectedTag.bind(this);
		this.changeSortBy = this.changeSortBy.bind(this);
		this.changeClickedBox = this.changeClickedBox.bind(this);
	}

	state = {
		tagCount: 174,
		sortByhowMany: true,
		selectedTag: '',
		sortedKor,
		sortedEng,
		sortedEtc,
	};

	changeSelectedTag: Function;
	changeSortBy: Function;
	currentSelected: '';

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
		this.currentSelected.style.paddingLeft = '21px';
		this.currentSelected.style.borderLeft = '3px solid #ff3466';
	}

	render() {
		const {
      tagCount,
      sortByhowMany,
      selectedTag,
      sortedKor,
      sortedEng,
      sortedEtc,
    } = this.state;
		const { leftBar, full } = this.props;
		return (
			<Motion
				style={{
					x: spring(leftBar && !full ? 179 : 0),
				}}
			>
				{({ x }) => (
					<div
						className={css.container}
						style={{
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
							<div className={css.selectButton}>
								<div className={css.button}>
									<svg
										version="1.1"
										x="0px"
										y="0px"
										viewBox="0 0 24 24"
										enableBackground="new 0 0 24 24"
										opacity="0.38"
									>
										<line fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="7.2" y1="9.8" x2="12" y2="14.2" />
										<line fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="16.8" y1="9.8" x2="12" y2="14.2" />
									</svg>
								</div>
							</div>
						</div>
						<div className={css.sortBox}>
							<span className={css.sortButtonLeft} style={{ color: sortByhowMany ? '#ff3466' : '#515861' }} onClick={() => { this.changeSortBy(true); }} role="button" tabIndex="0">
							노트 개수순
							</span>
							<span className={css.sortButtonRight} style={{ color: !sortByhowMany ? '#ff3466' : '#515861' }} onClick={() => { this.changeSortBy(false); }} role="button" tabIndex="1">
							태그 이름순
							</span>
						</div>
						<div className={css.scrollBox}>
							{sortedKor &&
                sortedKor.map((tagGroup, index) => (
	<GroupedBox key={index} group={tagGroup[0]} tagSet={tagGroup[1]} changeClickedBox={this.changeClickedBox} />
                ))}
							{sortedEng &&
                sortedEng.map((tagGroup, index) => (
	<GroupedBox key={index} group={tagGroup[0]} tagSet={tagGroup[1]} changeClickedBox={this.changeClickedBox} />
                ))}
							{sortedEtc &&
                sortedEtc.map((tagGroup, index) => (
	<GroupedBox key={index} group={tagGroup[0]} tagSet={tagGroup[1]} changeClickedBox={this.changeClickedBox} />
                ))}
						</div>
					</div>
        )}
			</Motion>
		);
	}
}

export default TagListBar;
