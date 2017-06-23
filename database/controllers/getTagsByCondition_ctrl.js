import Tag from '../models/tag_model';

export const getTagsByConditionCtrl = async (userId, condition) => {
	let result = [];
	try {
    // if don't have conditon, select All Tags by UserId
		if (condition === 'All') {
			const TagList = await Tag.find({
				user_id: userId,
			}).select('name');
			result = TagList;
		}
	} catch (e) {
		console.log('error in getTagsByConditionCtrl');
	}
	return result;
};

export default getTagsByConditionCtrl;
