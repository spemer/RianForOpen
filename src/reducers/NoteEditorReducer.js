import { AUTO_SAVE_PROGRESS, AUTO_SAVE_COMPLETE } from '../constants';

const NoteEditorState = {
	autosave: 'Completed',
};

export default function NoteEditor(state = NoteEditorState, action) {
	switch (action.type) {
	case AUTO_SAVE_PROGRESS:
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
