import {
  AUTO_SAVE_REQUEST,
  AUTO_SAVE_PROGRESS,
  AUTO_SAVE_COMPLETE,
} from '../constants';

export function autoSaveRequest(method) {
	return {
		type: AUTO_SAVE_REQUEST,
		method,
	};
}

export function autoSaveProgress() {
	return {
		type: AUTO_SAVE_PROGRESS,
	};
}

export function autoSaveComplete() {
	return {
		type: AUTO_SAVE_COMPLETE,
	};
}
