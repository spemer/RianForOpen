// @flow
import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

import css from './noteAuth.css';
import facebookLogo from './icons/Facebook.svg';
import googleLogo from './icons/Google.svg';
import naverLogo from './icons/naver.svg';
import kakaoLogo from './icons/kakaotalk.svg';

type DefaultProps = {};

type Props = {};

type State = {};

class Authorized extends Component<DefaultProps, Props, State> {
	static defaultProps = {};

	constructor(props: Props) {
		super(props);
		console.log('AUTH USER PROPS: ', props.User);
	}

	render() {
		return (
			<div className={css.loginContainer}>
				<a className={css.signOut} href="/auth/signout">
          로그아웃
        </a>
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

export default Authorized;
