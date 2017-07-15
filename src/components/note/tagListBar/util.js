// @flow
import Hangul from 'hangul-js';
import { toPairs } from 'lodash';

type TagList = {
    name: string,
    _id: string,
}

function makeSortableTag(tagList: Array<TagList>) {
	function isInHangeul(argu) {
		const pattern = /[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]/g;
		return !!pattern.test(argu);
	}
	function isInEnglish(argu) {
		return !argu.match(/[^a-zA-Z]/);
	}

	const korResult = {};
	const engResult = {};
	const etcResult = {};

	tagList.map((tagSet) => {
		const firstname = tagSet.name[0];
    // in korean
		if (isInHangeul(firstname)) {
			const firstLetter = Hangul.disassemble(tagSet.name)[0];
			if (korResult[firstLetter]) {
				korResult[firstLetter].push(tagSet);
				return null;
			}
			korResult[firstLetter] = [tagSet];
			return null;
		}
    // in alphabet
		if (isInEnglish(firstname)) {
			if (engResult[firstname]) {
				engResult[firstname].push(tagSet);
				return null;
			}
			engResult[firstname] = [tagSet];
			return null;
		}
    // etc
		if (etcResult.etc) {
			etcResult.etc.push(tagSet);
			return null;
		}
		etcResult.etc = [tagSet];
		return null;
	});

	const sortedKor = toPairs(korResult).sort((a, b) => {
		if (a[0] > b[0]) return 1;
		if (a[0] < b[0]) return -1;
		return 0;
	});
	const sortedEng = toPairs(engResult).sort((a, b) => {
		if (a[0] > b[0]) return 1;
		if (a[0] < b[0]) return -1;
		return 0;
	});
	const sortedEtc = toPairs(etcResult);

	return {
		sortedKor,
		sortedEng,
		sortedEtc,
	};
}

export default makeSortableTag;
