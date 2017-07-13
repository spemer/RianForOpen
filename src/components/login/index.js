// @flow
import React from 'react';
import css from './login.css';
import facebookLogo from '../../../static/icons/Facebook.svg';
import googleLogo from '../../../static/icons/Google.svg';
import naverLogo from '../../../static/icons/naver.svg';
import kakaoLogo from '../../../static/icons/kakaotalk.svg';

const Login = () => (
	<div id={css.mainLogin}>
		<div className={css.box}>
			<a className={css.loginButtonForm} href="/auth/facebook">
				<img src={facebookLogo} alt="logo" />
			</a>
			<a className={css.loginButtonForm} href="/auth/naver">
				<img src={googleLogo} alt="logo" />
			</a>
			<a className={css.loginButtonForm} href="/auth/naver">
				<img src={naverLogo} alt="logo" />
			</a>
			<a className={css.loginButtonForm} href="/oauth/kakao">
				<img src={kakaoLogo} alt="logo" />
			</a>
		</div>
	</div>
	);

export default Login;
