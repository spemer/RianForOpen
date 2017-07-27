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
