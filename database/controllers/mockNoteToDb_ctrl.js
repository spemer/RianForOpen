import Note from '../models/note_model';
import makeNoteCtrl from './makeNote_ctrl';
import makeTagCtrl from './makeTag_ctrl';
import MockData from 'MockData/noteList';
import htmlToText from 'html-to-text';

const mockeNoteToDb = async (userId) => {
	let result;
	for (let i = 0; i < MockData.length; i++) {
		try {
			let title = MockData[i].title;
			let data = MockData[i].data;
			let preview = htmlToText.fromString(data).substring(0, 250);
			let tagList = MockData[i].tags;
			let pre_image = MockData[i].pre_image;
			let tagObjectIdList = [];

			if (tagList) {
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
