// @flow
import { CHANGE_FULL_SCREEN, CHANGE_LEFT_BAR, CHANGE_RENDER_TAGS } from '../constants';

type FullScreenChangeAction = {
	type: CHANGE_FULL_SCREEN,
	full: boolean
}

type ChangeLeftBarAction = {
	type: CHANGE_LEFT_BAR,
}

type ChangeRenderTagsAction = {
	type: CHANGE_RENDER_TAGS,
	tags: Array<string>
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

export function changeRenderTags(tags: Array<string>): ChangeRenderTagsAction {
	return {
		type: CHANGE_RENDER_TAGS,
		tags,
	};
}

