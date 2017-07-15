// @flow
import { CHANGE_FULL_SCREEN, CHANGE_LEFT_BAR, CHANGE_RENDER_TAGS, CHANGE_TIMELINE_LEFT_BAR_TAGS } from '../constants';

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

