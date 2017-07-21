import htmlToText from 'html-to-text';
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
			preview: htmlToText.fromString(noteData.data).substring(0, 250),
			preImage: noteData.preImage,
			isPublish: noteData.isPublish,
			updatedAt: Date.now(),
		};

		await Note.update({ _id: noteData.noteId }, { $set: newNoteInfor });

		result = {
			success: true,
			noteId: noteData.noteId,
		};
	} catch (e) {
		console.log(e);
		result = {
			success: false,
			noteId: null,
		};
	}
	return result;
};

export default autoSaveCtrl;
