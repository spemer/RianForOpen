// @flow
import Tag from '../models/tag_model';
import deleteTag from './deleteTag_ctrl';

const getTagsByConditionCtrl = async (userId: string, condition: 'All' | 'Publish' | 'Booked') => {
	let result;
	try {
	// if don't have conditon, select All Tags by UserId
		const emptyTag = [];
		if (condition === 'All') {
			let TagList = await Tag.aggregate([{ $match: { userId } }, { $lookup: { from: 'notes', localField: '_id', foreignField: 'tags', as: 'notes' } }, { $project: { _id: 1, name: 1, howMany: { $size: '$notes' } } }]);
			TagList = TagList.filter((tag) => {
				if (tag.howMany === 0) {
					emptyTag.push(tag.name);
					return false;
				}
				return true;
			});
			deleteTag(userId, emptyTag);
			result = TagList;
		}
	} catch (e) {
		result = [];
		console.log('error in getTagsByConditionCtrl');
		throw e;
	}
	return result;
};

export default getTagsByConditionCtrl;

