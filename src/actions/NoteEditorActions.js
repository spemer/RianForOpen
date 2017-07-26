// @flow
import {
  SAVE_REQUEST,
  SAVE_COMPLETE,
  DELETE_REQUEST,
  DELETE_COMPLETE,
} from '../constants';

type saveRequestAction = {
	type: SAVE_REQUEST,
	method: any
}

type saveCompleteAction = {
	type: SAVE_COMPLETE,
}

type deleteRequestAction = {
	type: DELETE_REQUEST,
}

type deleteCompleteAction = {
	type: DELETE_COMPLETE,
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

export function deleteRequest(noteId: string): deleteRequestAction {
	return {
		type: DELETE_REQUEST,
		noteId,
	};
}

export function deleteComplete(): deleteCompleteAction {
	return {
		type: DELETE_COMPLETE,
	};
}
