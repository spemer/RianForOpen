// @flow
import React from 'react';
import css from './cardInstance.css';

const makeTagToElement = (tagSet: Array<string>) => {
	const SumTagSet = tagSet.reduce((a: string, b: string) => `${a} #${b}`, '');
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
  themeColor: string,
  pre_image: string,
  style: any,
};

const CardInstance = ({
  _id = '',
  title = '',
  preview = '',
  updated_at = '2017.08.24',
  tags = [],
  like = 100,
  is_publish = false,
  themeColor = '#ff3466',
  pre_image = '',
  style = {},
}: Props) => (
	<div className={css.container} style={style}>
		<div
			className={css.head}
			style={{
				backgroundImage: `url(${pre_image})`,
			}}
		>
			<div className={css.box}>
				<div className={css.timestamp} style={{ color: pre_image ? '#ffffff' : 'rgba(0, 0, 0, 0.54)', textShadow: pre_image ? '0 2px 4px rgba(0, 0, 0, 0.75)' : 'none' }}>
					{updated_at}
				</div>
				<div className={css.title} style={{ color: pre_image ? '#ffffff' : '#353946', textShadow: pre_image ? '0 2px 4px rgba(0, 0, 0, 0.75)' : 'none' }}>
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
);

export default CardInstance;
