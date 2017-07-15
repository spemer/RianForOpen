// @flow
import React from 'react';
import parentCss from '../rianListEditor.css';
import css from './sidehead.css';

type Props = {
  timelineLeftBar: boolean
};

const SideHead = ({
  timelineLeftBar,
  changeTimelineLeftBarDispatch,
}: Props) => (
	<div className={parentCss.sideHead}>
		<div
			className={css.arrowBox}
			onClick={changeTimelineLeftBarDispatch}
			role="button"
			tabIndex="-13"
		>
			{timelineLeftBar
			? <div
				className={css.leftArrow}
			/>
			: <div
				className={css.rightArrow}
			/>}
		</div>
		<div className={css.save}><p>저장</p></div>
		<svg
			viewBox="0 0 24 24"
			opacity="0.38"
			width="13px"
			height="20px"
			className={css.trash}
		>
			<path
				fill="none"
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="10"
				strokeWidth="1.5"
				d="M4.4 20.8c0 1.2 1 2.2 2.2 2.2h10.8c1.2 0 2.2-1 2.2-2.2V7.6H4.4v13.2zM19.6 2.1h-3.8L14.7 1H9.3L8.2 2.1H4.4v3.3h15.2zM12 10.4v9.9M15.3 10.4v9.9M8.7 10.4v9.9"
			/>
		</svg>
	</div>
);

export default SideHead;
