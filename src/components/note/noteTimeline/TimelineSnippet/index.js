// @flow
import React from 'react';
import css from './timelineSnippet.css';

const makeTagToElement = (tagSet: Array<string>) => {
	const SumTagSet = tagSet.reduce((a: string, b: string) => `${a}#${b}`, '');
	return <p className={css.tagInstance}>{SumTagSet}</p>;
};
type Props = {
  title: string,
  preview: string,
  time?: string,
  tag: Array<string>,
  photo?: string,
  publish?: number,
  style: Object
};

const TimelineSnippet = ({
  title = '',
  preview = '',
  time = '2017.08.24',
  tag = [],
  photo,
  publish,
  style,
}: Props) => (
	<div id={css.container} style={style}>
		<div className={css.box}>
			<div className={css.left}>
				<div className={css.block} />
				<div className={css.title}>
					{title}
				</div>
			</div>
			<div className={css.right}>
				<div className={css.snippet}>
					{preview}
				</div>
				<div className={css.tag}>
					{makeTagToElement(tag)}
				</div>
			</div>
		</div>
	</div>
);

export default TimelineSnippet;
