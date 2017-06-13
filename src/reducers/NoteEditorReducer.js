import {
  AUTO_SAVE_COMPLETE,
  AUTO_SAVE_REQUEST,
  THEME_SAVE_CLICK,
  THEME_SAVE_REQUEST,
  THEME_SAVE_COMPLETE,
} from '../constants';

const NoteEditorState = {
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
