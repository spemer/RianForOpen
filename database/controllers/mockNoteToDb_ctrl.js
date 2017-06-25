import Note from '../models/note_model';
import makeNoteCtrl from './makeNote_ctrl';
import makeTagCtrl from './makeTag_ctrl';
import MockData from 'MockData/noteList';
import htmlToText from 'html-to-text';

const mockeNoteToDb = async (userId) => {
	let result;
	for (let i = 0; i < MockData.length; i++) {
		try {
			const title = MockData[i].title;
			const data = MockData[i].data;
			const preview = htmlToText.fromString(data).substring(0, 250);
			const tagList = MockData[i].tags;
			const pre_image = MockData[i].pre_image;
			let tagObjectIdList = [];

			if (tagList.length > 0) {
				const tagModelList = await makeTagCtrl(userId, tagList);
				tagObjectIdList = tagModelList.map(model => model._id);
			}
			const newNote = new Note({
				user_id: userId,
				title,
				preview,
				data,
				pre_image,
				created_at: Date.now(),
				updated_at: Date.now(),
				is_publish: false,
				tags: tagObjectIdList,
			});

			await newNote.save();
		} catch (e) {
			console.log('error in makeMokeNoteCtrl');
			result = {
				success: false,
			};
			break;
		}
	}
	return result;
};

export default mockeNoteToDb;
