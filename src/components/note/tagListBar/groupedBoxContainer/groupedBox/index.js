// @flow
import React from 'react';
import css from './groupedBox.css';

const tagMapToBox = (tagSet, changeClickedBox, themeColor, selectedTag) =>
	tagSet.map((tag, index) => {
		const style = {};
		if (tag.name === selectedTag) {
			style.backgroundColor = '#f4f4f4';
			style.paddingLeft = '20px';
			style.borderLeft = `4px solid ${themeColor}`;
		}
		return (
			<div className={css.tagBlock} style={style} key={tag.name} onClick={(e) => { changeClickedBox(e, tag.name); }} role="button" tabIndex={index}>
				<span className={css.tagName}>{`#${tag.name}`}</span>
				<span className={css.tagHowMany} style={{ color: themeColor }}>{tag.howMany}</span>
			</div>
		);
	});

type Props = {
	group: string,
	tagSet: Array<any>,
	changeClickedBox: Function,
	themeColor: string,
	selectedTag: string,
};

const GroupedBox = ({ group = '태그없음', tagSet = [{ name: 'error' }], changeClickedBox = () => {}, themeColor = '', selectedTag = '' }: Props) => (
	<div className={css.container}>
		<div className={css.titleBox}>
			<span className={css.titleName}>
				{group}
			</span>
		</div>
		<div className={css.list}>
			{tagMapToBox(tagSet, changeClickedBox, themeColor, selectedTag)}
		</div>
	</div>);

export default GroupedBox;
