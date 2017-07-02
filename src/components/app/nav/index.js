// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import screenfull from 'screenfull';
import { fullScreenChange } from '../../../actions/AppActions';
import { modeChange } from '../../../actions/NoteActions';
import {
  themeSaveClick,
  changeNoteShow,
  changeNoteIdAndchangeNoteShow,
} from '../../../actions/NoteEditorActions';
import {
  makeNote,
} from '../../../graphqls/NoteEditorGraphQl';
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
	changeNoteShowDispatch(show) {
		dispatch(changeNoteShow(show));
	},
	changeNoteIdAndchangeNoteShowDispatch(noteId, show) {
		dispatch(changeNoteIdAndchangeNoteShow(noteId, show));
	},
});

const makeNoteMutation = graphql(makeNote, {
	options: props => ({
		variables: {
			makeNew: props.makeNew,
		},
		ssr: false,
	}),
	name: 'makeNoteMutate',
	skip: process.env.NODE_ENV === 'development',
});

type DefaultProps = {
  Mode: "List" | "Card",
  full: boolean,
  userId: string,
  changeMode: Function,
  clickThemeSave: Function,
  changeFullScreenApp: Function,
  changeNoteShowDispatch: Function,
  changeNoteIdAndchangeNoteShowDispatch: Function,
  autosave: boolean
};

type Props = {
  Mode: "List" | "Card",
  full: boolean,
  userId: string,
  changeMode: Function,
  clickThemeSave: Function,
  changeFullScreenApp: Function,
  changeNoteShowDispatch: Function,
  changeNoteIdAndchangeNoteShowDispatch: Function,
  autosave: boolean
};

type State = {
  sideBar: boolean,
  starHover: boolean,
  noteListHover: boolean,
  trashHover: boolean
};

@compose(makeNoteMutation)
@connect(mapState, mapDispatch)
class NoteSideBar extends Component<DefaultProps, Props, State> {
	static defaultProps = {
		Mode: 'Card',
		full: false,
		userId: 'none',
		changeMode: () => {},
		clickThemeSave: () => {},
		changeFullScreenApp: () => {},
		makeNoteMutate: () => {},
		changeNoteShowDispatch: () => {},
		changeNoteIdAndchangeNoteShowDispatch: () => {},
		autosave: false,
	};

	constructor(props: Props) {
		super(props);
		this.screenfull = screenfull;
		this.changeSideBar = this.changeSideBar.bind(this);
		this.changeStarHover = this.changeStarHover.bind(this);
		this.changeListHover = this.changeListHover.bind(this);
		this.changeTrashHover = this.changeTrashHover.bind(this);
		this.makeNewNoteChain = this.makeNewNoteChain.bind(this);
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
	makeNewNoteChain: Fucntion;

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

	makeNewNoteChain() {
		const { changeNoteShowDispatch, makeNoteMutate, changeNoteIdAndchangeNoteShowDispatch } = this.props;
		changeNoteIdAndchangeNoteShowDispatch(null, 'MAKE');
		if (process.env.NODE_ENV !== 'development') {
			makeNoteMutate()
			.then((result) => {
				changeNoteIdAndchangeNoteShowDispatch(result.data.makeNote.noteId, 'GET');
			});
		}
	}

	render() {
		const { sideBar } = this.state;
		const {
      Mode,
      full,
      changeMode,
	  changeNoteIdAndchangeNoteShowDispatch,
      clickThemeSave,
      autosave,
      userId,
    } = this.props;
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
						<div className={css.logo} onClick={this.fullScreen} role="button" tabIndex="0">R</div>
					</div>

					<div className={css.changeSideBar} onClick={this.changeSideBar} role="button" tabIndex="-1">
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
								if (Mode === 'List') {
									changeNoteIdAndchangeNoteShowDispatch(null, 'HIDDEN');
								}
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
						<div className={css.plusIcon} onClick={this.makeNewNoteChain} role="button" tabIndex="-2">+</div>
					</div>
					<div className={css.move}>
						<div className={css.border} />
						<div className={css.moveIcon}>N-LIST</div>
						<div className={css.moveIcon}>SOCIAL</div>
					</div>
					{Mode === 'List' &&
					<div className={css.status}>
						<div className={css.border} />
						<div className={css.logo} onClick={clickThemeSave} role="button" tabIndex="-3">
                T
              </div>
						{autosave && <div className={css.logo}>S</div>}
					</div>}
				</div>
				<HoverNav sideBar={sideBar} userId={userId} />
				<NoteTimeline sideBar={sideBar} mode={Mode} userId={userId} />
			</div>
		);
	}
}

export default NoteSideBar;
