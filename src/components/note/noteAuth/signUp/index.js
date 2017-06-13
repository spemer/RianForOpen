// @flow
import React, { Component } from 'react';
import Modal from 'react-modal';

import css from './signUp.css';
import facebookDefault from '../icons/facebook-only-logo-fill.svg';
import googleDefault from '../icons/Google-only-logo-fill.svg';
import naverDefault from '../icons/naver-only-logo-fill.svg';
import kakaoDefault from '../icons/kakaotalk-only-logo-fill.svg';
import emailDefault from '../icons/email-only-logo-fill.svg';
import facebookHover from '../icons/facebook-only-logo-no-fill.svg';
import googleHover from '../icons/google-only-logo-no-fill.svg';
import naverHover from '../icons/naver-only-logo-no-fill.svg';
import emailHover from '../icons/email-only-logo-no-fill.svg';

type DefaultProps = {};

type Props = {
	modalIsOpen: Function,
	afterOpenModal: Function,
	closeModal: Function
};

type State = {
	facebook: boolean,
	google: boolean,
	kakao: boolean,
	naver: boolean,
	email: boolean
};

class signUp extends Component<DefaultProps, Props, State> {
	constructor() {
		super();
		this.hover = this.hover.bind(this);
		this.unhover = this.unhover.bind(this);
	}

	state = {
		facebook: false,
		google: false,
		kakao: false,
		naver: false,
		email: false,
	};

	hover: Function;
	unhover: Function;

	hover(social: string) {
		this.setState({
			[social]: true,
		});
	}

	unhover(social: string) {
		this.setState({
			[social]: false,
		});
	}


	render() {
		return (
			<Modal
				isOpen={this.props.modalIsOpen}
				onAfterOpen={this.props.afterOpenModal}
				onRequestClose={this.props.closeModal}
				className={css.signUpModal}
				overlayClassName={css.signUpModalOverlay}
				contentLabel="Example Modal"
			>
				<div className={css.signUpHeader}>
					<div className={css.rianLogoWhite}>R</div>
					<div>RIAN</div>
				</div>
				<div className={css.signUpContent}>
					<div className={css.signUpWelcome}>
            RIAN에 오신것을 환영합니다. <br />
            간편 회원가입을 통해 리안의 다양한 기능을 이용해보세요!
          </div>
					<div className={css.signUpSocial}>
						<div
							className={`${css.signUpButton} ${css.signUpFacebook}`}
							onMouseOver={() => { this.hover('facebook'); }}
							onMouseOut={() => { this.unhover('facebook'); }}
						>
							<img
								className={css.socialIcon}
								src={this.state.facebook ? facebookHover : facebookDefault}
								alt="facebook"
							/>
							Sign Up With Facebook
						</div>
						<div
							className={`${css.signUpButton} ${css.signUpGoogle}`}
							onMouseOver={() => { this.hover('google'); }}
							onMouseOut={() => { this.unhover('google'); }}
						>
							<img
								className={css.socialIcon}
								src={this.state.google ? googleHover : googleDefault}
								alt="google"
							/>
							Sign Up With Google
						</div>
						<div
							className={`${css.signUpButton} ${css.signUpKakao}`}
							// onMouseOver={() => { this.hover('kakao'); }}
							// onMouseOut={() => { this.unhover('kakao'); }}
						>
							<img
								className={css.socialIcon}
								src={kakaoDefault}
								alt="kakao"
							/>
							Sign Up With Kakao
						</div>
						<div
							className={`${css.signUpButton} ${css.signUpNaver}`}
							onMouseOver={() => { this.hover('naver'); }}
							onMouseOut={() => { this.unhover('naver'); }}
						>
							<img
								className={css.socialIcon}
								src={this.state.naver ? naverHover : naverDefault}
								alt="naver"
							/>
							Sign Up With Naver
						</div>
						<div
							className={`${css.signUpButton} ${css.signUpEmail}`}
							onMouseOver={() => { this.hover('email'); }}
							onMouseOut={() => { this.unhover('email'); }}
						>
							<img
								className={css.socialIcon}
								src={this.state.email ? emailHover : emailDefault}
								alt="email"
							/>
							Sign Up With Email
						</div>
					</div>
					<div className={css.signUpFooter}>
            개인정보관련 정보는 아래 링크를 통해 확인하세요 <br />
            PRIVACY POLICY
          </div>
				</div>
			</Modal>
		);
	}
}

export default signUp;

// <button onClick={this.props.closeModal}>close</button>
