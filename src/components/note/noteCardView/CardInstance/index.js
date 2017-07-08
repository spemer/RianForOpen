// @flow
import React from 'react';
import css from './cardInstance.css';

const makeTagToElement = (tagSet: Array<string>) => {
	const SumTagSet = tagSet.reduce((a: string, b: string) => `${a} #${b}`, '');
	return <p className={css.tagInstance}>{SumTagSet}</p>;
};

type Props = {
  Id: string,
  title: string,
  preview: string,
  updatedAt?: string,
  tags: Array<string>,
  isPublish?: boolean,
  like?: number,
  themeColor: string,
  preImage: string,
  style: any,
};

const CardInstance = ({
  Id = '',
  title = '',
  preview = '',
  updatedAt = '2017.08.24',
  tags = [],
  like = 100,
  isPublish = false,
  themeColor = '#ff3466',
  preImage = '',
  style = {},
}: Props) => (
	<div className={css.container} style={style}>
		<div
			className={css.head}
			style={{
				backgroundImage: `url(${preImage})`,
			}}
		>
			<div className={css.box}>
				<div className={css.timestamp} style={{ color: preImage ? '#ffffff' : 'rgba(0, 0, 0, 0.54)', textShadow: preImage ? '0 2px 4px rgba(0, 0, 0, 0.75)' : 'none' }}>
					{updatedAt}
				</div>
				<div className={css.title} style={{ color: preImage ? '#ffffff' : '#353946', textShadow: preImage ? '0 2px 4px rgba(0, 0, 0, 0.75)' : 'none' }}>
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
);

export default CardInstance;
