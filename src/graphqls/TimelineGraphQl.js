import gql from 'graphql-tag';
export const getNoteList = gql`
	query  getNoteList($sortby: String){
		getNoteList{
			tag
			totalCount
			notes(sortby: $sortby){
			_id
			title
			preview
			image
			publish
			star
			final_modified_at
			created_at
			}
			pageInfo{
			endCursor
			isLastPage
			}
		}
	}`;
