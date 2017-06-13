import { pubsub } from '../pubsub/pubsub.js';
import Note from 'database/models/note.model.js';
import Tag from 'database/models/tag.model.js';
import MockData from 'MockData/MockNoteData.js';
export const resolvers = {
	Query: {
		getTagList(obj, args, context) {
      // console.log('tagList', obj, args, context);
			return Tag.find({ userid: args.userId })
        .select('name')
        .exec((err, tag) => {
	console.log('tag', tag);
	return tag;
});
		},

		getNoteList(obj, args, context) {
      // 태그 상관없이 전체 노트 쿼리
      // console.log('getNoteList args', args, context);
			if (!args.tag) {
				return {
					tag: [''],
					totalCount: MockData.length,
				};
			}
      // 특정 태그 찝는 쿼리
			let count = 0;
			MockData.forEach((data) => {
				if (data.tag === args.tag) {
					count++;
				}
			});
			return {
				tag: [''],
				totalCount: count,
			};
		},
	},

	NoteHead: {
		notes(obj, args, context) {
      // console.log('Notehead args', args, context);
			const startPoint = MockData.find(data => data._id.$oid === args.after);
			const result = [];
			const startIndex = MockData.indexOf(startPoint) + 1;
			const endIndex = startIndex + (args.limit ? args.limit : MockData.length);
			for (let i = startIndex; i < endIndex; i++) {
				result.push(MockData[i]);
			}
			if (result.length === 0) {
				return [
					{
						_id: '12341231111a',
						title: '',
						preview: '',
						tag: '',
						image: '',
						publish: false,
						star: 30,
						created_at: '2013/03/29',
						final_modified_at: '2015/03/29',
					},
				];
			}
			return result;
		},

		pageInfo(obj, args, context) {
      // console.log('pageInfo', obj, context);
			return {
				endCursor: '12341231111a',
				isLastPage: false,
			};
		},
	},

	Mutation: {
		autoSave(obj, args, context) {
			console.log('autoSAve!!!!!!!', args);
			return {
				success: true,
			};
		},
		saveThemeMutation(obj, args, context) {
			return {
				success: true,
			};
		},
	},
};
