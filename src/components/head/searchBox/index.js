// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStringToTagArray } from '../../util/handleData';
import { changeRenderTags } from '../../../actions/AppActions';
import searchIcon from '../../../../static/icons/ic-search.svg';
import parentCss from '../head.css';
import css from './searchbox.css';

type Store = {
	App: {
		themeColor: string
	}
}

function mapToState({ App: { themeColor } }: Store) {
	return {
		themeColor,
	};
}

function mapToDispatch(dispatch) {
	return {
		changeRenderTagsDispatch(tags: Array<string>) {
			dispatch(changeRenderTags(tags));
		},
	};
}

type DefaultProps = {
  themeColor: string,
  changeRenderTagsDispatch: Function,
};

type Props = {
  themeColor: string,
  changeRenderTagsDispatch: Function,
};

type State = {
  modeIsTag: boolean,
  value: ?string,
}


@connect(mapToState, mapToDispatch)
class SearchBox extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		themeColor: '',
		changeRenderTagsDispatch: () => {},
	};

	constructor(props: Props) {
		super(props);
		this.changeSearchMode = this.changeSearchMode.bind(this);
		this.handleValue = this.handleValue.bind(this);
		this.handleTag = this.handleTag.bind(this);
	}

	state = {
		modeIsTag: true,
		value: '',
	}

	changeSearchMode: Function;
	handleValue: Function;
	handleTag: Function;

	handleValue(e: any) {
		this.setState({
			value: e.target.value,
		});
	}

	changeSearchMode() {
		this.setState(prevState => ({
			modeIsTag: !prevState.modeIsTag,
		}));
	}

	handleTag(e: any) {
		if (e.charCode == 13) {
			this.setState({
				value: '',
			});
			return this.props.changeRenderTagsDispatch(makeStringToTagArray(e.target.value));
		}
		if (e.keyCode == 13) {
			this.setState({
				value: '',
			});
			return this.props.changeRenderTagsDispatch(makeStringToTagArray(e.target.value));
		}
		return null;
	}

	render() {
		const { modeIsTag } = this.state;
		const { themeColor } = this.props;
		return (
			<div className={parentCss.searchBox}>
				<img className={css.searchIc} src={searchIcon} alt="search" />
				<div className={css.container}>
					<input
						className={css.searchInput}
						placeholder={!modeIsTag ? '노트에서 검색하세요' : '태그에서 검색'}
						value={this.state.value}
						onChange={this.handleValue}
						onKeyPress={this.handleTag}
					/>
				</div>
				<div
					className={css.changeOption}
					style={{ backgroundColor: !modeIsTag ? '#dedee0' : themeColor }}
					onClick={this.changeSearchMode}
					role="button"
					tabIndex="0"
				>
					<svg className={css.icon} version="1.1" viewBox="0 0 24 24" enableBackground="new 0 0 24 24">
						<g>
							<path
								fill="#FFFFFF"
								d="M15.5,14.3H14l-0.5,3.4h-1.3l0.5-3.4h-1.8l-0.5,3.4H9.1l0.5-3.4H8v-1.2h1.7l0.3-2.1H8.5V9.7h1.7l0.5-3.4H12
							l-0.5,3.4h1.8l0.5-3.4h1.3l-0.5,3.4H16v1.2h-1.6l-0.3,2.1h1.4V14.3z M11.3,10.9L11,13.1h1.8l0.3-2.1H11.3z"
							/>
						</g>
					</svg>
				</div>
			</div>
		);
	}
}

export default SearchBox;
