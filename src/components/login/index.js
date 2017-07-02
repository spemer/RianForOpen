// @ flow
import React from 'react';
import { connect } from 'react-redux';
import css from './login.css';
import facebookLogo from 'static/icons/Facebook.svg';
import googleLogo from 'static/icons/Google.svg';
import naverLogo from 'static/icons/naver.svg';
import kakaoLogo from 'static/icons/kakaotalk.svg';

const mapState = state => ({
	userId: state.User._id,
});

const Login = ({ userId }) => (
	<div id={css.mainLogin}>
		<div className={css.box}>
			<a className={css.loginButtonForm} href="/auth/facebook">
				<img src={facebookLogo} />
			</a>
			<a className={css.loginButtonForm} href="/auth/naver">
				<img src={googleLogo} />
			</a>
			<a className={css.loginButtonForm} href="/auth/naver">
				<img src={naverLogo} />
			</a>
			<a className={css.loginButtonForm} href="/oauth/kakao">
				<img src={kakaoLogo} />
			</a>
		</div>
	</div>
);

export default connect(mapState)(Login);
