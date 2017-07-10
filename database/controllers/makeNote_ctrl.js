import Note from '../models/note_model';

const makeNoteCtrl = async (userId) => {
	let result;
	try {
		const newNote = new Note({
			userId,
			title: '',
			preveiw: '',
			data: '',
			preImage: '',
			tags: [],
			createdAt: Date.now(),
			updatedAt: Date.now(),
			isPublish: false,
		});

		await newNote.save();

		result = {
			success: true,
			noteId: newNote._id,
		};
	} catch (e) {
		result = {
			success: false,
		};
	}
	return result;
};

export default makeNoteCtrl;
