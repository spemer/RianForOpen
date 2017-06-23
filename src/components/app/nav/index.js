// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import screenfull from 'screenfull';
import { graphql, compose } from 'react-apollo';
import { fullScreenChange } from '../../../actions/AppActions';
import { modeChange } from '../../../actions/NoteActions';
import { themeSaveClick } from '../../../actions/NoteEditorActions';
import { makeNote } from '../../../graphqls/SideBarGraphQl'
import css from './nav.css';
import trashIcon from './icons/TrashIcon.svg';
import trashIconHover from './icons/TrashIcon-hover.svg';
import noteListIcon from './icons/NoteListIcon.svg';
import noteListIconHover from './icons/NoteListIcon-hover.svg';
import star from './icons/Star.svg';
import starHover from './icons/Star-hover.svg';

// <HoverNav/> Component
import HoverNav from './hoverNav';

// <NoteTimeline /> Component
import NoteTimeline from '../../note/noteTimeline';

const makeNoteMutation = graphql(makeNote, {
	options: () => ({
		ssr: true,
	}),
	name: 'makeNote',
	skip: process.env.NODE_ENV === 'development' && true,
});

const mapState = (
  state: {
    App: { full: boolean },
    Note: { mode: "List" | "Card" },
    User: { _id: string },
    NoteEditor: { autosave: boolean }
  },
) => ({
	full: state.App.full,
	Mode: state.Note.mode,
	userId: state.User._id,
	autosave: state.NoteEditor.autosave,
});

const mapDispatch = dispatch => ({
	changeMode(mode: "List" | "Card") {
		dispatch(modeChange(mode));
	},
	clickThemeSave() {
		dispatch(themeSaveClick());
	},
	changeFullScreenApp(argu) {
		dispatch(fullScreenChange(argu));
	},
});

type DefaultProps = {
  Mode: "List" | "Card",
  full: boolean,
  userId: string,
  makeNote: Function,
  changeMode: Function,
  clickThemeSave: Function,
  changeFullScreenApp: Function,
  autosave: boolean
};

type Props = {
  Mode: "List" | "Card",
  full: boolean,
  userId: string,
  makeNote: Function,
  changeMode: Function,
  clickThemeSave: Function,
  changeFullScreenApp: Function,
  autosave: boolean
};

type State = {
  sideBar: boolean,
  starHover: boolean,
  noteListHover: boolean,
  trashHover: boolean
};

@compose(connect(mapState, mapDispatch), makeNoteMutation)
class NoteSideBar extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		Mode: 'Card',
		full: false,
		userId: 'none',
		makeNote: () => {},
		changeMode: () => {},
		clickThemeSave: () => {},
		changeFullScreenApp: () => {},
		autosave: false,
	};

	constructor(props: Props) {
		super(props);
		this.screenfull = screenfull;
		this.changeSideBar = this.changeSideBar.bind(this);
		this.changeStarHover = this.changeStarHover.bind(this);
		this.changeListHover = this.changeListHover.bind(this);
		this.changeTrashHover = this.changeTrashHover.bind(this);
		this.fullScreen = this.fullScreen.bind(this);
	}

	state = {
		sideBar: false,
		starHover: false,
		noteListHover: false,
		trashHover: false,
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
	screenfull: any;
	fullScreen: Function;
	changeSideBar: Function;
	changeStarHover: Function;
	changeListHover: Function;
	changeTrashHover: Function;

	fullScreen() {
		if (this.screenfull.enabled) {
			this.screenfull.toggle();
		} else {
      // Ignore or do something else
		}
	}

	changeSideBar(argu: boolean) {
		if (typeof argu === 'boolean') {
			this.setState({
				sideBar: argu,
			});
		} else {
			this.setState(prevState => ({
				sideBar: !prevState.sideBar,
			}));
		}
	}
	changeStarHover() {
		this.setState((prevState: State) => ({
			starHover: !prevState.starHover,
		}));
	}

	changeListHover() {
		this.setState((prevState: State) => ({
			noteListHover: !prevState.noteListHover,
		}));
	}

	changeTrashHover() {
		this.setState((prevState: State) => ({
			trashHover: !prevState.trashHover,
		}));
	}

	render() {
		const { Mode, full, makeNote, changeMode, clickThemeSave, autosave, userId } = this.props;
		if (full) {
      // 풀스크린 모드일때는 사이드바 없에버림
			return <div />;
		}
		let ModeSelect;
		if (Mode === 'List') {
			ModeSelect = 'Card';
		}
		if (Mode === 'Card') {
			ModeSelect = 'List';
		}
		return (
			<div className={css.nav}>
				<div className={css.menu}>
					<div className={css.head}>
						<div className={css.logo} onClick={this.fullScreen}>R</div>
					</div>

					<div className={css.changeSideBar} onClick={this.changeSideBar}>
            TAG
          </div>
					{this.state.sideBar &&
					<div className={css.sort}>
						<div className={css.how}>ALL</div>
						<div className={css.how}>PUB</div>
						<div
							className={css.how}
							onMouseOver={this.changeStarHover}
							onMouseOut={this.changeStarHover}
						>
							<img
								className={css.howIcon}
								src={!this.state.starHover ? star : starHover}
								alt="alt"
							/>
						</div>
					</div>}
					<div className={css.tool}>
						<div className={css.border} />
						<img
							className={css.toolIcon}
							src={!this.state.noteListHover ? noteListIcon : noteListIconHover}
							onClick={() => {
								this.changeSideBar(true);
								changeMode(ModeSelect);
							}}
							onMouseOver={this.changeListHover}
							onMouseOut={this.changeListHover}
							alt="alt"
						/>
						<img
							className={css.toolIcon}
							src={!this.state.trashHover ? trashIcon : trashIconHover}
							onMouseOver={this.changeTrashHover}
							onMouseOut={this.changeTrashHover}
							alt="alt"
						/>
						<div className={css.plusIcon} onClick={
							makeNote
						}>+</div>
					</div>
					<div className={css.move}>
						<div className={css.border} />
						<div className={css.moveIcon}>N-LIST</div>
						<div className={css.moveIcon}>SOCIAL</div>
					</div>
					{Mode === 'List' &&
					<div className={css.status}>
						<div className={css.border} />
						<div className={css.logo} onClick={clickThemeSave}>
                T
              </div>
						{autosave && <div className={css.logo}>S</div>}
					</div>}
				</div>
				<HoverNav sideBar={this.state.sideBar} />
				<NoteTimeline
					sideBar={this.state.sideBar}
					mode={Mode}
					userId={userId}
				/>
			</div>
		);
	}
}

export default NoteSideBar;
