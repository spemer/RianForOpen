import gql from 'graphql-tag';

export const getAllMyNotePreviewsByTags = gql`
	query getAllMyNotePreviewsByTagsQuery($tags: [String] $userId: ID $byUpdatedAt: Boolean $byLatest: Boolean){
		getAllMyNotePreviewsByTags(tags: $tags userId: $userId){
			tags
			notes(tags: $tags userId: $userId byUpdatedAt: $byUpdatedAt byLatest: $byLatest) {
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
export const notePreviewUpdate = gql`
    query notePreviewUpdateQuery($noteId: ID!) {
            notePreviewUpdate(noteId: $noteId) {
				_id
				preImage
				tags
				title
				preview
				updatedAt
				tags
            }
	}
`;
