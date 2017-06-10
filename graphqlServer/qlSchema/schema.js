import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import NoteSchema from './Note/NoteSchema';
import TagSchema from './Tag/TagSchema';
import { resolvers } from '../resolvers/resolvers.js';

const RootQuery = `
  type Query {
     getTagList(userId: ID!): [Tag]
     getNoteList(tag: [String]): NoteHead
  }
`;

const SchemaDefinition = `
  schema {
     query: Query
  }
`;

const schema = makeExecutableSchema({
	typeDefs: [SchemaDefinition, RootQuery, NoteSchema, TagSchema],
	resolvers,
});
export { schema };
