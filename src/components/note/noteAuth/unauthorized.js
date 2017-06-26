// @flow
import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import SignUpModal from './signUp';

import css from './noteAuth.css';
import facebookLogo from './icons/Facebook.svg';
import googleLogo from './icons/Google.svg';
import naverLogo from './icons/naver.svg';
import kakaoLogo from './icons/kakaotalk.svg';

type DefaultProps = {};

type Props = {};

type State = {
	showLogin: boolean,
	modalIsOpen: boolean
};

class Unauthorized extends Component<DefaultProps, Props, State> {
	static defaultProps = {};

	constructor(props: Props) {
		super(props);
		this.hoverLogin = this.hoverLogin.bind(this);
		this.unhoverLogin = this.unhoverLogin.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	state = {
		showLogin: false,
		modalIsOpen: false,
	};

	hoverLogin: Function;
	unhoverLogin: Function;
	openModal: Function;
	closeModal: Function;

	hoverLogin() {
		this.setState({
			showLogin: true,
		});
	}

	unhoverLogin() {
		this.setState({
			showLogin: false,
		});
	}

	openModal() {
		this.setState({ modalIsOpen: true, showLogin: false });
	}

	closeModal() {
		this.setState({ modalIsOpen: false });
	}

	render() {
		return (
			<div
				className={css.loginContainer}
				onMouseOver={this.hoverLogin}
				onMouseOut={this.unhoverLogin}
			>
				<div className={css.icons}>
					<a className={css.facebookButton} href="/auth/facebook">
						<img
							className={css.toolIcon}
							src={facebookLogo}
							// src={!this.state.noteListHover ? noteListIcon : noteListIconHover}
							// onClick={this.props.changeMode}
							// onMouseOver={this.changeListHover}
							// onMouseOut={this.changeListHover}
							alt="facebook"
						/>
					</a>
					<img
						className={css.toolIcon}
						src={googleLogo}
						// src={!this.state.noteListHover ? noteListIcon : noteListIconHover}
						// onClick={this.props.changeMode}
						// onMouseOver={this.changeListHover}
						// onMouseOut={this.changeListHover}
						alt="google"
					/>
					<img
						className={css.toolIcon}
						src={naverLogo}
						// src={!this.state.noteListHover ? noteListIcon : noteListIconHover}
						// onClick={this.props.changeMode}
						// onMouseOver={this.changeListHover}
						// onMouseOut={this.changeListHover}
						alt="naver"
					/>
					<img
						className={css.toolIcon}
						src={kakaoLogo}
						// src={!this.state.noteListHover ? noteListIcon : noteListIconHover}
						// onClick={this.props.changeMode}
						// onMouseOver={this.changeListHover}
						// onMouseOut={this.changeListHover}
						alt="kakao"
					/>
				</div>
				<form className={css.signInForm}>
					<Motion
						style={{
							x: spring(this.state.showLogin ? 120 : 0),
							y: spring(this.state.showLogin ? 1 : 0),
							z: spring(this.state.showLogin ? 14 : 0),
						}}
					>
						{({ x, y, z }) => (
							<input
								className={css.signInId}
								type="text"
								placeholder="ID"
								style={{
									width: `${x}px`,
									opacity: y,
									paddingLeft: `${z}px`,
									paddingRight: `${z}px`,
								}}
							/>
						)}
					</Motion>
					<Motion
						style={{
							x: spring(this.state.showLogin ? 120 : 0),
							y: spring(this.state.showLogin ? 1 : 0),
							z: spring(this.state.showLogin ? 14 : 0),
						}}
					>
						{({ x, y, z }) => (
							<input
								className={css.signInPassword}
								type="password"
								placeholder="PASSWORD"
								style={{
									width: `${x}px`,
									opacity: y,
									paddingLeft: `${z}px`,
									paddingRight: `${z}px`,
								}}
							/>
						)}
					</Motion>
					<Motion
						style={{
							r: spring(this.state.showLogin ? 255 : 191),
							g: spring(this.state.showLogin ? 52 : 191),
							b: spring(this.state.showLogin ? 102 : 191),
						}}
					>
						{({ r, g, b }) => {
							const red = Math.round(r);
							const green = Math.round(g);
							const blue = Math.round(b);

							return (
								<input
									className={css.signIn}
									style={{
										color: `rgb(${red}, ${green}, ${blue})`,
										borderColor: `rgb(${red}, ${green}, ${blue})`,
										// backgroundColor: `rgb(${rgb.r}, ${rgb.r}, ${rgb.r})`,
									}}
									type="submit"
									value="로그인"
								/>
							);
						}}
					</Motion>
				</form>

				<div className={css.signUp} onClick={this.openModal}>
					간편가입
				</div>
				<SignUpModal
					modalIsOpen={this.state.modalIsOpen}
					afterOpenModal={this.afterOpenModal}
					closeModal={this.closeModal}
				/>
				<div className={css.profileButton}>
					<svg width="25px" height="25px" viewBox="0 0 25 25">
						<g
							id="test"
							stroke="none"
							strokeWidth="1"
							fill="none"
							fillRule="evenodd"
						>
							<g
								id="Rian-05"
								transform="translate(-1726.000000, -53.000000)"
								fill="#C1C1C1"
							>
								<g
									id="profile-button"
									transform="translate(1726.000000, 53.000000)"
								>
									<rect id="Rectangle-10" x="0" y="0" width="5" height="5" />
									<rect id="Rectangle-10" x="10" y="0" width="5" height="5" />
									<rect id="Rectangle-10" x="20" y="0" width="5" height="5" />
									<rect id="Rectangle-10" x="0" y="10" width="5" height="5" />
									<rect id="Rectangle-10" x="10" y="10" width="5" height="5" />
									<rect id="Rectangle-10" x="20" y="10" width="5" height="5" />
									<rect id="Rectangle-10" x="0" y="20" width="5" height="5" />
									<rect id="Rectangle-10" x="10" y="20" width="5" height="5" />
									<rect id="Rectangle-10" x="20" y="20" width="5" height="5" />
								</g>
							</g>
						</g>
					</svg>
				</div>
			</div>
		);
	}
}

export default Unauthorized;
