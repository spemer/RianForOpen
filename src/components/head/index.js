// @ flow
import React from 'react';
import parentCss from '../app/app.css';
import css from './head.css';
import icFullScreenIcon from '../../../static/icons/ic_fullScreen.svg';

const Head = () => (
	<div className={parentCss.head}>
		<div className={css.container}>
			<img className={css.icon} src={icFullScreenIcon} />
		</div>
	</div>
);

export default Head;
