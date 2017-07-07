// @flow
import React, { Component } from 'react';
import screenfull from 'screenfull';
import { connect } from 'react-redux';
import searchIcon from 'static/icons/ic-search.svg';
import SearchBox from './searchBox';
import TagSearchBox from './tagSearchBox';
import { fullScreenChange } from '../../actions/AppActions';
import parentCss from '../app/app.css';
import css from './head.css';
import icFullScreenIcon from '../../../static/icons/ic_fullScreen.svg';

const mapToDispatch = dispatch => ({
	changeFullScreenApp(argu) {
		dispatch(fullScreenChange(argu));
	},
});

type DefaultProps = {
  changeFullScreenApp: Function,
  full: boolean,
};

type Props = {
  changeFullScreenApp: Function,
  full: boolean,
};

type State = {
  modeIsTag: false
};

@connect(undefined, mapToDispatch)
class Head extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		changeFullScreenApp: () => {},
		full: false,
	};

	constructor(props: Props) {
		super(props);
		this.screenfull = screenfull;
		this.fullScreen = this.fullScreen.bind(this);
		this.changeSearchMode = this.changeSearchMode.bind(this);
	}

	state = {
		modeIsTag: false,
	};

	componentDidMount() {
		this.screenfull.onchange(() => {
			if (this.screenfull.isFullscreen) {
				this.props.changeFullScreenApp(true);
			} else {
				this.props.changeFullScreenApp(false);
			}
		});
	}

	screefull: any;
	fullScreen: any;
	changeSearchMode: Function;

	fullScreen() {
		if (this.screenfull.enabled) {
			this.screenfull.toggle();
		} else {
      // Ignore or do something else
		}
	}

	changeSearchMode(argu: boolean) {
		this.setState({
			modeIsTag: argu,
		});
	}

	render() {
		const { modeIsTag } = this.state;
		const { full } = this.props;
		return (
			<div className={parentCss.head} style={{ height: !full ? '61px' : '0px' }}>
				<div className={css.container}>
					<img
						className={css.icon}
						src={icFullScreenIcon}
						onClick={this.fullScreen}
						alt="fullscreen"
					/>
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
								stroke={modeIsTag ? '#000000' : '#ff3466'}
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeMiterlimit="10"
								strokeWidth="1.5"
								d="M8.3 5.5h7.4M8.3 9.5h7.4M8.3 13.5h7.4M19 1.5H5v21h8.8l5.2-5.2z"
							/>
							<path
								fill="none"
								stroke={modeIsTag ? '#000000' : '#ff3466'}
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
								stroke={!modeIsTag ? '#000000' : '#ff3466'}
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeMiterlimit="10"
								points="
				2.6,2.6 2.6,12.5 12.5,22.4 22.4,12.5 12.5,2.6 "
							/>
							<circle cx="6.5" cy="6.5" r="1.5" fill={modeIsTag && '#ff3466'} />
							<line
								fill="none"
								stroke={!modeIsTag ? '#000000' : '#ff3466'}
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
								stroke={!modeIsTag ? '#000000' : '#ff3466'}
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
								stroke={!modeIsTag ? '#000000' : '#ff3466'}
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
				</div>
			</div>
		);
	}
}

export default connect(undefined, mapToDispatch)(Head);
