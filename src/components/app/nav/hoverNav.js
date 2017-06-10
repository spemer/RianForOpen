// @flow
import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { Motion, spring } from 'react-motion';
import { getTagList } from '../../../graphqls/TagGraphQl';
import css from './nav.css';

const getTagListQuery = graphql(getTagList, {
	options: () => ({
		variables: {
			userId: '5923b81861322804b81cecb6', // 임시 키
		},
		ssr: false,
	}),
	name: 'TagData',
});

type DefaultProps = {
  TagData: any,
  changeWhichBar: Function,
  sideBar: boolean
};

type Props = {
  TagData: any,
  changeWhichBar: Function,
  sideBar: boolean
};

type State = {};

class HoverNav extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		TagData: {},
		changeWhichBar: () => {},
		sideBar: false,
	};

	constructor(props: Props) {
		super(props);
	}

	state = {};

	render() {
		let tagList;
		if (this.props.TagData.getTagList) {
			tagList = this.props.TagData.getTagList.map((Tag, index) => (
				<div
					key={index}
					className={css.tag}
					onClick={() => {
						this.props.changeWhichBar('NoteList');
					}}
				>
					<div className={css.text}>
						{`#${Tag.name}`}
					</div>
				</div>
      ));
		} else {
			tagList = [
				'강의',
				'고향',
				'감자',
				'고구마',
				'강남',
				'고요한날',
				'고마움',
				'기도',
				'걱정',
				'감사',
				'고뇌',
				'감탄',
				'그리움',
				'고난과역경',
				'축구',
				'3학년1학기',
				'장보기',
				'철학',
				'음악',
				'예술',
				'미술',
				'운동',
				'대중음악',
				'작곡',
				'여행',
				'음악',
				'호이스팅',
				'자바스크립트',
				'리액트',
				'서버',
				'그리움',
				'고난과역경',
				'축구',
				'3학년1학기',
			];
			tagList = tagList.map((data, index) => (
				<div key={index} className={css.tag}>
					<div className={css.text}>{`#${data}`}</div>
				</div>
      ));
		}
		return (
			<Motion
				style={{
					x: spring(this.props.sideBar ? 100 : 0),
				}}
			>
				{({ x, y }) => (
					<div id={css.hoverNav} style={{ width: `${x}px` }}>
						{tagList}
					</div>
        )}
			</Motion>
		);
	}
}

export default HoverNav;
