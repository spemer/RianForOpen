import gql from 'graphql-tag';

export const getTagsByCondition = gql`
	query getTagsByCondition($condition: String! $userId: ID) {
		getTagsByCondition(condition: $condition) {
			condition
			tags(condition: $condition, userId: $userId) {
			_id
			name
			}
		}
	}
`;
