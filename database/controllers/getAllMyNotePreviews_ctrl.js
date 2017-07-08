import Note from '../models/note_model';
import getTagsObjectIDByTagNameCtrl from './getTagsObjectIDByTagName_ctrl';

const getAllMyNotePreviewsCtrl = async (userId, tagList) => {
	let result = [];
	try {
		if (tagList.length === 0) {
			const NoteList = await Note.find({ userId: userId })
        .populate({ path: 'tags', select: 'name' })
        .lean()
				.sort({ updatedAt: -1 })
        .select(
          '_id title tags data preImage preview userId isPublish createdAt updatedAt like',
        );

			// make object of tag to tagname
			result = NoteList.map((note) => {
				note.tags = note.tags.map(tag => tag.name);
				return note;
			});
		}
		if (tagList.length > 0) {
			const tagObjectIdList = await getTagsObjectIDByTagNameCtrl(
        userId,
        tagList,
      );
			const NoteList = Note.find({
				userId: userId,
				tags: { $all: tagObjectIdList },
			}).select(
        '_id title tags data preImage preview userId isPublish createdAt updatedAt like',
      );

			result = NoteList;
		}
	} catch (e) {
		console.log('error in getTagsByConditionCtrl');
	}
	return result;
};

export default getAllMyNotePreviewsCtrl;
