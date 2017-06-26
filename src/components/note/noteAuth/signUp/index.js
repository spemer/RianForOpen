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

type DefaultProps = {
	modalIsOpen: boolean,
	afterOpenModal: Function,
	closeModal: Function
};

type Props = {
	modalIsOpen: boolean,
	afterOpenModal: Function,
	closeModal: Function
};

type State = {
	process: "initial" | "signup" | "welcome",
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
		this.signUpWithEmail = this.signUpWithEmail.bind(this);
		this.resetModal = this.resetModal.bind(this);
	}

	state = {
		process: 'initial',
		facebook: false,
		google: false,
		kakao: false,
		naver: false,
		email: false,
	};

	hover: Function;
	unhover: Function;
	signUpWithEmail: Function;
	resetModal: Function;

	signUpWithEmail() {
		this.setState({
			process: 'signup',
		});
	}

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

	resetModal(close: boolean) {
		this.setState({
			process: 'initial',
		});
		if (close) {
			this.props.closeModal();
		}
	}

	render() {
		let modalContent;
		if (this.state.process === 'initial') {
			modalContent =
				(<div className={css.signUpContent}>
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
							onClick={() => { this.signUpWithEmail(); }}
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
				</div>);
		} else if (this.state.process === 'signup') {
			modalContent = (
				<div className={css.signUpContent}>
					<div className={css.signUpWelcome}>
							RIAN에 오신것을 환영합니다. <br />
							간편 회원가입을 통해 리안의 다양한 기능을 이용해보세요!
					</div>
					<form className={css.signUpForm}>
						<div className={css.signUpFormInput}>
							<span className={css.signUpFormInputText}>Email</span>
							<input
								className={css.signUpFormEmail}
								type="text"
								placeholder="rian@gmail.com"
							/>
						</div>
						<div className={css.signUpFormInput}>
							<span className={css.signUpFormInputText}>Password</span>
							<input
								className={css.signUpFormPassword}
								type="password"
								placeholder="영문, 특수문자 포함 8자리 이상"
								// style={{
								// 	width: `${x}px`,
								// 	opacity: y,
								// 	paddingLeft: `${z}px`,
								// 	paddingRight: `${z}px`,
								// }}
							/>
						</div>
						<input
							className={css.signUpFormSubmitButton}
							// style={{
							// 	color: `rgb(${red}, ${green}, ${blue})`,
							// 	borderColor: `rgb(${red}, ${green}, ${blue})`,
							// 			// backgroundColor: `rgb(${rgb.r}, ${rgb.r}, ${rgb.r})`,
							// }}
							type="submit"
							value="EMAIL 검증하기"
						/>
						<div
							className={css.signUpFormGoBack}
							onClick={() => { this.resetModal(false); }}
						>
							{'<'} Back To Social Sign-Up
						</div>
					</form>
					<div className={css.signUpFooter}>
							개인정보관련 정보는 아래 링크를 통해 확인하세요 <br />
							PRIVACY POLICY
					</div>
				</div>
			);
		}


		return (
			<Modal
				isOpen={this.props.modalIsOpen}
				onAfterOpen={this.props.afterOpenModal}
				onRequestClose={() => { this.resetModal(true); }}
				className={css.signUpModal}
				overlayClassName={css.signUpModalOverlay}
				contentLabel="Example Modal"
			>
				<div>
					<div className={css.signUpHeader}>
						<div className={css.rianLogoWhite}>R</div>
						<div>RIAN</div>
					</div>
					{modalContent}
				</div>
			</Modal>
		);
	}
}

export default signUp;

// <button onClick={this.props.closeModal}>close</button>
