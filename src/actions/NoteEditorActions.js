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

type AutoSaveRequestAction = {
	type: AUTO_SAVE_REQUEST,
	method: any
}

type AutoSaveCompleteAction = {
	type: AUTO_SAVE_COMPLETE,
}

type ThemeSaveClickAction = {
	type: THEME_SAVE_CLICK,
}

type ThemeSaveRequestAction = {
	type: THEME_SAVE_REQUEST,
	method: any
}

type ThemeSaveCompleteAction = {
	type: THEME_SAVE_COMPLETE,
}

type ChangeNoteIdAction = {
	type: CHANGE_NOTE_ID,
	noteId: string
}

type ChangeNoteShowAction = {
	type: NOTE_SHOW_CHANGE,
	show: 'GET' | 'MAKE' | 'HIDDEN'
}

type ChangeNoteIdAndchangeNoteShowAction = {
	type: CHANGE_NOTE_ID_AND_NOTE_SHOW_CHANGE,
	noteId: string,
	show: 'GET' | 'MAKE' | 'HIDDEN',
}


export function autoSaveRequest(method: any): AutoSaveRequestAction {
	return {
		type: AUTO_SAVE_REQUEST,
		method,
	};
}

export function autoSaveComplete(): AutoSaveCompleteAction {
	return {
		type: AUTO_SAVE_COMPLETE,
	};
}

export function themeSaveClick(): ThemeSaveClickAction {
	return {
		type: THEME_SAVE_CLICK,
	};
}

export function themeSaveRequest(method: any): ThemeSaveRequestAction {
	return {
		type: THEME_SAVE_REQUEST,
		method,
	};
}

export function themeSaveComplete(): ThemeSaveCompleteAction {
	return {
		type: THEME_SAVE_COMPLETE,
	};
}

export function changeNoteId(noteId: string): ChangeNoteIdAction {
	return {
		type: CHANGE_NOTE_ID,
		noteId,
	};
}

export function changeNoteShow(show: 'GET' | 'MAKE' | 'HIDDEN'): ChangeNoteShowAction {
	return {
		type: NOTE_SHOW_CHANGE,
		show,
	};
}

export function changeNoteIdAndchangeNoteShow(noteId: string, show: 'GET' | 'MAKE' | 'HIDDEN'): ChangeNoteIdAndchangeNoteShowAction {
	return {
		type: CHANGE_NOTE_ID_AND_NOTE_SHOW_CHANGE,
		noteId,
		show,
	};
}
