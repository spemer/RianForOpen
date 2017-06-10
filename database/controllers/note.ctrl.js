import Note from '../models/note.model.js';
import Tag from '../models/tag.model.js';
export const saveNote = (userid, infor) => new Promise((resolve) => {
	const newNote = new Note({
		userid,
		title: infor.title,
		snippet: infor.snippet,
		tag: infor.tag,
		data: '',
		created_at: infor.final_modified_at,
		final_modified_at: infor.final_modified_at,
		publish: false,
	});
	newNote.save((err, saveNote) => {
		if (err) throw err;
		if (!Array.isArray(infor.tag)) {
				// 일단 태그가 있는지 없는지 확인
			Tag.findOne({ name: infor.tag }, (err, doc) => {
					// 없으면 만들어줌
				if (!doc) {
					const newTag = new Tag({
						userid,
						notes: [saveNote._id],
						name: infor.tag,
					});
					newTag.save((err, newTag) => {
						resolve();
					});
				}
					// 있으면 업데이트
				if (doc) {
					Tag.update({ name: infor.tag }, { $push: { notes: saveNote._id } }, (err, tag) => {
						console.log('tag', tag);
						resolve();
					});
				}
			});
			resolve();
		} else {
				// 태그가 여러개일 경우
			for (let i = 0; i < infor.tag.length; i++) {
				Tag.findOne({ name: infor.tag[i] }, (err, doc) => {
						// 없으면 만들어줌
					if (!doc) {
						const newTag = new Tag({
							userid,
							notes: [saveNote._id],
							name: infor.tag[i],
						});
						newTag.save((err, newTag) => {
							resolve();
						});
					}
						// 있으면 업데이트
					if (doc) {
						Tag.update({ name: infor.tag[i] }, { $push: { notes: saveNote._id } }, (err, tag) => {
							console.log('tag', tag);
							resolve();
						});
					}
				});
			}
			resolve();
		}
	});
});
