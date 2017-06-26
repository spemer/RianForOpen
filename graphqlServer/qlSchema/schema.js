import { makeExecutableSchema } from 'graphql-tools';
import NoteSchema from './Note/NoteSchema';
import TagSchema from './Tag/TagSchema';
import { resolvers } from '../resolvers/resolvers';

const RootQuery = `
  type Query {
     getTagsByCondition(condition: String userId: ID): TagList
     getAllMyNotePreviews(tags: [String] userId: ID): NoteHead
     getSelectedMyNoteData(noteId: ID!): Note
     getNoteList(userId: ID tags: [String] after: String limit: Int sortby: String): NoteHead
  }
`;

const RootMutation = `
  type Mutation {
    makeNote: Success
    autoSave(noteId: ID! title: String tags:[String] data: String is_publish: Boolean pre_image: String): Success
    saveTheme(_id: ID! tags: [String] themedata: String): Success
  }
`;
const SchemaDefinition = `
  schema {
     query: Query
     mutation: Mutation
  }
`;

const schema = makeExecutableSchema({
	typeDefs: [SchemaDefinition, RootQuery, RootMutation, NoteSchema, TagSchema],
	resolvers,
});
export { schema };
