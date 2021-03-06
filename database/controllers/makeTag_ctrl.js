import Tag from '../models/tag_model';

const makeTagCtrl = async (userId, tagList) => {
	let result = [];
  // tagName must be Array
	for (let i = 0; i < tagList.length; i += 1) {
		try {
			const tagName = tagList[i];
			const findTag = await Tag.findOne({
				userId,
				name: tagName,
			});

			if (findTag) {
				result = result.concat(findTag);
			} else {
				const newTag = new Tag({
					userId,
					name: tagName,
					isBooked: false,
					isPublish: false,
					createdAt: Date.now(),
					updatedAt: Date.now(),
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
