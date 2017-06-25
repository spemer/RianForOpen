import gql from 'graphql-tag';
export const getAllMyNotePreviews = gql`
	query getAllMyNotePreviewsQuery($tags: [String] $userId: ID){
		getAllMyNotePreviews(tags: $tags userId: $userId){
			tags
			notes(tags: $tags userId: $userId) {
			_id
			user_id
			pre_image
			title
			preview
			pre_image
			created_at
			updated_at
			is_publish
			tags
			like
			}
		}
	}
`;
