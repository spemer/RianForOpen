import gql from 'graphql-tag';
export const getTagList = gql`
	query getTagsByConditionQuery($condition: String){
		getTagsByCondition(condition: $condition){
			condition
			tags(condition: $condition) {
			name
			}
		}
}
`;
