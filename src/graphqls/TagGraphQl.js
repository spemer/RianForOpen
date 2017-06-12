import gql from 'graphql-tag';
export const getTagList = gql`
		query getTagListQuery($userId: ID!) {
			getTagList(userId: $userId) {
				_id
				name
			}
		}
`;
