const Note = `	
	type NoteHead {
		totalCount: Int
		tags: [String]
		notes(userId: ID tags: [String] byUpdatedAt: Boolean byLatest: Boolean): [Note]
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
		isPublish: Boolean,
		tags: [String]
		preview: String
		like: Int
	}

	type MyOneNote {
		_id: ID!
		userId: ID
		title: String
		data: String
		preImage: String
		createdAt: String
		updatedAt: String
		isPublish: Boolean,
		tags: [String]
		preview: String
	}

	type Success {
		success: Boolean
		noteId: ID
	}

	type MakeNoteSuccess {
		success: Boolean
		noteId: ID
	}

	type deleteNoteSuccess {
		success: Boolean
		noteId: ID
	}
`;

export default () => [Note];
