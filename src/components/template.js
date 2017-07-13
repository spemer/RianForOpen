// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';

type Store = {

}

function mapToState(state: Store) {
	return {

	};
}

type DefaultProps = {
};

type Props = {
};

type State = {
};

@connect(mapToState)
@compose()
class Temp extends Component<DefaultProps, Props, State> {
	static defaultProps = {}

	constructor(props: Props) {
		super(props);
	}

	state = {}

	render() {
		return (
			<div />
		);
	}
}

export default Temp;
