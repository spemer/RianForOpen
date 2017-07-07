// @flow
import React from 'react';
import css from './groupedBox.css';

const tagMapToBox = (tagSet, changeClickedBox) => tagSet.map((tag, index) => (
	<div className={css.tagBlock} key={index} onClick={(e) => { changeClickedBox(e, tag.name); }} role="button" tabIndex={index}>
		<span className={css.tagName}>{`#${tag.name}`}</span>
		<span className={css.tagHowMany}>{tag.howMany}</span>
	</div>
	));

type Props = {
	group: string,
	tagSet: Array<any>,
	changeClickedBox: Function
};

const GroupedBox = ({ group = '태그없음', tagSet = [{ name: 'error' }], changeClickedBox = () => {} }: Props) => (
	<div className={css.container}>
		<div className={css.titleBox}>
			<span className={css.titleName}>
				{group}
			</span>
		</div>
		<div className={css.list}>
			{tagMapToBox(tagSet, changeClickedBox)}
		</div>
	</div>
);

export default GroupedBox;
