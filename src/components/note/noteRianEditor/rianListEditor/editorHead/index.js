// @flow
import React, { Component } from 'react';
import { WithContext as ReactTags } from 'react-styled-tag';
import './reactTag.global.css';
import parentCss from '../rianListEditor.css';
import css from './editorHead.css';

type DefaultProps = {
	full: boolean,
};

type Props = {
	full: boolean,
};

type tagType = {
  id: number,
  text: string
};

type State = {
  tags: Array<tagType>
};

class RianListEditor extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		full: false,
	};

	constructor(props: Props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleAddition = this.handleAddition.bind(this);
	}

	state = {
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
		return (
			<div className={parentCss.editorHead}>
				<div className={css.container}>
					<div className={css.tagBox}>
						<div className={css.gutter}>
							<p className={css.gutterName}>#</p>
						</div>
						<div className={css.tagContainer}>
							<ReactTags
								tags={tags}
								handleDelete={this.handleDelete}
								handleAddition={this.handleAddition}
								placeholder=""
							/>
						</div>
					</div>
					<div className={css.titleHead}>
						<div className={css.gutter}>
							<p className={css.gutterName}>Title</p>
						</div>
						<input className={css.title} placeholder="소중한 순간에 제목을 지어주세요" />
					</div>
					<div className={css.borderBox}>
						<div className={css.borderLine} />
					</div>
				</div>
			</div>
		);
	}
}

export default RianListEditor;
