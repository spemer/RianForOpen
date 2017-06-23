import Tag from '../models/tag_model';

export const makeTagCtrl = async (userId, tagList) => {
	let result = [];
  // tagName must be Array
	for (let i = 0; i < tagList.length; i++) {
		try {
			const tagName = tagList[i];
			const findTag = await Tag.findOne({
				user_id: userId,
				name: tagName,
			});

			if (findTag) {
				result = result.concat(findTag);
			} else {
				const newTag = new Tag({
					user_id: userId,
					name: tagName,
					is_booked: false,
					is_publish: false,
					created_at: Date.now(),
					updated_at: Date.now(),
				});

				const newTagData = await newTag.save();
				result = result.concat(newTagData);
			}
		} catch (e) {
			console.log('error in makeTagCtrl');
			result = [];
			break;
		}
	}
	return result;
};

export default makeTagCtrl;
