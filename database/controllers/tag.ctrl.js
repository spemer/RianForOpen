import Note from '../models/note.model.js';
export const saveTag = (userid, tagname, noteid) => new Promise((resolve) => {
	const newNote = new Note({
		userid,
		title: infor.title,
		snippet: infor.snippet,
		tag: infor.tag,
		data: '',
		createdAt: infor.final_modified_at,
		final_modified_at: infor.final_modified_at,
		publish: false,
	});
	newNote.save((err, saveNote) => {
		if (err) throw err;
		resolve();
	});
});

export const updateTag = (userid, tagname, noteid) => newPromise;
