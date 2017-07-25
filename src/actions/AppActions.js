// @flow
import { CHANGE_FULL_SCREEN, CHANGE_LEFT_BAR, CHANGE_RENDER_TAGS, CHANGE_TIMELINE_LEFT_BAR_TAGS, CHANGE_THEME_COLOR } from '../constants';

type FullScreenChangeAction = {
	type: CHANGE_FULL_SCREEN,
	full: boolean
}

type ChangeLeftBarAction = {
	type: CHANGE_LEFT_BAR
}

type ChangeRenderTagsAction = {
	type: CHANGE_RENDER_TAGS,
	tags: Array<string>
}

type changeTimelineLeftBarAction = {
	type: CHANGE_TIMELINE_LEFT_BAR_TAGS
}

type changeThemeColorAction = {
	type: CHANGE_THEME_COLOR,
}

export function fullScreenChange(full: boolean): FullScreenChangeAction {
	return {
		type: CHANGE_FULL_SCREEN,
		full,
	};
}

export function changeLeftBar(): ChangeLeftBarAction {
	return {
		type: CHANGE_LEFT_BAR,
	};
}


export function changeTimelineLeftBar(): changeTimelineLeftBarAction {
	return {
		type: CHANGE_TIMELINE_LEFT_BAR_TAGS,
	};
}

export function changeRenderTags(tags: Array<string>): ChangeRenderTagsAction {
	return {
		type: CHANGE_RENDER_TAGS,
		tags,
	};
}

export function changeThemeColor(themeColor: string): changeThemeColorAction {
	return {
		type: CHANGE_THEME_COLOR,
		themeColor,
	};
}

