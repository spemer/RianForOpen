// @flow
import React from 'react';
import css from './timelineSnippet.css';

type Props = {
    id: string,
    title: string,
    preview: string,
    updatedAt?: string,
    tags: Array<string>,
    isPublish?: boolean,
    like?: number,
    style: any,
    changeClickedBox: Function,
};

const TimelineSnippet = ({
  id = '',
  title = '',
  preview = '',
  updatedAt = '3일전',
  tags = [],
  isPublish = false,
  like = 100,
  style = '',
  changeClickedBox = () => {},
}: Props) => (
	<div className={css.container} style={style}>
		<div className={css.box} onClick={(e) => { changeClickedBox(e); }}>
			<div className={css.timestamp}>
				{updatedAt}
			</div>
			<div className={css.title}>
				{title}
			</div>
			<div className={css.preview}>
				{preview}
			</div>
		</div>
	</div>
);

export default TimelineSnippet;
