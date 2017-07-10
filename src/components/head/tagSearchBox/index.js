// @flow
import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
import { WithContext as ReactTags } from 'react-styled-tag';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import './reactTag.global.css';

import { getTagList } from '../../../graphqls/TagGraphQl';

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
	User: {
		userId: string
	}
}

type DefaultProps = {};

type Props = {};

type tagType = {
  id: number,
  text: string
};

type State = {
  modeIsTag: boolean,
  tags: Array<tagType>
};

function mapToState({ User: { userId } }: Store) {
	return {
		userId,
	};
}

@connect(mapToState)
@compose(getTagListQuery)
class SearchBox extends Component<DefaultProps, Props, State> {

	static defaultProps = {

	}

	constructor(props: Props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleAddition = this.handleAddition.bind(this);
	}

	state = {
		modeIsTag: false,
		tags: [{ id: 1, text: '#명상' }, { id: 2, text: '#자기계발' }],
	};

	handleDelete: Function;
	handleAddition: Function;

	handleDelete(i: number) {
		const tags = this.state.tags;
		tags.splice(i, 1);
		this.setState({ tags });
	}

	handleAddition(tag: string) {
		const tags = this.state.tags;
		tags.push({
			id: tags.length + 1,
			text: `#${tag.replace(/ /gi, '')}`,
		});
		this.setState({ tags });
	}

	render() {
		const { tags } = this.state;
		const suggestions = ['mango', 'pineapple', 'orange', 'pear'];
		return (
			<ReactTags
				tags={tags}
				handleDelete={this.handleDelete}
				suggestions={suggestions}
				handleAddition={this.handleAddition}
				placeholder=""
				classNames={{
					tags: 'tagsClass',
					tagInputField: 'tagInputField',
					tag: 'headTag',
				}}
			/>
		);
	}
}

export default SearchBox;
