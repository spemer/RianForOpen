// @flow
import {
  CHANGE_FULL_SCREEN,
  CHANGE_LEFT_BAR,
  CHANGE_RENDER_TAGS,
  CHANGE_TIMELINE_LEFT_BAR_TAGS,
  CHANGE_THEME_COLOR,
  CHANGE_NOTE_PREVEW_SORT,
} from '../constants';

type State = {
	full: boolean,
	themeColor: string,
	leftBar: boolean,
	timelineLeftBar: boolean,
	renderTags: Array<string>,
	notePreviewSort: {
		byUpdatedAt: boolean,
		byLatest: boolean,
	},
};

// type FullScreenChangeAction = {
//   type: CHANGE_FULL_SCREEN,
//   full: boolean
// };

// type ChangeLeftBarAction = {
//   type: CHANGE_LEFT_BAR
// };

// type ChangeRenderTagsAction = {
//   type: CHANGE_RENDER_TAGS,
//   tags: Array<string>
// };

// type changeTimelineLeftBarAction = {
//   type: CHANGE_TIMELINE_LEFT_BAR_TAGS
// };

// type Action =
//   | FullScreenChangeAction
//   | ChangeLeftBarAction
//   | ChangeRenderTagsAction
//   | changeTimelineLeftBarAction;

const ModeState = {
	full: false,
	themeColor: '#0088ff',
	timelineLeftBar: true,
	leftBar: true,
	renderTags: [],
	notePreviewSort: {
		byUpdatedAt: true,
		byLatest: true,
	},
};

export default function App(state: State = ModeState, action: any): State {
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
			timelineLeftBar: true,
		});
	case CHANGE_TIMELINE_LEFT_BAR_TAGS:
		return Object.assign({}, state, {
			timelineLeftBar: !state.timelineLeftBar,
		});
	case CHANGE_THEME_COLOR:
		return Object.assign({}, state, {
			themeColor: action.themeColor,
		});
	case CHANGE_NOTE_PREVEW_SORT:
		return Object.assign({}, state, {
			notePreviewSort: {
				byUpdatedAt: action.byUpdatedAt,
				byLatest: action.byLatest,
			},
		});
	default:
		return state;
	}
}
