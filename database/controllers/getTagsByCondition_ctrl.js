// @flow
import Tag from '../models/tag_model';

const getTagsByConditionCtrl = async (userId: string, condition: 'All' | 'Publish' | 'Booked') => {
	let result;
	try {
	// if don't have conditon, select All Tags by UserId
		if (condition === 'All') {
			const TagList = await Tag.aggregate([{ $match: { userId } }, { $lookup: { from: 'notes', localField: '_id', foreignField: 'tags', as: 'notes' } }, { $project: { _id: 1, name: 1, howMany: { $size: '$notes' } } }]);
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

