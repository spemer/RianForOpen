import React, { Component } from 'react';
import css from './timeline.css';

export default class Timeline extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id={css.timeline}>
        I'm Timeline
      </div>
		);
	}
}
