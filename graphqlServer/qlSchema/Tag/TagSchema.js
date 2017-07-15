const Tag = `
	type TagList {
		condition: String
		tags(condition: String userId: ID): [Tag]
	}

	type Tag {
		_id: ID
		name: String
		how_many: Int
	}
`;

export default () => [Tag];
