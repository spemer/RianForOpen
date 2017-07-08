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
  updatedAt?: string,
  tags: Array<string>,
  backgroundImage: string,
  isPublish?: boolean,
  like?: number,
  style: any,
  changeNoteIdAndchangeNoteShowDispatch: Function
};

const TimelineSnippet = ({
  _id = '',
  title = '',
  preview = '',
  updatedAt = '2017.08.24',
  tags = [],
  backgroundImage = '',
  isPublish = false,
  like = 100,
  style = '',
  changeNoteIdAndchangeNoteShowDispatch = () => {},
}: Props) => (
	<div
		id={css.container}
		style={style}
		onClick={() => {
			changeNoteIdAndchangeNoteShowDispatch(_id, 'GET');
		}}
	>
		<div className={css.box}>
			<div className={css.left}>
				<div className={css.title}>
					{title || '제목없음'}
				</div>
			</div>
			<div className={css.right}>
				<div className={css.snippet}>
					{preview || '제목없음'}
				</div>
				<div className={css.tag}>
					{makeTagToElement(tags)}
				</div>
			</div>
		</div>
	</div>
);

export default TimelineSnippet;
