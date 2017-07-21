import { getMyNoteListInfo } from '../../database/controllers/note_ctrl';
import makeNoteCtrl from '../../database/controllers/makeNote_ctrl';
import getTagsByConditionCtrl from '../../database/controllers/getTagsByCondition_ctrl';
import getAllMyNotePreviewsByTagsCtrl from '../../database/controllers/getAllMyNotePreviewsByTags_ctrl';
import getOneNotePreviewCtrl from '../../database/controllers/getOneNotePreview_ctrl';
import getSelectedMyNoteDataCtrl from '../../database/controllers/getSelectedMyNoteData_ctrl';
import noteSaveCtrl from '../../database/controllers/noteSave_ctrl';
import makeUserNameCtrl from '../../database/controllers/makeUserName_ctrl';

export const resolvers = {
	Query: {
		getTagsByCondition(obj, args, context) {
			return {
				condition: args.condition,
			};
		},

		getAllMyNotePreviewsByTags(obj, args, context) {
			return {
				tags: args.tags,
			};
		},

		notePreviewUpdate(obj, args, context) {
			const userId = context.userId ? context.userId._id : '';
			return getOneNotePreviewCtrl(userId, args.noteId);
		},

		getSelectedMyNoteData(obj, args, context) {
			const userId = context.userId ? context.userId._id : '';
			return getSelectedMyNoteDataCtrl(userId, args.noteId);
		},

		async getNoteList(obj, args, context) {
      // console.log('getNoteList', args, context);
			const infor = {
				userId: args.userId ? args.userId : '593e422abfc14bfb57224337',
				tags: args.tags ? args.tags : ['성찬'],
				updatedAt: args.after ? args.after : '2013-08-12T15:02:28.854Z',
				limitCnt: args.limit ? args.limit : 10,
			};
      // console.log('getNoteList Infor', infor);
			const result = await getMyNoteListInfo(infor);
      // console.log('getNoteList result', result);
			return {
				tags: args.tags,
				totalCount: result.totalCount,
				hasNext: result.hasNext,
				cursor: result.cursor,
			};
		},
	},

	NoteHead: {
		notes(obj, args, context) {
			const userId = context.userId ? context.userId._id : args.userId;
			return getAllMyNotePreviewsByTagsCtrl(userId, args.tags);
		},
	},

	TagList: {
		tags(obj, args, context) {
			const userId = context.userId ? context.userId._id : args.userId;
			return getTagsByConditionCtrl(userId, args.condition);
		},
	},

	Mutation: {
		makeUserName(obj, args, context) {
			const userId = context.userId ? context.userId._id : args.userId;
			return makeUserNameCtrl(userId, args.userName);
		},
		makeNote(obj, args, context) {
			return makeNoteCtrl(context.userId._id);
		},
		noteSave(obj, args, context) {
      // console.log('noteSave!!!!!!!', args);
			return noteSaveCtrl(context.userId._id, args);
		},
		saveTheme(obj, args, context) {
			return {
				success: true,
			};
		},
	},
};
