// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import parentCss from '../rianListEditor.css'
import css from './sidehead.css'

const mapToState = state => ({});

type DefaultProps = {
};

type Props = {
};

type State = {
};

@connect(mapToState)
class SideHead extends Component<DefaultProps, Props, State> {
	static defaultProps = {}

	constructor(props: Props) {
		super(props);
	}

	state = {}

	render() {
		return (
			<div className={parentCss.sideHead}>
				<div className={css.container}>
					<svg viewBox="0 0 24 24" opacity="0.38" width="15px" height="22px">
						<path d="M24 9.3l-8.6-.7-3.4-8-3.4 8-8.6.7L6.6 15l-2 8.4 7.4-4.5 7.4 4.5-2-8.4L24 9.3zm-12 7.4l-4.5 2.7 1.2-5.1-4-3.5 5.3-.5 2-4.8 2.1 4.8 5.3.5-4 3.5 1.2 5.1-4.6-2.7z"/>
						<path fill="none" d="M0 0h24v24H0V0z"/>
					</svg>
					<svg viewBox="0 0 24 24" opacity="0.38" width="15px" height="22px">>
						<path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M4.4 20.8c0 1.2 1 2.2 2.2 2.2h10.8c1.2 0 2.2-1 2.2-2.2V7.6H4.4v13.2zM19.6 2.1h-3.8L14.7 1H9.3L8.2 2.1H4.4v3.3h15.2zM12 10.4v9.9M15.3 10.4v9.9M8.7 10.4v9.9"/>
					</svg>
					<svg viewBox="0 0 24 24" opacity="0.38" width="15px" height="22px">
						<path fill="none" d="M0 0h24v24H0z"/>
						<path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/>
					</svg>
				</div>
			</div>	
		);
	}
}

export default SideHead;