// @flow
import React from 'react';
import css from './timelineSnippet.css';

type Props = {
    _id: string,
    title: string,
    preview: string,
    updated_at?: string,
    tags: Array<string>,
    is_publish?: boolean,
    like?: number,
    style: any,
    changeClickedBox: Function,
};

const TimelineSnippet = ({
  _id = '',
  title = '',
  preview = '',
  updated_at = '3일전',
  tags = [],
  is_publish = false,
  like = 100,
  style = '',
  changeClickedBox = () => {},
}: Props) => (
	<div className={css.container} style={style}>
		<div className={css.box} onClick={(e) => { changeClickedBox(e); }}>
			<div className={css.timestamp}>
				{updated_at}
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
