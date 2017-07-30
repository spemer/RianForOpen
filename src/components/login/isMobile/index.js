// @flow
import React from 'react';
import css from './isMobile.css';

const isMobile = () => (
	<div id={css.mainLogin}>
		<div className={css.box}>
			<div className={css.title}>
                죄송합니다.
                <br />
                현재 모바일에서는 리안을 사용하실 수 없습니다.
			</div>
            <div className={css.subTitle}>
                빠른 시일내에 모바일 리안으로 찾아뵐 수 있도록 노력하겠습니다.
                <br />
			</div>
		</div>
	</div>
);

export default isMobile;
