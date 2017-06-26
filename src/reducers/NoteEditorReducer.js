import {
  AUTO_SAVE_COMPLETE,
  AUTO_SAVE_REQUEST,
  THEME_SAVE_CLICK,
  THEME_SAVE_REQUEST,
  THEME_SAVE_COMPLETE,
  CHANGE_NOTE_ID,
} from '../constants';

const NoteEditorState = {
	noteId: '',
	autosave: false,
	themesave: 'nothing',
};

export default function NoteEditor(state = NoteEditorState, action) {
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
	default:
		return state;
	}
}
