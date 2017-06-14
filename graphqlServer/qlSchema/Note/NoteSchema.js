const Note = `	
	type NoteHead {
		totalCount: Int
		tags: [String]
		notes(userId: ID tags: [String] after: String limit: Int sortby: String): [Note]
		hasNext: Boolean		
		cursor: String
	}
	type Note {
		_id: ID!
		user_id: ID!
		title: String
		data: String
		created_at: String
		updated_at: String
		tags: String
		preview: String
		image: String
		publish: Boolean
		star: Int
	}

	type Success {
		success: Boolean
	}
`;

export default () => [Note];
