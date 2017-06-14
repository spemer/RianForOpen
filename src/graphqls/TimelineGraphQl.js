import gql from 'graphql-tag';
export const getNoteList = gql`
	query  getNoteListQuery($userId: ID $tags: [String] $after: String $limit: Int $sortby: String){
		getNoteList(userId: $userId tags: $tags after: $after limit: $limit sortby: $sortby){
			totalCount
			tags
			notes(userId: $userId tags: $tags after: $after limit: $limit sortby: $sortby){
				_id
				title
				created_at
    			updated_at
      			tags
      			user_id
			}
			hasNext
			cursor
		}
}`;
