import Tag from '../models/tag_model';

const getTagsObjectIDByTagNameCtrl = async (userId, tagNameList) => {
	let result = [];
	try {
		result = await Tag.find({ userId, name: { $in: tagNameList } }).lean().distinct('_id')	
	} catch (e) {
		console.log('error in getTagsObjectIDByTagNameCtrl');
	}
	return result;
};

export default getTagsObjectIDByTagNameCtrl;
