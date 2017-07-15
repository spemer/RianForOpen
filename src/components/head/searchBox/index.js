// @flow
import React, { Component } from 'react';
import searchIcon from '../../../../static/icons/ic-search.svg';
import parentCss from '../head.css';
import css from './searchBox.css';

type Props = {
	themeColor: string,
	modeIsTag: boolean,
	changeSearchMode: Function
};

function SearchBox({ modeIsTag = false, themeColor = null, changeSearchMode }: Props) {
	return (
		<div className={parentCss.searchBox}>
			<img className={css.searchIc} src={searchIcon} alt="search" />
			<div className={css.container}>
				<input className={css.searchInput} placeholder={!modeIsTag ? '노트에서 검색하세요' : '태그에서 검색'} />
			</div>
			<div className={css.changeOption} style={{ backgroundColor: !modeIsTag ? '#dedee0' : themeColor }}onClick={changeSearchMode} role="button" tabIndex="0"><p>#</p></div>
		</div>
	);
}

export default SearchBox;
