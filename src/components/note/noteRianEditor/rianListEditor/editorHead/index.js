// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import parentCss from '../rianListEditor.css'
import css from './editorHead.css'

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
			<div className={parentCss.editorHead}>
				<div className={css.container}>
					<div className={css.titleHead}>
						<div className={css.gutter}>
							<p className={css.gutterName}>Title</p>
						</div>
						<input className={css.title} placeholder="소중한 순간에 제목을 지어주세요"/>		
					</div>	
					<div className={css.tagBox}>
						<div className={css.gutter}>
							<p className={css.gutterName}>Tag</p>
						</div>
					</div>
					<div className={css.borderBox}>
						<div className={css.borderLine}/>
					</div>		
				</div>
			</div>	

		);
	}
}

export default RianListEditor;