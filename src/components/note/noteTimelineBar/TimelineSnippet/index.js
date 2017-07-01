// @flow
import React from 'react';
import css from './timelineSnippet.css';

const makeTagToElement = (tagSet: Array<string>) => {
	const SumTagSet = tagSet.reduce((a: string, b: string) => `${a}#${b}`, '');
	return <p className={css.tagInstance}>{SumTagSet}</p>;
};
type Props = {
    _id: string,
    title: string,
    preview: string,
    updated_at?: string,
    tags: Array<string>,
    is_publish?: boolean,
    like?: number,
    style: any,
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
}: Props) => (
	<div className={css.container} style={style}>
		<div className={css.box}>
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
