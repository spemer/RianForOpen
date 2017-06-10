// @flow
import React, { Component } from 'react';
import editorCss from '../totalLayout.css';
import css from './tagBar.css';

type DefaultProps = {};

type Props = {};

type State = {
  selectedTag: Array<string>,
  searchInput: string
};

class TagBar extends Component<DefaultProps, Props, State> {
	static defaultProps = {};

	constructor(props: Props) {
		super(props);
		this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
		this.addTagInList = this.addTagInList.bind(this);
		this.deleteTagInList = this.deleteTagInList.bind(this);
	}

	state = {
		selectedTag: ['자바', '3학년1학기', '컴퓨터공학'],
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
		if (!tagName) return; // 빈 태그내임이 들어왔을때 무시하는 Edge Case 처리
		if (this.state.selectedTag.includes(tagName)) {
			return this.handleSearchInputChange('');
		} // 이미 있는거 또 쳤을때는 무시
		this.setState((prevState: State) => ({
			selectedTag: prevState.selectedTag.concat(tagName),
			searchInput: '',
		}));
	}

	deleteTagInList(tag: string) {
		const deleteItemInArray = (name: string, array: Array<string>) => {
			const result = Array.prototype.slice.call(array);
			const index = result.indexOf(name);
			result.splice(index, 1);
			return result;
		};
		this.setState((prevState: State) => ({
			selectedTag: deleteItemInArray(tag, prevState.selectedTag),
		}));
	}

	render() {
		return (
			<div className={editorCss.tag}>
				<div className={css.tagBar}>
					<div className={css.tagContent}>
						<div className={css.selectedTagList}>
							{this.state.selectedTag.map((tag: string, index: number) => (
								<div key={index} className={css.oneOfTag}>
									<div
										className={css.delete}
										onClick={(e) => {
											e.preventDefault();
											this.deleteTagInList(tag);
										}}
									/>
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
								if (keyCode === 32 || keyCode === 13) {
									if (currentTarget.value === ' ') {
                    // 공백에서 스페이스 or Enter를 치면 다시 공백으로 돌린다
										return this.handleSearchInputChange('');
									}
                  // 그 외의 경우 태그 추가
									return this.addTagInList(
                    currentTarget.value.replace(/ /g, ''),
                  );
								}
                // because eslint
								return undefined;
							}}
							className={css.tagSearchInput}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default TagBar;
