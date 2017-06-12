import { makeExecutableSchema } from 'graphql-tools';
import NoteSchema from './Note/NoteSchema';
import TagSchema from './Tag/TagSchema';
import { resolvers } from '../resolvers/resolvers.js';

const RootQuery = `
  type Query {
     getTagList(userId: ID!): [Tag]
     getNoteList(tag: [String]): NoteHead
  }
`;

const RootMutation = `
  type Mutation {
    autoSave(_id: ID title: String tag:[String] data: String): SaveNote
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
