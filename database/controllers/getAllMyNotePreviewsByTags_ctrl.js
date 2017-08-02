import Note from '../models/note_model';
import getTagsObjectIDByTagNameCtrl from './getTagsObjectIDByTagName_ctrl';

const getAllMyNotePreviewsByTagsCtrl = async (userId, tagList, byUpdatedAt, byLatest) => {
	let result = [];
	let sortStandard;
	if (byUpdatedAt && byLatest) {
		sortStandard = {
			updatedAt: -1,
		};
	}
	if (byUpdatedAt && !byLatest) {
		sortStandard = {
			updatedAt: 1,
		};
	}
	if (!byUpdatedAt && byLatest) {
		sortStandard = {
			createdAt: -1,
		};
	}
	if (!byUpdatedAt && !byLatest) {
		sortStandard = {
			createdAt: 1,
		};
	}
	try {
		if (tagList.length === 0) {
			const NoteList = await Note.find({ userId })
        .populate({ path: 'tags', select: 'name' })
        .lean()
		.sort(sortStandard)
        .select(
          '_id title tags preImage preview isPublish createdAt updatedAt',
				);
			// make object of tag to tagname
			result = NoteList.map((note) => {
				note.tags = note.tags.map(tag => tag.name);
				return note;
			});
		}
		if (tagList.length > 0) {
			const tagObjectIdList = await getTagsObjectIDByTagNameCtrl(
				userId,
				tagList,
			);
			if (tagObjectIdList.length !== tagList.length) {
				return [];
			}
			const NoteList = await Note.find({
				userId,
				tags: { $all: tagObjectIdList },
			})
			.populate({ path: 'tags', select: 'name' })
			.lean()
			.sort(sortStandard)
			.select(
				'_id title tags preImage preview isPublish createdAt updatedAt',
			);
			result = NoteList.map((note) => {
				note.tags = note.tags.map(tag => tag.name);
				return note;
			});
		}
	} catch (e) {
		console.log('error in getAllMyNotePreviewsByTagsCtrl ');
	}
	return result;
};

export default getAllMyNotePreviewsByTagsCtrl;
