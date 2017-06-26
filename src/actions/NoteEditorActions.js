import {
  AUTO_SAVE_REQUEST,
  AUTO_SAVE_COMPLETE,
  THEME_SAVE_CLICK,
  THEME_SAVE_REQUEST,
  THEME_SAVE_COMPLETE,
  CHANGE_NOTE_ID,
} from '../constants';

export function autoSaveRequest(method) {
	return {
		type: AUTO_SAVE_REQUEST,
		method,
	};
}

export function autoSaveComplete() {
	return {
		type: AUTO_SAVE_COMPLETE,
	};
}

export function themeSaveClick() {
	return {
		type: THEME_SAVE_CLICK,
	};
}

export function themeSaveRequest(method) {
	return {
		type: THEME_SAVE_REQUEST,
		method,
	};
}

export function themeSaveComplete() {
	return {
		type: THEME_SAVE_COMPLETE,
	};
}

export function changeNoteId(noteId) {
	return {
		type: CHANGE_NOTE_ID,
		noteId,
	};
}
