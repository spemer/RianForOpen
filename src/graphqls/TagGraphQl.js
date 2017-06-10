import gql from 'graphql-tag';
export const getTagList = gql`
	query getTagList($userId: ID!) {
	  getTagList(userId: $userId) {
	   	_id
	    name
	  }
	}
`;
