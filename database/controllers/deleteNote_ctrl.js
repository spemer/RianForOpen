// @flow
import Note from '../models/note_model';

const deleteNoteCtrl = async (userId: string, noteId: string) => {
	try {
		await Note.findByIdAndRemove(noteId);
		return {
			success: true,
			noteId,
		};
	} catch (e) {
		console.log('error in deleteNoteCtrl');
		return {
			success: false,
			noteId,
		};
	}
};

export default deleteNoteCtrl;
