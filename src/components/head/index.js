// @flow
import React, { Component } from 'react';
import screenfull from 'screenfull';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import searchIcon from '../../../static/icons/ic-search.svg';
import SearchBox from './searchBox';
import TagSearchBox from './tagSearchBox';
import { fullScreenChange } from '../../actions/AppActions';
import parentCss from '../app/app.css';
import css from './head.css';
import icFullScreenIcon from '../../../static/icons/ic_fullScreen.svg';

type DefaultProps = {
  changeFullScreenApp: Function,
  full: boolean,
  themeColor: string,
  pathname: string,
};

type Props = {
  changeFullScreenApp: Function,
  full: boolean,
  themeColor: string,
  pathname: string,
};

type State = {
  modeIsTag: boolean
};

function mapToState({ App: { full, themeColor } }) {
	return { full,
		themeColor,
	};
}

function mapToDispatch(dispatch) {
	return {
		changeFullScreenApp(argu: boolean) {
			dispatch(fullScreenChange(argu));
		},
	};
}

function fullScreen() {
	if (screenfull.enabled) {
		screenfull.toggle();
	} else {
      // Ignore or do something else
	}
}

@connect(mapToState, mapToDispatch)
class Head extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		changeFullScreenApp: () => {},
		full: false,
		string: '',
		pathname: '/card',
		themeColor: '',
	};

	constructor(props: Props) {
		super(props);
		this.changeSearchMode = this.changeSearchMode.bind(this);
	}

	state = {
		modeIsTag: false,
	};

	componentDidMount() {
		screenfull.onchange(() => {
			if (screenfull.isFullscreen) {
				this.props.changeFullScreenApp(true);
			} else {
				this.props.changeFullScreenApp(false);
			}
		});
	}

	changeSearchMode: Function;

	changeSearchMode(argu: boolean) {
		this.setState({
			modeIsTag: argu,
		});
	}

	render() {
		const { modeIsTag } = this.state;
		const { full, themeColor, pathname } = this.props;
		return (
			<div className={parentCss.head} style={{ height: !full ? '61px' : '0px' }}>
				<div className={css.container}>
					<div
						className={css.icon}
						onClick={fullScreen}
						alt="fullscreen"
						role="button"
						tabIndex="0"
					>
						<img
							src={icFullScreenIcon}
							alt="FullScreen"
						/>
					</div>
					<div className={css.searchBox}>
						{ !modeIsTag && <img className={css.searchIc} src={searchIcon} alt="search" /> }
						{ modeIsTag ? <TagSearchBox /> : <SearchBox />}
					</div>
					<div
						className={css.modeButton}
						onClick={() => {
							this.changeSearchMode(false);
						}}
						role="Button"
						tabIndex="0"
					>
						<svg
							width="16px"
							height="26px"
							opacity={modeIsTag ? '0.38' : '1'}
							viewBox="0 0 24 24"
						>
							<path
								fill="none"
								stroke={modeIsTag ? '#000000' : themeColor}
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeMiterlimit="10"
								strokeWidth="1.5"
								d="M8.3 5.5h7.4M8.3 9.5h7.4M8.3 13.5h7.4M19 1.5H5v21h8.8l5.2-5.2z"
							/>
							<path
								fill="none"
								stroke={modeIsTag ? '#000000' : themeColor}
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeMiterlimit="10"
								strokeWidth="1.5"
								d="M13.8 22.5l5.2-5.2h-5.2z"
							/>
						</svg>
					</div>
					<div
						className={css.tagButton}
						onClick={() => {
							this.changeSearchMode(true);
						}}
						role="Button"
						tabIndex="-1"
					>
						<svg
							version="1.1"
							x="0px"
							y="0px"
							width="17px"
							height="17px"
							viewBox="0 0 24 24"
							enableBackground="new 0 0 24 24"
							opacity={!modeIsTag ? '0.38' : '1'}
						>
							<polygon
								fill="none"
								stroke={!modeIsTag ? '#000000' : themeColor}
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeMiterlimit="10"
								points="
				2.6,2.6 2.6,12.5 12.5,22.4 22.4,12.5 12.5,2.6 "
							/>
							<circle cx="6.5" cy="6.5" r="1.5" fill={modeIsTag && themeColor} />
							<line
								fill="none"
								stroke={!modeIsTag ? '#000000' : themeColor}
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
								stroke={!modeIsTag ? '#000000' : themeColor}
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
								stroke={!modeIsTag ? '#000000' : themeColor}
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
					<div className={css.changeMode}>
						<Link className={css.cardButton} to="/card" style={{ backgroundColor: pathname === '/card' ? '#f4f4f4' : 'white', color: pathname === '/card' ? '#515861' : '#babac0' }}>
							<p>카드</p>
						</Link>
						<Link className={css.noteButton} to="/list" style={{ backgroundColor: pathname === '/list' ? '#f4f4f4' : 'white', color: pathname === '/list' ? '#515861' : '#babac0' }}>
							<p>목록</p>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Head;
