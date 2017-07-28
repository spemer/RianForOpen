// @flow
import React from 'react';
import GroupedBox from './groupedBox';
import parentCss from '../tagListBar.css';

type Props = {
  tagListGroup: any,
  themeColor: string,
	changeClickedBox: any,
	selectedTag: string,
};

const GroupedBoxContainer = ({
  tagListGroup: { sortedKor, sortedEng, sortedEtc },
  themeColor,
	changeClickedBox,
	selectedTag,
}: Props) => (
	<div className={parentCss.scrollBox}>
		{sortedKor && sortedKor.map(tagGroup => (
			<GroupedBox
				key={tagGroup[0]}
				group={tagGroup[0]}
				tagSet={tagGroup[1]}
				changeClickedBox={changeClickedBox}
				themeColor={themeColor}
				selectedTag={selectedTag}
			/>
        ))}
		{sortedEng && sortedEng.map(tagGroup => (
			<GroupedBox
				key={tagGroup[0]}
				group={tagGroup[0]}
				tagSet={tagGroup[1]}
				changeClickedBox={changeClickedBox}
				themeColor={themeColor}
				selectedTag={selectedTag}
			/>
        ))}
		{sortedEtc && sortedEtc.map(tagGroup => (
			<GroupedBox
				key={tagGroup[0]}
				group={tagGroup[0]}
				tagSet={tagGroup[1]}
				changeClickedBox={changeClickedBox}
				themeColor={themeColor}
				selectedTag={selectedTag}
			/>
        ))}
	</div>
);

export default GroupedBoxContainer;
