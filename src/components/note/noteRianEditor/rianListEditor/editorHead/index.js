// @flow
import React, { Component } from 'react';
// import { WithContext as ReactTags } from 'react-styled-tag';
import './reactTag.global.css';
import parentCss from '../rianListEditor.css';
import css from './editorHead.css';

type DefaultProps = {
	full: boolean,
	title: null,
	loading: null
};

type Props = {
	full: boolean,
	title: string,
	loading: boolean
};

type tagType = {
  id: number,
  text: string
};

type State = {
  titleValue: string,
  tags: Array<tagType>
};

class RianListEditor extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		full: false,
		title: null,
		loading: null,
	};

	constructor(props: Props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleAddition = this.handleAddition.bind(this);
	}

	state = {
		titleValue: this.props.title && !this.props.loading ? this.props.title : '로딩중',
		tags: [{ id: 1, text: '#명상' }, { id: 2, text: '#자기계발' }],
	};

	componentWillReceiveProps(nextProps: Props) {
		console.log('title get new Props', nextProps);
		if (process.env.NODE_ENV === 'production') {
			const { loading, title } = nextProps;
			if (!loading) {
				this.setState({
					titleValue: title,
				});
			}
		}
	}

	handleChange: Function;
	handleDelete: Function;
	handleAddition: Function;

	handleChange({ target: { value } }: any) {
		this.setState({
			titleValue: value,
		});
	}

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
		// const { tags } = this.state;
		const { full } = this.props;
		return (
			<div className={parentCss.editorHead}>
				<div className={css.container}>
					<div className={css.tagBox} style={{ height: !full ? '40px' : '0px', marginTop: !full ? '0px' : '40px' }}>
						<div className={css.gutter}>
							{/* <p className={css.gutterName}>#</p> */}
						</div>
						<div className={css.tagContainer} />
					</div>
					<div className={css.titleHead}>
						<div className={css.gutter}>
							<p className={css.gutterName}>Title</p>
						</div>
						<input className={css.title} placeholder="" value={this.state.titleValue} onChange={this.handleChange} />
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
