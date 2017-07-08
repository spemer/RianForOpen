// @flow
import {
  AUTO_SAVE_COMPLETE,
  AUTO_SAVE_REQUEST,
  THEME_SAVE_CLICK,
  THEME_SAVE_REQUEST,
  THEME_SAVE_COMPLETE,
  CHANGE_NOTE_ID,
  NOTE_SHOW_CHANGE,
  CHANGE_NOTE_ID_AND_NOTE_SHOW_CHANGE,
} from '../constants';

type State = {
  show: "GET" | "MAKE" | "HIDDEN",
  noteId: string,
  autosave: boolean,
  themesave: "nothing" | "click" | "progress"
};

type AutoSaveRequestAction = {
  type: AUTO_SAVE_REQUEST,
  method: any
};

type AutoSaveCompleteAction = {
  type: AUTO_SAVE_COMPLETE
};

type ThemeSaveClickAction = {
  type: THEME_SAVE_CLICK
};

type ThemeSaveRequestAction = {
  type: THEME_SAVE_REQUEST,
  method: any
};

type ThemeSaveCompleteAction = {
  type: THEME_SAVE_COMPLETE
};

type ChangeNoteIdAction = {
  type: CHANGE_NOTE_ID,
  noteId: string
};

type ChangeNoteShowAction = {
  type: NOTE_SHOW_CHANGE,
  show: "GET" | "MAKE" | "HIDDEN"
};

type ChangeNoteIdAndchangeNoteShowAction = {
  type: CHANGE_NOTE_ID_AND_NOTE_SHOW_CHANGE,
  noteId: string,
  show: "GET" | "MAKE" | "HIDDEN"
};

type Action =
  | AutoSaveRequestAction
  | AutoSaveCompleteAction
  | ThemeSaveClickAction
  | ThemeSaveRequestAction
  | ThemeSaveCompleteAction
  | ChangeNoteIdAction
  | ChangeNoteShowAction
  | ChangeNoteIdAndchangeNoteShowAction;

const NoteEditorState: State = {
	show: 'HIDDEN',
	noteId: '',
	autosave: false,
	themesave: 'nothing',
};

export default function NoteEditor(
  state: State = NoteEditorState,
  action: Action,
): State {
	switch (action.type) {
	case AUTO_SAVE_REQUEST:
		return Object.assign({}, state, {
			autosave: true,
		});
	case AUTO_SAVE_COMPLETE:
		return Object.assign({}, state, {
			autosave: false,
		});
	case CHANGE_NOTE_ID:
		return Object.assign({}, state, {
			noteId: action.noteId,
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
	case NOTE_SHOW_CHANGE:
		return Object.assign({}, state, {
			show: action.show,
		});
	case CHANGE_NOTE_ID_AND_NOTE_SHOW_CHANGE:
		return Object.assign({}, state, {
			noteId: action.noteId,
			show: action.show,
		});
	default:
		return state;
	}
}
