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
		userId: ID
		title: String
		data: String
		preImage: String
		createdAt: String
		updatedAt: String
		tags: [String]
		preview: String
		like: Int
	}

	type Success {
		success: Boolean
		noteId: ID
	}

	type MakeNoteSuccess {
		success: Boolean
		noteId: ID
	}
`;

export default () => [Note];
