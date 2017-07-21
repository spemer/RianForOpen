const User = `
	type makeUserName {
		success: Boolean!
		reason: String
		userName: String
	}
`;

export default () => [User];
