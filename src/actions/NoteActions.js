import {
  NOTE_MODE_CHANGE,
} from '../constants';

export function modeChange(mode) {
	return {
		type: NOTE_MODE_CHANGE,
		mode,
	};
}

export function basic() {
	return {

	};
}
