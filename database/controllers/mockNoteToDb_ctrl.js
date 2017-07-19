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
			const preImage = MockData[i].preImage;
			let tagObjectIdList = [];
			if (tagList.length > 0) {
				const tagModelList = await makeTagCtrl(userId, tagList);
				tagObjectIdList = tagModelList.map(model => model._id);
			}
			const newNote = new Note({
				userId,
				title,
				preview,
				data,
				preImage,
				createdAt: Date.now(),
				updatedAt: Date.now(),
				isPublish: false,
				isBooked: false,
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
