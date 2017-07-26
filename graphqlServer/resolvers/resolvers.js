import makeNoteCtrl from '../../database/controllers/makeNote_ctrl';
import getTagsByConditionCtrl from '../../database/controllers/getTagsByCondition_ctrl';
import getAllMyNotePreviewsByTagsCtrl from '../../database/controllers/getAllMyNotePreviewsByTags_ctrl';
import getOneNotePreviewCtrl from '../../database/controllers/getOneNotePreview_ctrl';
import getSelectedMyNoteDataCtrl from '../../database/controllers/getSelectedMyNoteData_ctrl';
import noteSaveCtrl from '../../database/controllers/noteSave_ctrl';
import makeUserNameCtrl from '../../database/controllers/makeUserName_ctrl';
import deleteNoteCtrl from '../../database/controllers/deleteNote_ctrl';

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
			const userId = context.userId ? context.userId._id : args.userId;
			return getOneNotePreviewCtrl(userId, args.noteId);
		},

		getSelectedMyNoteData(obj, args, context) {
			const userId = context.userId ? context.userId._id : args.userId;
			return getSelectedMyNoteDataCtrl(userId, args.noteId);
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
			const userId = context.userId ? context.userId._id : args.userId;
			return makeNoteCtrl(userId);
		},
		deleteNote(obj, args, context) {
			const userId = context.userId ? context.userId._id : args.userId;
			return deleteNoteCtrl(userId, args.noteId);
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
