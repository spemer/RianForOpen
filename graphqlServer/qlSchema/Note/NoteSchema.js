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
		pre_image: String
		created_at: String
		updated_at: String
		is_publish: Boolean
		tags: [String]
		preview: String
		like: Int
	}

	type Success {
		success: Boolean
	}
`;

export default () => [Note];
