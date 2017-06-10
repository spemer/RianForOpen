// @flow
import React, { Component } from 'react';
import timelineCss from '../noteTimeline.css';
import css from './tagSearch.css';
import expandingItemIcon from './expanding-item-icon.svg';

type DefaultProps = {};

type Props = {};

type State = {
  selectedTag: Array<string>,
  searchInput: string
};

class TagSearch extends Component<DefaultProps, Props, State> {
	static defaultProps = {};

	constructor(props: Props) {
		super(props);
		this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
		this.addTagInList = this.addTagInList.bind(this);
		this.deleteTagInList = this.deleteTagInList.bind(this);
	}

	state = {
		selectedTag: ['만약', '수정'],
		searchInput: '',
	};

	handleSearchInputChange: Function;
	addTagInList: Function;
	deleteTagInList: Function;

	handleSearchInputChange(value: string) {
		this.setState({
			searchInput: value,
		});
	}

	addTagInList(tagName: string) {
		this.setState((prevState: State) => ({
			selectedTag: prevState.selectedTag.concat(tagName),
			searchInput: '',
		}));
	}

	deleteTagInList() {
		this.setState((prevState: State) => ({
			selectedTag: prevState.selectedTag.slice(
        0,
        prevState.selectedTag.length - 1,
      ),
		}));
	}

	render() {
		return (
			<div className={timelineCss.timelineSearch}>
				<div className={css.timelineSearchBar}>
					<div className={css.tagContent}>
						<div className={css.selectedTagList}>
							{this.state.selectedTag.map((tag: string, index: number) => (
								<div key={index} className={css.oneOfTag}>
									<div className={css.delete} />
									<div className={css.name}>{tag}</div>
								</div>
              ))}
						</div>
						<input
							value={this.state.searchInput}
							onChange={({
                currentTarget,
              }: { currentTarget: { value: string } }) => {
								this.handleSearchInputChange(currentTarget.value);
							}}
							onKeyUp={({
                keyCode,
                currentTarget,
              }: {
                keyCode: number,
                currentTarget: { value: string }
              }) => {
								if (keyCode === 8 && currentTarget.value === '') {
									return this.deleteTagInList();
								}
								if (keyCode === 32 || keyCode === 13) {
									if (currentTarget.value === ' ') {
                    // 공백에서 스페이스 or Enter를 치면 다시 공백으로 돌린다
										return this.handleSearchInputChange('');
									}
                  // 그 외의 경우 태그 추가
									return this.addTagInList(currentTarget.value);
								}
                // because eslint
								return undefined;
							}}
							className={css.tagSearchInput}
						/>
					</div>
					<img
						className={css.expandingIcon}
						src={expandingItemIcon}
						alt="alt"
					/>
				</div>
			</div>
		);
	}
}

export default TagSearch;
