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
	selected: boolean,
	themeColor: string,
};

const TimelineSnippet = ({
  noteId = 'temp',
  title = 'temp',
  preview = '',
  updatedAt = '3일전',
  style = '',
  selected = false,
  themeColor = '',
}: Props) => {
	let boxStyle;
	if (selected) {
		boxStyle = {
			backgroundColor: '#f4f4f4',
			paddingLeft: '19px',
			borderLeft: `4px solid ${themeColor}`,
		};
		return (
			<div className={css.container} style={style}>
				<div className={css.box} style={boxStyle} role="button" tabIndex="0">
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
	}
	boxStyle = {
		backgroundColor: null,
		paddingLeft: '23px',
		borderLeft: null,
	};
	return (
		<Link to={`/list/${noteId}`}>
			<div className={css.container} style={style}>
				<div className={css.box} style={boxStyle} role="button" tabIndex="0">
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
};

export default TimelineSnippet;
