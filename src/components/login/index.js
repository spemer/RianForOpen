// @flow
import React from 'react';
import css from './login.css';
import facebookLogo from '../../../static/icons/fb.jpg';
import naverLogo from '../../../static/icons/naver.png';
import kakaoLogo from '../../../static/icons/kakao.png';

const Login = () => (
	<div id={css.mainLogin}>
		<div className={css.box}>
			<div className={css.title}>
				리안노트에 오신 것을 환영합니다.
			</div>
			<div className={css.subTitle}>
				리안노트는 쉽고 가벼운 웹 노트 어플리케이션입니다.
				<br />
				SNS 계정을 통한 간편 회원가입으로
				<br />
				세상에서 제일 편리한 노트를 경험해보세요.
				<br />
			</div>
			<div className={css.socialTitle}>
				리안과 함께할 계정을 선택해주세요
			</div>
			<div className={css.socialBox}>
				<a className={css.loginButtonForm} href="/auth/facebook">
					<img src={facebookLogo} alt="logo" />
				</a>
				<a className={css.loginButtonForm} href="/auth/naver">
					<img src={naverLogo} alt="logo" />
				</a>
				<a className={css.loginButtonForm} href="/oauth/kakao">
					<img src={kakaoLogo} alt="logo" />
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
