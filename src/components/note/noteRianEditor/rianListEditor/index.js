// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import css from './rianListEditor.css';
import SideHead from './sideHead'
import EditorHead from './editorHead'


const mapToState = state => ({});

type DefaultProps = {
};

type Props = {
};

type State = {
};

@connect(mapToState)
class RianListEditor extends Component<DefaultProps, Props, State> {
	static defaultProps = {}

	constructor(props: Props) {
		super(props);
	}

	state = {}

	render() {
		return (
			<div className={css.container}>
				<SideHead />
				<EditorHead />
			</div>	
		)
	}
}

export default RianListEditor;
