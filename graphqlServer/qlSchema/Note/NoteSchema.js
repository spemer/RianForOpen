const Note = `	
	type NoteHead {
		tag: [String]
		totalCount: Int
		notes(tag: [String], after:ID, limit:Int, sortby: String): [Note]
		pageInfo(tag: [String], after:ID, limit: Int): Page
	}
	type Note {
		_id: ID!
		title: String
		preview: String
		tag: String
		image: String
		publish: Boolean
		star: Int
		created_at: String,
		final_modified_at: String
	}
	type Page {
		endCursor: ID!
		isLastPage: Boolean
	}
`;

export default () => [Note];
