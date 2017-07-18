import gql from 'graphql-tag';

export const getAllMyNotePreviewsByTags = gql`
	query getAllMyNotePreviewsByTagsQuery($tags: [String] $userId: ID){
		getAllMyNotePreviewsByTags(tags: $tags userId: $userId){
			tags
			notes(tags: $tags userId: $userId) {
				_id
				preImage
				title
				preview
				createdAt
				updatedAt
				tags
			}
		}
	}
`;
