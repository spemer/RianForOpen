import gql from 'graphql-tag';

export const basic = () => {};

export const makeUserName = gql`
	mutation makeUserNameMuation($userId: ID $userName: String!) {
		makeUserName(userId: $userId userName: $userName) {
			success
			reason
			userName
		}
	}
`;
