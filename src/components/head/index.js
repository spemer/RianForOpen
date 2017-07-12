// @flow
import React, { Component } from 'react';
import screenfull from 'screenfull';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import searchIcon from '../../../static/icons/ic-search.svg';
import profileImageMock from '../../../static/image/thumb-ex-img.png';
import SearchBox from './searchBox';
import TagSearchBox from './tagSearchBox';
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
						{!modeIsTag &&
						<img className={css.searchIc} src={searchIcon} alt="search" />}
						{modeIsTag ? <TagSearchBox /> : <SearchBox />}
					</div>
					<img
						className={css.addNoteIcon}
						src={addNoteIcon}
						alt="addNoteIcon"
					/>
					<div className={css.changeMode}>
						<Link
							className={css.cardButton}
							to="/card"
							style={{
								backgroundColor: pathname === '/card' ? themeColor : 'white',
								color: pathname === '/card' ? 'white' : '#babac0',
							}}
						>
							<p>카드</p>
						</Link>
						<Link
							className={css.noteButton}
							to="/list"
							style={{
								backgroundColor: pathname === '/list' ? themeColor : 'white',
								color: pathname === '/list' ? 'white' : '#babac0',
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
