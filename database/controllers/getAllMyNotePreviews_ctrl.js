import Note from '../models/note_model';
import getTagsObjectIDByTagNameCtrl from './getTagsObjectIDByTagName_ctrl';

const getAllMyNotePreviewsCtrl = async (userId, tagList) => {
	let result = [];
	try {
		if (tagList.length === 0) {
			const NoteList = await Note.find({ user_id: userId })
        .populate({ path: 'tags', select: 'name' })
        .lean()
        .select(
          '_id title tags data pre_image preview user_id is_publish created_at updated_at like',
        );
			
			//make object of tag to tagname 
			result = await NoteList.map((note) => {
				note.tags = note.tags.map(tag => tag.name)
				return note
			});
		}
		if (tagList.length > 0) {
			const tagObjectIdList = await getTagsObjectIDByTagNameCtrl(
        userId,
        tagList,
      );
			const NoteList = await Note.find({
				user_id: userId,
				tags: { $all: tagObjectIdList },
			}).select(
        '_id title tags data pre_image preview user_id is_publish created_at updated_at like',
      );

			result = NoteList;
		}
	} catch (e) {
		console.log('error in getTagsByConditionCtrl');
	}
	return result;
};

export default getAllMyNotePreviewsCtrl;
