// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import css from './cardInstance.css';

const makeTagToElement = (tagSet: Array<string>) => {
	const SumTagSet = tagSet.reduce((a: string, b: string) => `${a} #${b}`, '');
	return <div className={css.tagInstance}>{SumTagSet}</div>;
};

type Props = {
  noteId: string,
  title: string,
  preview: string,
  updatedAt?: string,
  tags: Array<string>,
  preImage: ?string,
};

const CardInstance = ({
  noteId = 'temp',
  title = '제목없음',
  preview = '내용없음',
  updatedAt = '2017.08.24',
  tags = [],
  preImage,
}: Props) => (
	<Link to={`/card/${noteId}`}>
		<div
			className={css.container}
			role="button"
			tabIndex="-10"
		>
			<div
				className={css.head}
				style={{
					backgroundImage: preImage && `url(${preImage})`,
				}}
			>
				<div className={css.box}>
					<div
						className={css.timestamp}
						style={{
							color: preImage ? '#ffffff' : 'rgb(81, 88, 97)',
							textShadow: preImage ? '0 2px 4px rgba(0, 0, 0, 0.75)' : 'none',
						}}
					>
						{updatedAt}
					</div>
					<div
						className={css.title}
						style={{
							color: preImage ? '#ffffff' : 'rgb(81, 88, 97)',
							textShadow: preImage ? '0 2px 4px rgba(0, 0, 0, 0.75)' : 'none',
						}}
					>
						{title}
					</div>
				</div>
			</div>
			<div className={css.preview}>
				{preview}
			</div>
			<div className={css.tags}>
				{makeTagToElement(tags)}
			</div>
		</div>
	</Link>
);

export default CardInstance;
