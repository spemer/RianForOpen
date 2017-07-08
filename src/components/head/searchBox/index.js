import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import css from './searchBox.css';

type DefaultProps = {
};

type Props = {
};

type State = {
};

class SearchBox extends Component<DefaultProps, Props, State> {
	static defaultProps = {}

	constructor(props: Props) {
		super(props);
	}

	state = {}

	render() {
		return (
			<div className={css.container}>
				<input className={css.searchInput} placeholder={'노트에서 검색하세요'} />
			</div>
		);
	}
}

export default SearchBox;
