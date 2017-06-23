import Note from '../models/note_model';
import makeNoteCtrl from './makeNote_ctrl';
import makeTagCtrl from './makeTag_ctrl';
import MockData from 'MockData/noteList';

export const mockeNoteToDb = async (userId) => {
	let result;
	for (let i = 0; i < MockData.length; i++) {
		try {
			let title = MockData[i].title;
			let data = MockData[i].data;
			let tagList = MockData[i].tags;
			let tagObjectIdList = [];

			if (tagList) {
				const tagModelList = await makeTagCtrl(userId, tagList);
				tagObjectIdList = tagModelList.map(model => model._id);
			}

			const newNote = new Note({
				user_id: userId,
				title,
				tags: tagObjectIdList,
				data,
				pre_image: '',
				created_at: Date.now(),
				updated_at: Date.now(),
				is_publish: false,
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
