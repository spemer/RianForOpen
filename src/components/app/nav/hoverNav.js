// @flow
import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { Motion, spring } from 'react-motion';
import { getTagList } from '../../../graphqls/TagGraphQl';
import css from './nav.css';

const getTagListQuery = graphql(getTagList, {
	options: (props) => ({
		variables: {
			userId: SERVER ? props.userId : null,
			condition: 'All',
		},
		ssr: true,
	}),
	skip: process.env.NODE_ENV === 'development' && true,
	name: 'tagData',
});

type DefaultProps = {
  tagData: any,
  changeWhichBar: Function,
  sideBar: boolean
};

type Props = {
  tagData: any,
  changeWhichBar: Function,
  sideBar: boolean
};

type State = {};

@compose(getTagListQuery)
class HoverNav extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		tagData: false,
		changeWhichBar: () => {},
		sideBar: false,
	};

	constructor(props: Props) {
		super(props);
	}

	state = {};

	render() {
		let tagList;
		if (process.env.NODE_ENV === 'production') {
			if (this.props.tagData.getTagsByCondition) {
				tagList = this.props.tagData.getTagsByCondition.tags.map((Tag, index) => (
					<div
						key={index}
						className={css.tag}
						onClick={() => {
							this.props.changeWhichBar('NoteList');
						}}
					>
						<div className={css.text}>
							{Tag.name}
						</div>
					</div>
				));
			} else {
				tagList = []
			}
		}
		if (process.env.NODE_ENV === 'development') {
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
					<div className={css.text}>{`${data}`}</div>
				</div>
      ));
		}
		return (
			<Motion
				style={{
					x: spring(this.props.sideBar ? 80 : 0),
				}}
			>
				{({ x, y }) => (
					<div id={css.hoverNav} style={{ width: `${x}px` }}>
						<div className={css.navBoxContainer}>
							<div className={css.blockTop} />

							<div className={css.tagContainer}>
								{tagList}
							</div>

							<div className={css.blockBottom} />
						</div>
					</div>
        )}
			</Motion>
		);
	}
}

export default HoverNav;
