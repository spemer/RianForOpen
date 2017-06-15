import { CHANGE_FULL_SCREEN } from '../constants';

export function fullScreenChange(data) {
	return {
		type: CHANGE_FULL_SCREEN,
		data,
	};
}

export function basic() {
	return {};
}
