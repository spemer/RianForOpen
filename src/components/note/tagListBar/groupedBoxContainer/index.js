// @flow
import React from 'react';
import GroupedBox from './groupedBox';
import parentCss from '../tagListBar.css';

type Props = {
  tagListGroup: {
    sortedKor: any,
    sortedEng: any,
    sortedEtc: any
  },
  themeColor: string,
  changeClickedBox: any
};

const GroupedBoxContainer = ({
  tagListGroup: { sortedKor, sortedEng, sortedEtc },
  themeColor,
  changeClickedBox,
}: Props) => (
	<div className={parentCss.scrollBox}>
		{sortedKor && sortedKor.map(tagGroup => (
			<GroupedBox
				key={tagGroup[0]}
				group={tagGroup[0]}
				tagSet={tagGroup[1]}
				changeClickedBox={changeClickedBox}
				themeColor={themeColor}
			/>
        ))}
		{sortedEng && sortedEng.map(tagGroup => (
			<GroupedBox
				key={tagGroup[0]}
				group={tagGroup[0]}
				tagSet={tagGroup[1]}
				changeClickedBox={changeClickedBox}
				themeColor={themeColor}
			/>
        ))}
		{sortedEtc && sortedEtc.map(tagGroup => (
			<GroupedBox
				key={tagGroup[0]}
				group={tagGroup[0]}
				tagSet={tagGroup[1]}
				changeClickedBox={changeClickedBox}
				themeColor={themeColor}
			/>
        ))}
	</div>
);

export default GroupedBoxContainer;
