import { AUTO_SAVE_COMPLETE, AUTO_SAVE_REQUEST } from '../constants';

const NoteEditorState = {
	autosave: 'completed',
};

export default function NoteEditor(state = NoteEditorState, action) {
	switch (action.type) {
	case AUTO_SAVE_REQUEST:
		return Object.assign({}, state, {
			autosave: 'progress',
		});
	case AUTO_SAVE_COMPLETE:
		return Object.assign({}, state, {
			autosave: 'completed',
		});
	default:
		return state;
	}
}
