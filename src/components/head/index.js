// @flow
import React, { Component } from 'react';
import screenfull from 'screenfull';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import searchIcon from '../../../static/icons/ic-search.svg';
import profileImageMock from '../../../static/image/thumb-ex-img.png';
import SearchBox from './searchBox';
import { fullScreenChange, changeLeftBar } from '../../actions/AppActions';
import addNoteIcon from '../../../static/icons/add-note.png';
import parentCss from '../app/app.css';
import css from './head.css';
import icFullScreenIcon from '../../../static/icons/ic_fullScreen.svg';

type DefaultProps = {
  changeFullScreenApp: Function,
  changeLeftBarDispatch: Function,
  full: boolean,
  themeColor: string,
  pathname: string
};

type Props = {
  changeFullScreenApp: Function,
  changeLeftBarDispatch: Function,
  full: boolean,
  themeColor: string,
  pathname: string
};

type State = {
  modeIsTag: boolean,
  tagOnOff: boolean,
  socialOnOff: boolean,
  trashOnOff: boolean
};

function mapToState({ App: { full, themeColor } }) {
	return {
		full,
		themeColor,
	};
}

function mapToDispatch(dispatch) {
	return {
		changeFullScreenApp(argu: boolean) {
			dispatch(fullScreenChange(argu));
		},
		changeLeftBarDispatch() {
			dispatch(changeLeftBar());
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
		changeLeftBarDispatch: () => {},
		full: false,
		string: '',
		pathname: '/card',
		themeColor: '',
	};

	constructor(props: Props) {
		super(props);
		this.changeSearchMode = this.changeSearchMode.bind(this);
		this.changeSocialState = this.changeSocialState.bind(this);
		this.changeTagState = this.changeTagState.bind(this);
		this.changeTrashState = this.changeTrashState.bind(this);
	}

	state = {
		modeIsTag: false,
		tagOnOff: true,
		socialOnOff: false,
		trashOnOff: false,
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
	changeSocialState: Function;
	changeTagState: Function;
	changeTrashState: Function;

	changeSearchMode(argu: boolean) {
		this.setState({
			modeIsTag: argu,
		});
	}

	changeTagState() {
		this.setState(prevState => ({ tagOnOff: !prevState.tagOnOff }));
		this.props.changeLeftBarDispatch();
	}

	changeSocialState() {
		this.setState(prevState => ({
			socialOnOff: !prevState.socialOnOff,
		}));
	}

	changeTrashState() {
		this.setState(prevState => ({
			trashOnOff: !prevState.trashOnOff,
		}));
	}

	render() {
		const { modeIsTag, tagOnOff, socialOnOff, trashOnOff } = this.state;
		const { full, themeColor, pathname } = this.props;
		return (
			<div
				className={parentCss.head}
				style={{ height: !full ? '48px' : '0px' }}
			>
				<div className={css.container}>
					<div className={css.searchBox}>
						<img className={css.searchIc} src={searchIcon} alt="search" />
						 <SearchBox modeIsTag={modeIsTag} />
					</div>
					<svg
						version="1.1"
						id="Capa_1"
						viewBox="0 0 24 24"
						enableBackground="new 0 0 24 24"
						role="button"
						className={css.addNoteIcon}
						fill={themeColor}
					>
						<path d="M8.7,12.4l-1,3c-0.1,0.3,0,0.6,0.2,0.7c0.1,0.1,0.3,0.2,0.5,0.2c0.1,0,0.2,0,0.2,0l3-1c0.1,0,0.2-0.1,0.3-0.2l6.8-6.8
	c0.6-0.6,0.6-1.6,0-2.2l-0.9-0.9c-0.6-0.6-1.6-0.6-2.2,0l-6.8,6.8C8.8,12.2,8.8,12.3,8.7,12.4z M16.3,8.6l-1-1l1.4-1.4
	c0,0,0,0,0.1,0l0.9,0.9c0,0,0,0.1,0,0.1L16.3,8.6z M14.4,8.7l1,1L11,13.9l-1.4,0.5l0.5-1.4L14.4,8.7z"
						/>
						<path d="M19.2,10.3c-0.4,0-0.8,0.4-0.8,0.8v6.9c0,0.2-0.2,0.4-0.4,0.4H6.1c-0.2,0-0.4-0.2-0.4-0.4V6.1c0-0.2,0.2-0.4,0.4-0.4h6.9
	c0.4,0,0.8-0.4,0.8-0.8S13.4,4,12.9,4H6.1C4.9,4,4,4.9,4,6.1v11.9C4,19.1,4.9,20,6.1,20h11.9c1.1,0,2.1-0.9,2.1-2.1v-6.9
	C20,10.6,19.6,10.3,19.2,10.3z"
						/>
					</svg>
					<div className={css.changeMode}>
						<Link
							className={css.cardButton}
							to="/card:main"
							style={{
								backgroundColor: pathname.slice(0, 5) === '/card' ? themeColor : 'white',
								color: pathname.slice(0, 5) === '/card' ? 'white' : '#babac0',
							}}
						>
							<p>카드</p>
						</Link>
						<Link
							className={css.noteButton}
							to="/list:main"
							style={{
								backgroundColor: pathname.slice(0, 5) === '/list' ? themeColor : 'white',
								color: pathname.slice(0, 5) === '/list' ? 'white' : '#babac0',
							}}
						>
							<p>목록</p>
						</Link>
					</div>
					<div
						className={css.tag}
						onClick={this.changeTagState}
						role="button"
						tabIndex="0"
					>
						<p
							style={{
								color: tagOnOff ? themeColor : 'black',
								opacity: tagOnOff ? '1' : '0.38',
							}}
						>
              태그
            </p>
					</div>
					<div
						className={css.social}
						onClick={this.changeSocialState}
						role="button"
						tabIndex="-1"
					>
						<p
							style={{
								color: socialOnOff ? themeColor : 'black',
								opacity: socialOnOff ? '1' : '0.38',
							}}
						>
              소셜
            </p>
					</div>
					<div
						className={css.trash}
						onClick={this.changeTrashState}
						role="button"
						tabIndex="-5"
					>
						<p
							style={{
								color: trashOnOff ? themeColor : 'black',
								opacity: trashOnOff ? '1' : '0.38',
							}}
						>
              휴지통
            </p>
					</div>
					<div
						className={css.icon}
						onClick={fullScreen}
						alt="fullscreen"
						role="button"
						tabIndex="0"
					>
						<img src={icFullScreenIcon} alt="FullScreen" />
					</div>
					<div className={css.profileBox}>
						<div
							className={css.photo}
							style={{ backgroundImage: `url(${profileImageMock})` }}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Head;
