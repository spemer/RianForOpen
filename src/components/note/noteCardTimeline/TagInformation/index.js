// @ flow

import React from 'react';
import css from './tagInformation.css';

const TagInformation = ({ noteCount = 0 }: { noteCount: number }) => (
	<div className={css.container}>
		<span className={css['note-count']}>{noteCount}</span>
		<span className={css.standard}>Notes</span>
	</div>
);

export default TagInformation;
