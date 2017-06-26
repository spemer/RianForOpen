import Note from '../models/note_model';
import makeTagCtrl from './makeTag_ctrl';

const autoSaveCtrl = async (userId, noteData) => {
	let result;
	try {
        // if tags exits
		let tagObjectIdList = [];
		if (noteData.tags.length > 0) {
			const tagModelList = await makeTagCtrl(userId, noteData.tags);
			tagObjectIdList = tagModelList.map(model => model._id);
		}

		const newNoteInfor = {
			title: noteData.title,
			tags: tagObjectIdList,
			data: noteData.data,
			pre_image: noteData.pre_image,
			is_publish: noteData.is_publish,
		};

		await Note.update({ _id: noteData.noteId }, { $set: newNoteInfor });

		result = {
			success: true,
		};
	} catch (e) {
		result = {
			success: false,
		};
	}
	return result;
};

export default autoSaveCtrl;
