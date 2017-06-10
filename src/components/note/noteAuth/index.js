// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Authorized from './authorized';
import Unauthorized from './unauthorized';

const mapState = state => ({
	User: state.User,
});

type DefaultProps = {};

type Props = {};

type State = {};

@connect(mapState)
class NoteAuth extends Component<DefaultProps, Props, State> {
	static defaultProps = {};

	constructor(props: Props) {
		super(props);
	}

	render() {
		const { User } = this.props;
		if (User._id) {
			return <Authorized User={User} />;
		}
		return <Unauthorized />;
	}
}

export default NoteAuth;
