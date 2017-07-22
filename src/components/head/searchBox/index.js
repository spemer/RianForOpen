// @flow
import React from 'react';
import searchIcon from '../../../../static/icons/ic-search.svg';
import parentCss from '../head.css';
import css from './searchbox.css';

type Props = {
  themeColor: string,
  modeIsTag: boolean,
  changeSearchMode: Function
};

function SearchBox({
  modeIsTag = false,
  themeColor = '',
  changeSearchMode,
}: Props) {
	return (
		<div className={parentCss.searchBox}>
			<img className={css.searchIc} src={searchIcon} alt="search" />
			<div className={css.container}>
				<input
					className={css.searchInput}
					placeholder={!modeIsTag ? '노트에서 검색하세요' : '태그에서 검색'}
				/>
			</div>
			<div
				className={css.changeOption}
				style={{ backgroundColor: !modeIsTag ? '#dedee0' : themeColor }}
				onClick={changeSearchMode}
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

export default SearchBox;
