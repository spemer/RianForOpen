import gql from 'graphql-tag';
export const getTagList = gql`
	query getTagsByConditionQuery($condition: String $userId: ID){
		getTagsByCondition(condition: $condition userId: $userId){
			condition
			tags(condition: $condition userId: $userId) {
			name
			}
		}
}
`;
