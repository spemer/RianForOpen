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
  backgroundImage: string,
  is_publish?: boolean,
  like?: number,
  style: Object
};

const TimelineSnippet = ({
  _id = '',
  title = '',
  preview = '',
  updated_at = '2017.08.24',
  tags = [],
  backgroundImage = '',
  is_publish = false,
  like = 100,
  style,
}: Props) => (
	<div id={css.container} style={style}>
		<div className={css.box}>
			<div className={css.left}>
				{/*<div className={css.block} />*/}
				<div className={css.title}>
					{title ? title : '제목없음'}
				</div>
			</div>
			<div className={css.right}>
				<div className={css.snippet}>
					{preview ? preview : '제목없음'}
				</div>
				<div className={css.tag}>
					{makeTagToElement(tags)}
				</div>
			</div>
		</div>
	</div>
);

export default TimelineSnippet;
