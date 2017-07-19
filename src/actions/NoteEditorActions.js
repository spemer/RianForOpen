// @flow
import {
  SAVE_REQUEST,
  SAVE_COMPLETE,
  MAKE_NEW_REQUEST,
  MAKE_NEW_COMPLETE,
  THEME_SAVE_CLICK,
  THEME_SAVE_REQUEST,
  THEME_SAVE_COMPLETE,
  CHANGE_NOTE_ID,
  NOTE_SHOW_CHANGE,
  CHANGE_NOTE_ID_AND_NOTE_SHOW_CHANGE,
} from '../constants';

type saveRequestAction = {
	type: SAVE_REQUEST,
	method: any
}

type saveCompleteAction = {
	type: SAVE_COMPLETE,
}

type makeNewRuquestAction = {
	type: MAKE_NEW_REQUEST,
}

type makeNewCompleteAction = {
	type: MAKE_NEW_COMPLETE,
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


export function saveRequest(method: any): saveRequestAction {
	return {
		type: SAVE_REQUEST,
		method,
	};
}

export function saveComplete(): saveCompleteAction {
	return {
		type: SAVE_COMPLETE,
	};
}

export function makeNewRequest(): makeNewRuquestAction {
	return {
		type: MAKE_NEW_REQUEST,
	};
}

export function makeNewComplete(): makeNewCompleteAction {
	return {
		type: MAKE_NEW_COMPLETE,
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
