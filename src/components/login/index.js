// @flow
import React from 'react';
import css from './login.css';
import rianLogo from '../../../static/icons/rianLogo.svg';
import facebookLogo from '../../../static/icons/fb.jpg';
import naverLogo from '../../../static/icons/naver.png';
import kakaoLogo from '../../../static/icons/kakao.png';


const Login = () => (
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
				리안과 함께할 계정을 선택해주세요
			</div>
			<div className={css.socialBox}>
				<a className={css.loginButtonForm} href="/auth/facebook">
					<img src={facebookLogo} className={css.imgIcon} alt="logo" />
				</a>
				<a className={css.loginButtonForm} href="/auth/naver">
					<img src={naverLogo} className={css.imgIcon} alt="logo" />
				</a>
				<a className={css.loginButtonForm} href="/oauth/kakao">
					<img src={kakaoLogo} className={css.imgIcon} alt="logo" />
				</a>
			</div>
			<div className={css.privacy}>
				개인정보관련 정보는 아래링크를 통해 확인하세요
			</div>
			<div className={css.privacyLink}>
				개인정보 보호정책
			</div>
		</div>
	</div>
	);

export default Login;
