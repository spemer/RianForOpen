const Tag = `
	type TagList {
		condition: String
		tags(condition: String userId: ID): [Tag]
	}

	type Tag {
		_id: ID
		name: String
		howMany: Int
	}
`;

export default () => [Tag];
