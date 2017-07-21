import { makeExecutableSchema } from 'graphql-tools';
import UserSchema from './User/UserSchema';
import NoteSchema from './Note/NoteSchema';
import TagSchema from './Tag/TagSchema';
import { resolvers } from '../resolvers/resolvers';

const RootQuery = `
  type Query {
     getTagsByCondition(condition: String userId: ID): TagList
     getAllMyNotePreviewsByTags(tags: [String] userId: ID): NoteHead
     notePreviewUpdate(noteId: ID!): Note
     getSelectedMyNoteData(noteId: ID!): MyOneNote
     getNoteList(userId: ID tags: [String] after: String limit: Int sortby: String): NoteHead
  }
`;

const RootMutation = `
  type Mutation {
    makeUserName(userId: ID userName: String!): makeUserName
    makeNote: MakeNoteSuccess
    noteSave(noteId: ID! title: String tags:[String] data: String isBooked: Boolean isPublish: Boolean preImage: String): Success
    saveTheme(tags: [String] themedata: String): Success
  }
`;
const SchemaDefinition = `
  schema {
     query: Query
     mutation: Mutation
  }
`;

const schema = makeExecutableSchema({
	typeDefs: [SchemaDefinition, RootQuery, RootMutation, UserSchema, NoteSchema, TagSchema],
	resolvers,
});
export { schema };
