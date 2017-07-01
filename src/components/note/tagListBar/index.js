// @flow
import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import { getTagList } from '../../../graphqls/TagGraphQl';
import css from './tagListBar.css';

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

const mapToState = state => ({
	userId: state.User._id,
	leftBar: state.App.leftBar,
});

type DefaultProps = {};

type Props = {};

type State = {
  active: "none" | "mode" | "tag" | "social" | "trash"
};

@connect(mapToState)
@compose(getTagListQuery)
class TagListBar extends Component<DefaultProps, Props, State> {

	constructor(props: Props) {
		super(props);
	}

	render() {
		const tagCount = 174;
		const { leftBar } = this.props;
		return (
			<Motion
				style={{
					x: spring(leftBar ? 179 : 0),
					y: spring(leftBar ? 28 : 0),
					z: spring(leftBar ? 24 : 0),
				}}
			>
				{({ x, y, z, g }) => (
					<div className={css.container} style={{ flex: `0 0 ${x}px`, borderRight: leftBar ? '1px solid #dfdfdf' : 'none' }}>
						<div className={css.head}>
							<div className={css.status}>
								<div className={css.title}>
									{'태그'}
								</div>
								<div className={css.count} >
									{`${tagCount}개의 태그`}
								</div>
							</div>
							<div className={css.sortButton} />
						</div>
						<div className={css.scrollBox} />
					</div>
		)}
			</Motion>
		);
	}
}

export default TagListBar;
