import { CHANGE_FULL_SCREEN } from '../constants';

const ModeState = {
	full: false,
	themeColor: '#ff3466',
};

export default function App(state = ModeState, action) {
	switch (action.type) {
	case CHANGE_FULL_SCREEN:
		return Object.assign({}, state, {
			full: action.data,
		});
	default:
		return state;
	}
}
