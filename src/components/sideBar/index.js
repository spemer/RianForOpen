// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLeftBar } from '../../actions/AppActions';
import parentCss from '../app/app.css';
import css from './sideBar.css';

type Store = {
	App: {
		full: boolean,
		themeColor: string,
		leftBar: boolean
	}
}

const mapToState = ({ App: { full, leftBar, themeColor } }: Store) => ({
	leftBar,
	full,
	themeColor,
});

const mapToDispatch = dispatch => ({
	changeLeftBarDispatch() {
		dispatch(changeLeftBar());
	},
});

type DefaultProps = {
  changeLeftBarDispatch: Function,
  leftBar: boolean,
  full: boolean,
  themeColor: string,
};

type Props = {
  changeLeftBarDispatch: Function,
  leftBar: boolean,
  full: boolean,
  themeColor: string,
};

type State = {
  active: "none" | "mode" | "social" | "trash"
};

@connect(mapToState, mapToDispatch)
class SideBar extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		changeLeftBarDispatch: () => {},
		leftBar: false,
		full: false,
		themeColor: '',
	};

	constructor(props: Props) {
		super(props);
		this.changeActive = this.changeActive.bind(this);
		this.onHoverEvent = this.onHoverEvent.bind(this);
		this.offHoverEvent = this.offHoverEvent.bind(this);
	}

	state = {
		active: 'none',
	};

	onHoverEvent: Function;
	changeActive: Function;
	offHoverEvent: Function;

	changeActive(active: "mode" | "social" | "trash") {
		if (this.state.active !== active) {
			this.setState({
				active,
			});
		}
	}

	onHoverEvent({ currentTarget: { style } }: any) {
		style.marginRight = '4px';
		style.borderLeft = `4px solid ${this.props.themeColor}`;
	}

	offHoverEvent({ currentTarget: { style } }: any) {
		style.marginRight = null;
		style.borderLeft = null;
	}

	render() {
		const { active } = this.state;
		const { leftBar, full, themeColor, changeLeftBarDispatch } = this.props;
		return (
			<div className={parentCss.sideBar} style={{ width: !full ? '56px' : '0px' }}>
				<div className={css.plusButton}>
					<svg width="56" height="64">
						<path fill="none" d="M0 0h56v64H0V0z" />
						<path
							stroke={themeColor}
							fill="none"
							d="M28 12c11.046 0 20 8.954 20 20s-8.954 20-20 20S8 43.046 8 32s8.954-20 20-20z"
						/>
						<path fill={themeColor} fillRule="evenodd" d="M27 24h2v16h-2V24z" />
						<path fill={themeColor} fillRule="evenodd" d="M20 31h16v2H20v-2z" />
					</svg>
				</div>
				<div
					className={css.tagButton}
					onClick={(e) => {
						changeLeftBarDispatch();
					}}
					onMouseOver={this.onHoverEvent}
					onMouseLeave={this.offHoverEvent}
					role="Button"
					tabIndex="-1"
				>
					<svg
						version="1.1"
						x="0px"
						y="0px"
						width="23px"
						height="23px"
						viewBox="0 0 24 24"
						enableBackground="new 0 0 24 24"
						opacity={!leftBar ? '0.38' : '1'}
					>
						<polygon
							fill="none"
							stroke={!leftBar ? '#000000' : themeColor}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeMiterlimit="10"
							points="
				2.6,2.6 2.6,12.5 12.5,22.4 22.4,12.5 12.5,2.6 "
						/>
						<circle
							cx="6.5"
							cy="6.5"
							r="1.5"
							fill={leftBar && themeColor}
						/>
						<line
							fill="none"
							stroke={!leftBar ? '#000000' : themeColor}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeMiterlimit="10"
							x1="15.1"
							y1="15.1"
							x2="10"
							y2="10"
						/>
						<line
							fill="none"
							stroke={!leftBar ? '#000000' : themeColor}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeMiterlimit="10"
							x1="17.3"
							y1="13"
							x2="12.1"
							y2="7.8"
						/>
						<line
							fill="none"
							stroke={!leftBar ? '#000000' : themeColor}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeMiterlimit="10"
							x1="13"
							y1="17.3"
							x2="7.8"
							y2="12.1"
						/>
					</svg>

				</div>
				<div
					className={css.socialButton}
					onClick={() => {
						this.changeActive('social');
					}}
					onMouseOver={this.onHoverEvent}
					onMouseLeave={this.offHoverEvent}
					role="Button"
					tabIndex="-2"
				>
					<svg
						version="1.1"
						x="0px"
						y="0px"
						width="26px"
						height="20px"
						viewBox="0 0 24 24"
						enableBackground="new 0 0 24 24"
						opacity={active !== 'social' ? '0.38' : '1'}
					>
						<path
							fill={active === 'social' && themeColor}
							d="M18,12.6c1.8,0,3.3-1.5,3.3-3.3S19.8,6,18,6s-3.3,1.5-3.3,3.3C14.8,11.2,16.3,12.6,18,12.6z M18,7.4c1.1,0,2,0.9,2,2
	s-0.9,2-2,2s-2-0.9-2-2C16.1,8.3,17,7.4,18,7.4z"
						/>
						<path
							fill={active === 'social' && themeColor}
							d="M18,14.5c-0.7,0-1.6,0.1-2.5,0.4c0.3,0.3,0.5,0.7,0.7,1.2c0.6-0.1,1.3-0.2,1.8-0.2c1.8,0,4.6,0.9,4.6,2v1.5h-6.1V20
	c0,0.3-0.1,0.6-0.2,0.8h7c0.4,0,0.7-0.3,0.7-0.7v-2.3C23.9,15.4,20,14.5,18,14.5z"
						/>
						<path
							fill={active === 'social' && themeColor}
							d="M7.1,11.2c2.2,0,4-1.8,4-4s-1.8-4-4-4s-4,1.8-4,4S4.9,11.2,7.1,11.2z M7.1,4.8c1.3,0,2.4,1.1,2.4,2.4S8.4,9.6,7.1,9.6
	S4.7,8.5,4.7,7.2S5.8,4.8,7.1,4.8z"
						/>
						<path
							fill={active === 'social' && themeColor}
							d="M13.4,15.2c-1.5-1.4-4.5-2-6.2-2c-2.4,0-7.2,1.2-7.2,4v2.6c0,0.4,0.4,0.8,0.8,0.8h11.1h1.8c0.4,0,0.8-0.4,0.8-0.8v-0.4v-2.1
	c0-0.3-0.1-0.7-0.2-0.9C14,15.9,13.7,15.5,13.4,15.2z M11.2,19.1H1.5v-1.8c0-1.3,3.5-2.4,5.6-2.4c1.5,0,3.6,0.5,4.8,1.3
	c0.5,0.3,0.8,0.6,0.8,1v0.1v1.8h-0.3H11.2z"
						/>
					</svg>

				</div>
				<div
					className={css.trashButton}
					onClick={() => {
						this.changeActive('trash');
					}}
					onMouseOver={this.onHoverEvent}
					onMouseLeave={this.offHoverEvent}
					role="Button"
					tabIndex="-3"
				>
					<svg
						version="1.1"
						x="0px"
						y="0px"
						width="18px"
						height="24px"
						viewBox="0 0 24 24"
						enableBackground="new 0 0 24 24"
						opacity={active !== 'trash' ? '0.38' : '1'}
					>
						<path
							fill="none"
							stroke={active !== 'trash' ? '#000000' : themeColor}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeMiterlimit="10"
							d="
	M4.4,20.8c0,1.2,1,2.2,2.2,2.2h10.8c1.2,0,2.2-1,2.2-2.2V7.6H4.4V20.8z"
						/>
						<polygon
							fill="none"
							stroke={active !== 'trash' ? '#000000' : themeColor}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeMiterlimit="10"
							points="
	19.6,2.1 15.8,2.1 14.7,1 9.3,1 8.2,2.1 4.4,2.1 4.4,5.4 19.6,5.4 "
						/>
						<line
							fill="none"
							stroke={active !== 'trash' ? '#000000' : themeColor}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeMiterlimit="10"
							x1="12"
							y1="10.4"
							x2="12"
							y2="20.3"
						/>
						<line
							fill="none"
							stroke={active !== 'trash' ? '#000000' : themeColor}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeMiterlimit="10"
							x1="15.3"
							y1="10.4"
							x2="15.3"
							y2="20.3"
						/>
						<line
							fill="none"
							stroke={active !== 'trash' ? '#000000' : themeColor}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeMiterlimit="10"
							x1="8.7"
							y1="10.4"
							x2="8.7"
							y2="20.3"
						/>
					</svg>

				</div>
			</div>
		);
	}
}

export default SideBar;
