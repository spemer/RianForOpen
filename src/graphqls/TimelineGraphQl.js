import gql from 'graphql-tag';
export const getAllMyNotePreviews = gql`
	query getAllMyNotePreviewsQuery($tags: [String]){
		getAllMyNotePreviews(tags: $tags){
			tags
			notes(tags: $tags) {
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
