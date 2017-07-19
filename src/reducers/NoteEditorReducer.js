// @flow
import {
  SAVE_COMPLETE,
  SAVE_REQUEST,
  MAKE_NEW_REQUEST,
  MAKE_NEW_COMPLETE,
  THEME_SAVE_CLICK,
  THEME_SAVE_REQUEST,
  THEME_SAVE_COMPLETE,
} from '../constants';

type State = {
  save: boolean,
  makeNew: boolean,
  themesave: "nothing" | "click" | "progress"
};

// type AutoSaveRequestAction = {
//   type: AUTO_SAVE_REQUEST,
//   method: any
// };

// type AutoSaveCompleteAction = {
//   type: AUTO_SAVE_COMPLETE
// };

// type ThemeSaveClickAction = {
//   type: THEME_SAVE_CLICK
// };

// type ThemeSaveRequestAction = {
//   type: THEME_SAVE_REQUEST,
//   method: any
// };

// type ThemeSaveCompleteAction = {
//   type: THEME_SAVE_COMPLETE
// };

// type ChangeNoteIdAction = {
//   type: CHANGE_NOTE_ID,
//   noteId: string
// };

// type ChangeNoteShowAction = {
//   type: NOTE_SHOW_CHANGE,
//   show: "GET" | "MAKE" | "HIDDEN"
// };

// type ChangeNoteIdAndchangeNoteShowAction = {
//   type: CHANGE_NOTE_ID_AND_NOTE_SHOW_CHANGE,
//   noteId: string,
//   show: "GET" | "MAKE" | "HIDDEN"
// };

// type Action =
//   | AutoSaveRequestAction
//   | AutoSaveCompleteAction
//   | ThemeSaveClickAction
//   | ThemeSaveRequestAction
//   | ThemeSaveCompleteAction
//   | ChangeNoteIdAction
//   | ChangeNoteShowAction
//   | ChangeNoteIdAndchangeNoteShowAction;

const NoteEditorState: State = {
	save: false,
	makeNew: false,
	themesave: 'nothing',
};

export default function NoteEditor(
  state: State = NoteEditorState,
  action: any,
): State {
	switch (action.type) {
	case SAVE_REQUEST:
		return Object.assign({}, state, {
			save: true,
		});
	case SAVE_COMPLETE:
		return Object.assign({}, state, {
			save: false,
		});
	case MAKE_NEW_REQUEST:
		return Object.assign({}, state, {
			makeNew: true,
		});
	case MAKE_NEW_COMPLETE:
		return Object.assign({}, state, {
			makeNew: false,
		});
	case THEME_SAVE_CLICK:
		return Object.assign({}, state, {
			themesave: 'click',
		});
	case THEME_SAVE_REQUEST:
		return Object.assign({}, state, {
			themesave: 'progress',
		});
	case THEME_SAVE_COMPLETE:
		return Object.assign({}, state, {
			themesave: 'nothing',
		});
	default:
		return state;
	}
}
