import Note from '../models/note_model';
import Tag from '../models/tag_model';

const makeNoteCtrl = async (userId) => {
	let result;
	try {
		const newNote = new Note({
			user_id: userId,
			title: '',
			preveiw: '',
			data: '',
			pre_image: '',
			tags: [],
			created_at: Date.now(),
			updated_at: Date.now(),
			is_publish: false,
		});

		await newNote.save();

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

export default makeNoteCtrl;
