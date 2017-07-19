import Note from '../models/note_model';

const getSelectedMyNoteDataCtrl = async (userId, noteId) => {
	let result;
	if (!noteId) throw 'error'
	try {
		const OneNote = await Note.findOne({ _id: noteId })
            .populate({ path: 'tags', select: 'name' })
            .lean()
            .select(
                '_id title tags isPublish preview updatedAt preImage',
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
			isPublish: false,
			updatedAt: Date.now(),
		};
	}
	return result;
};

export default getSelectedMyNoteDataCtrl;
