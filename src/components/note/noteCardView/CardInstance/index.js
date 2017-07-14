// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import css from './cardInstance.css';

const makeTagToElement = (tagSet: Array<string>) => {
	const SumTagSet = tagSet.reduce((a: string, b: string) => `${a} #${b}`, '');
	return <p className={css.tagInstance}>{SumTagSet}</p>;
};

type Props = {
  id: string,
  title: string,
  preview: string,
  updatedAt?: string,
  tags: Array<string>,
  isPublish?: boolean,
  like?: number,
  themeColor: string,
  preImage: string,
  changeModalState: Function
};

const CardInstance = ({
  id = 'temp',
  title = '',
  preview = '',
  updatedAt = '2017.08.24',
  tags = [],
  like = 100,
  isPublish = false,
  themeColor = '#ff3466',
  preImage = '',
  changeModalState = () => {},
}: Props) => (
	<Link to={`card:${id}`}>
		<div
			className={css.container}
			onClick={() => {
				changeModalState(true);
			}}
			role="button"
			tabIndex="-10"
		>
			<div
				className={css.head}
				style={{
					backgroundImage: `url(${preImage})`,
				}}
			>
				<div className={css.box}>
					<div
						className={css.timestamp}
						style={{
							color: preImage ? '#ffffff' : 'rgba(0, 0, 0, 0.54)',
							textShadow: preImage ? '0 2px 4px rgba(0, 0, 0, 0.75)' : 'none',
						}}
					>
						{updatedAt}
					</div>
					<div
						className={css.title}
						style={{
							color: preImage ? '#ffffff' : '#353946',
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
			<div className={css.tags} style={{ color: themeColor }}>
				{makeTagToElement(tags)}
			</div>
		</div>
	</Link>
);

export default CardInstance;
