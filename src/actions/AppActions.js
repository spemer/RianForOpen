// @flow
import { CHANGE_FULL_SCREEN, CHANGE_LEFT_BAR } from '../constants';

export function fullScreenChange(data: boolean) {
	return {
		type: CHANGE_FULL_SCREEN,
		data,
	};
}

export function changeLeftBar() {
	return {
		type: CHANGE_LEFT_BAR,
	};
}
