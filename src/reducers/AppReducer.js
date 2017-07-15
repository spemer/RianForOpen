
// @flow
import { CHANGE_FULL_SCREEN, CHANGE_LEFT_BAR, CHANGE_RENDER_TAGS } from '../constants';

type State = {
	full: boolean,
	themeColor: string,
	leftBar: boolean,
	renderTags: Array<string>
};

type FullScreenChangeAction = {
	type: CHANGE_FULL_SCREEN,
	full: boolean
};

type ChangeLeftBarAction = {
	type: CHANGE_LEFT_BAR,
};

type ChangeRenderTagsAction = {
	type: CHANGE_RENDER_TAGS,
	tags: Array<string>
}

type Action = FullScreenChangeAction | ChangeLeftBarAction | ChangeRenderTagsAction

const ModeState = {
	full: false,
	themeColor: '#0088ff',
	leftBar: true,
	renderTags: [],
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
	case CHANGE_RENDER_TAGS:
		return Object.assign({}, state, {
			renderTags: action.tags,
		});
	default:
		return state;
	}
}
