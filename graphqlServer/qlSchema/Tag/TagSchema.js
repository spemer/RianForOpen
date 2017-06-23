const Tag = `
	type TagList {
		condition: String
		tags(condition: String): [Tag]
	}

	type Tag {
		name: String
		how_many: Int
	}
`;

export default () => [Tag];
