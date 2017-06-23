import { getMyNoteListInfo } from 'database/controllers/note_ctrl';
import makeNoteCtrl from 'database/controllers/makeNote_ctrl';
import getTagsByConditionCtrl
  from 'database/controllers/getTagsByCondition_ctrl';

export const resolvers = {
	Query: {
		getTagsByCondition(obj, args, context) {
			return {
				condition: args.condition,
			};
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
		async notes(obj, args, context) {
      // console.log('NoteHead', args, context);
			const infor = {
				userId: args.userId ? args.userId : '593e422abfc14bfb57224337',
				tags: args.tags ? args.tags : ['성찬'],
				updatedAt: args.after ? args.after : '2013-08-12T15:02:28.854Z',
				limitCnt: args.limit ? args.limit : 10,
			};
      // console.log('NoteHead infor', infor);
			const result = await getMyNoteListInfo(infor);
      // console.log('getNoteHEad result', result);
			return result.notes;
		},
	},

	TagList: {
		tags(obj, args, context) {
			return getTagsByConditionCtrl(context.userId._id, args.condition);
		},
	},

	Mutation: {
		makeNote(obj, args, context) {
			return makeNoteCtrl(context.userId._id);
		},
		autoSave(obj, args, context) {
      // console.log('autoSAve!!!!!!!', args);
			return {
				success: true,
			};
		},
		saveTheme(obj, args, context) {
			return {
				success: true,
			};
		},
	},
};
