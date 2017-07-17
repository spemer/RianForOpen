// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import css from './timelineSnippet.css';

type Props = {
	noteId: string,
    title: string,
    preview: string,
    updatedAt: string,
    style: any,
    changeClickedBox: Function,
};

const TimelineSnippet = ({
  noteId = 'temp',
  title = 'temp',
  preview = '',
  updatedAt = '3일전',
  style = '',
  changeClickedBox = () => {},
}: Props) => (
	<Link to={`/list/${noteId}`}>
		<div className={css.container} style={style}>
			<div className={css.box} onClick={(e) => { changeClickedBox(e); }} role="button" tabIndex="0">
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
	</Link>
);

export default TimelineSnippet;
