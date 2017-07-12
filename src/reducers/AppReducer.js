
// @flow
import { CHANGE_FULL_SCREEN, CHANGE_LEFT_BAR } from '../constants';

type State = {
	full: boolean,
	themeColor: string,
	leftBar: boolean
};

type FullScreenChangeAction = {
	type: CHANGE_FULL_SCREEN,
	full: boolean
};

type ChangeLeftBarAction = {
	type: CHANGE_LEFT_BAR,
};

type Action = FullScreenChangeAction | ChangeLeftBarAction;

const ModeState = {
	full: false,
	themeColor: '#0088ff',
	leftBar: true,
};

export default function App(state: State = ModeState, action: Action): State {
	switch (action.type) {
	case CHANGE_FULL_SCREEN:
		return Object.assign({}, state, {
			full: action.full,
		});
	case CHANGE_LEFT_BAR:
		return Object.assign({}, state, {
			leftBar: !state.leftBar,
		});
	default:
		return state;
	}
}
