import { CHANGE_FULL_SCREEN, CHANGE_LEFT_BAR } from '../constants';

const ModeState = {
	full: false,
	themeColor: '#1ce8b5',
	leftBar: true,
};

export default function App(state = ModeState, action) {
	switch (action.type) {
	case CHANGE_FULL_SCREEN:
		return Object.assign({}, state, {
			full: action.data,
		});
	case CHANGE_LEFT_BAR:
		return Object.assign({}, state, {
			leftBar: !state.leftBar,
		});
	default:
		return state;
	}
}
