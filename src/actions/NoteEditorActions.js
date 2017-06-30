// @flow
import {
  AUTO_SAVE_REQUEST,
  AUTO_SAVE_COMPLETE,
  THEME_SAVE_CLICK,
  THEME_SAVE_REQUEST,
  THEME_SAVE_COMPLETE,
  CHANGE_NOTE_ID,
  NOTE_SHOW_CHANGE,
  CHANGE_NOTE_ID_AND_NOTE_SHOW_CHANGE,
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

export function changeNoteId(noteId: string) {
	return {
		type: CHANGE_NOTE_ID,
		noteId,
	};
}

export function changeNoteShow(show: 'GET' | 'MAKE' | 'HIDDEN') {
	return {
		type: NOTE_SHOW_CHANGE,
		show,
	};
}

export function changeNoteIdAndchangeNoteShow(noteId: string, show: 'GET' | 'MAKE' | 'HIDDEN') {
	return {
		type: CHANGE_NOTE_ID_AND_NOTE_SHOW_CHANGE,
		noteId,
		show,
	};
}
