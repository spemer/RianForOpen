// @flow
import React from 'react';
import css from './isMobile.css';
import rianLogo from '../../../../static/icons/rianLogo.svg';

const isMobile = () => (
	<div id={css.mainLogin}>
		<div className={css.box}>
			<img src={rianLogo} className={css.icon} alt="logo" />
			<div className={css.title}>
				리안노트에 오신 것을 환영합니다.
			</div>
			<div className={css.subTitle}>
				제 인생에서 글쓰기는
				<br />
				제가 믿는 것, 보는 것, 가치 있다고 여기는 것들을
				<br />
				더욱 명확히 하는 훈련입니다
				<br />
				-버락 오바마
			</div>
			<div className={css.socialTitle}>
				죄송합니다.
				<br />
				<br />
				현재 모바일에서는 리안을 사용할 수 없습니다.
				<br />
				<br />
				빠른 시일내에 모바일 버젼으로 찾아뵙도록 하겠습니다.
			</div>
		</div>
	</div>
);

export default isMobile;
