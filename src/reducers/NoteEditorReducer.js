// @flow
import {
  SAVE_REQUEST,
  SAVE_COMPLETE,
  SAVE_REQUEST_CANCELLED,
  DELETE_REQUEST,
  DELETE_COMPLETE,
} from '../constants';


type State = {
  save: boolean,
  deleteNoteState: {
	progress: boolean,
	noteId: ?string
  },
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
	deleteNoteState: {
		progress: false,
		noteId: null,
	},
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
	case SAVE_REQUEST_CANCELLED:
		return Object.assign({}, state, {
			save: false,
		});
	case DELETE_REQUEST:
		return Object.assign({}, state, {
			deleteNoteState: {
				progress: true,
				noteId: action.noteId,
			},
		});
	case DELETE_COMPLETE:
		return Object.assign({}, state, {
			deleteNoteState: {
				progress: false,
				noteId: null,
			},
		});
	default:
		return state;
	}
}
