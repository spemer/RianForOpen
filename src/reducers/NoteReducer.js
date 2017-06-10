import { NOTE_MODE_CHANGE } from '../constants';

const ModeState = {
	mode: 'Card',
};

export default function Note(state = ModeState, action) {
	switch (action.type) {
			case NOTE_MODE_CHANGE:
				return Object.assign({}, state, {
					mode: action.mode,
				});
			default:
				return state;
	}
}
