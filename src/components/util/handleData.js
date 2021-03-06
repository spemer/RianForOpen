// @flow
export function makeTagToString(tagsArray: Array<string>): string {
	let tagsString = tagsArray.join('#').replace(/(\s*)/g, '');
	if (tagsString[0] !== '#') {
		tagsString = `#${tagsString}`;
	}
	return tagsString;
}

export function makeStringToTagArray(tags: string): Array<string> {
	let tagsTrim = tags.replace(/(\s*)/g, '');
	if (tagsTrim[0] !== '#') {
		tagsTrim = `#${tagsTrim}`;
	}
	if (tagsTrim[tagsTrim.length - 1] !== '#') {
		tagsTrim = `${tagsTrim}#`;
	}
	const tagsArray = tagsTrim.split('#');
	tagsArray.pop();
	tagsArray.shift();
	const result = [];
	tagsArray.forEach((data) => {
		if (data) {
			result.push(data);
		}
	});
	return result.reduce((a, b) => { if (a.indexOf(b) < 0) a.push(b); return a; }, []);
}


type SelectedSortType = {
	byUpdatedAt: boolean,
	byLatest: boolean,
}

export function sortNoteByStandard(
	notes: Array<any>, SelectedSort: SelectedSortType): Array<any> {
	console.log(notes, SelectedSort);
	if (notes.length === 0) {
		return [];
	}
	if (SelectedSort.byUpdatedAt && SelectedSort.byLatest) {
		return notes.sort((a, b) => {
			if (a.updatedAt > b.updatedAt) {
				return -1;
			} else if (a.updatedAt < b.updatedAt) {
				return 1;
			}
			return 0;
		});
	} else if (SelectedSort.byUpdatedAt && !SelectedSort.byLatest) {
		return notes.sort((a, b) => {
			if (a.updatedAt < b.updatedAt) {
				return -1;
			} else if (a.updatedAt > b.updatedAt) {
				return 1;
			}
			return 0;
		});
	} else if (!SelectedSort.byUpdatedAt && SelectedSort.byLatest) {
		return notes.sort((a, b) => {
			if (a.createdAt > b.createdAt) {
				return -1;
			} else if (a.updatedAt < b.updatedAt) {
				return 1;
			}
			return 0;
		});
	} else if (!SelectedSort.byUpdatedAt && !SelectedSort.byLatest) {
		return notes.sort((a, b) => {
			if (a.createdAt < b.createdAt) {
				return -1;
			} else if (a.updatedAt > b.updatedAt) {
				return 1;
			}
			return 0;
		});
	}
	return [];
}
