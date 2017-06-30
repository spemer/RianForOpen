import Note from '../models/note_model';

const getSelectedMyNoteDataCtrl = async (userId, noteId) => {
	let result;
	if (!noteId) {
		result = {
			_id: '',
			title: '',
			tags: [],
			data: '',
			is_publish: '',
			created_at: Date.now(),
			updated_at: Date.now(),
			like: null,
		};
	}
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
		result = {
			_id: '',
			title: '',
			tags: [],
			data: '',
			is_publish: '',
			created_at: Date.now(),
			updated_at: Date.now(),
			like: null,
		};
	}
	return result;
};

export default getSelectedMyNoteDataCtrl;
