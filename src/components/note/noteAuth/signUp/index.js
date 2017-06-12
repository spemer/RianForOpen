import React from 'react';
import Modal from 'react-modal';

import css from './signUp.css';
import facebookDefault from '../icons/facebook-only-logo-fill.svg';
import googleDefault from '../icons/google-only-logo-fill.svg';
import naverDefault from '../icons/naver-only-logo-fill.svg';
import kakaoDefault from '../icons/kakaotalk-only-logo-fill.svg';
import emailDefault from '../icons/email-only-logo-fill.svg';
import facebookHover from '../icons/facebook-only-logo-no-fill.svg';
import googleHover from '../icons/google-only-logo-no-fill.svg';
import naverHover from '../icons/naver-only-logo-no-fill.svg';
import emailHover from '../icons/email-only-logo-no-fill.svg';


class signUp extends React.Component {
	constructor() {
	  super();
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
						<div className={`${css.signUpButton} ${css.signUpFacebook}`}>
							<img
								className={css.socialIcon}
								src={facebookDefault}
							// src={!this.state.noteListHover ? noteListIcon : noteListIconHover}
							// onClick={this.props.changeMode}
							// onMouseOver={this.changeListHover}
							// onMouseOut={this.changeListHover}
								alt="facebook"
							/>
							Sign Up With Facebook
						</div>
						<div className={`${css.signUpButton} ${css.signUpGoogle}`}>
							<img
								className={css.socialIcon}
								src={googleDefault}
							// src={!this.state.noteListHover ? noteListIcon : noteListIconHover}
							// onClick={this.props.changeMode}
							// onMouseOver={this.changeListHover}
							// onMouseOut={this.changeListHover}
								alt="google"
							/>
							Sign Up With Google
						</div>
						<div className={`${css.signUpButton} ${css.signUpKakao}`}>
							<img
								className={css.socialIcon}
								src={kakaoDefault}
							// src={!this.state.noteListHover ? noteListIcon : noteListIconHover}
							// onClick={this.props.changeMode}
							// onMouseOver={this.changeListHover}
							// onMouseOut={this.changeListHover}
								alt="kakao"
							/>
							Sign Up With Kakao
						</div>
						<div className={`${css.signUpButton} ${css.signUpNaver}`}>
							<img
								className={css.socialIcon}
								src={naverDefault}
							// src={!this.state.noteListHover ? noteListIcon : noteListIconHover}
							// onClick={this.props.changeMode}
							// onMouseOver={this.changeListHover}
							// onMouseOut={this.changeListHover}
								alt="naver"
							/>
							Sign Up With Naver
						</div>
						<div className={`${css.signUpButton} ${css.signUpEmail}`}>
							<img
								className={css.socialIcon}
								src={emailDefault}
							// src={!this.state.noteListHover ? noteListIcon : noteListIconHover}
							// onClick={this.props.changeMode}
							// onMouseOver={this.changeListHover}
							// onMouseOut={this.changeListHover}
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
