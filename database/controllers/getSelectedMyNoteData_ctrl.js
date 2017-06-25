import Note from '../models/note_model';

const getSelectedMyNoteDataCtrl = async (userId, noteId) => {
	let result;
	try {
		const OneNote = await Note.findOne({ _id: noteId })
            .populate({ path: 'tags', select: 'name' })
            .lean()
            .select(
                '_id title tags data is_publish created_at updated_at like',
            );
		OneNote.tags = OneNote.tags.map(tag => tag.name);
		result = OneNote;
	} catch (e) {
		console.log('error in getSelectedMyNoteDataCtrl');
	}
	return result;
};

export default getSelectedMyNoteDataCtrl;
