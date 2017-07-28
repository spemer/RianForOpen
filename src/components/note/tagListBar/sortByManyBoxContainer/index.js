// @flow
import React from 'react';
import parentCss from '../tagListBar.css';
import css from './sortByManyBoxContainer.css';

type Props = {
    tagList: any,
    themeColor: string,
	changeClickedBox: any,
	selectedTag: string,
};

const SortByManyBoxContainer = ({ tagList, themeColor, changeClickedBox, selectedTag }: Props) => (
	<div className={parentCss.scrollBox}>
		{tagList.sort((a, b) => {
			if (a.howMany > b.howMany) {
				return -1;
			} else if (a.howMany < b.howMany) {
				return 1;
			}
			return 0;
		}).map((tag, index) => {
			const style = {};
			if (tag.name === selectedTag) {
				style.backgroundColor = '#f4f4f4';
				style.paddingLeft = '20px';
				style.borderLeft = `4px solid ${themeColor}`;
			}
			return (<div className={css.tagBlock} style={style} key={tag._id} onClick={(e) => { changeClickedBox(e, tag.name); }} role="button" tabIndex={index}>
				<span className={css.tagName}>{`#${tag.name}`}</span>
				<span className={css.tagHowMany} style={{ color: themeColor }}>{tag.howMany}</span>
			</div>);
		},
        )}
	</div>
    );

export default SortByManyBoxContainer;
