import Note from '../models/note_model';

const getSelectedMyNoteDataCtrl = async (userId, noteId) => {
	let result;
	if (!noteId) {
		result = {
			_id: '',
			title: '',
			tags: [],
			data: '',
			isPublish: '',
			createdAt: Date.now(),
			updatedAt: Date.now(),
			like: null,
		};
	}
	try {
		const OneNote = await Note.findOne({ _id: noteId })
            .populate({ path: 'tags', select: 'name' })
            .lean()
            .select(
                '_id title tags data isPublish createdAt updatedAt like',
            );
		OneNote.tags = OneNote.tags.map(tag => tag.name);
		result = OneNote;
	} catch (e) {
		console.log('error in getSelectedMyNoteDataCtrl');
		result = {
			_id: '',
			title: '',
			tags: [],
			data: '',
			isPublish: '',
			createdAt: Date.now(),
			updatedAt: Date.now(),
			like: null,
		};
	}
	return result;
};

export default getSelectedMyNoteDataCtrl;
