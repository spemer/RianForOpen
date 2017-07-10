import gql from 'graphql-tag';
export const getAllMyNotePreviews = gql`
	query getAllMyNotePreviewsQuery($tags: [String] $userId: ID){
		getAllMyNotePreviews(tags: $tags userId: $userId){
			tags
			notes(tags: $tags userId: $userId) {
			_id
			userId
			preImage
			title
			preview
			preImage
			createdAt
			updatedAt
			isPublish
			tags
			like
			}
		}
	}
`;
