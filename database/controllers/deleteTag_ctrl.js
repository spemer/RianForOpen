import Tag from '../models/tag_model';

const deleteTagCtrl = (userId, tagNameList) => tagNameList.map(async (tagName) => {
	const deleteTag = await Tag.remove({ userId, name: tagName });
	return deleteTag;
});

export default deleteTagCtrl;
