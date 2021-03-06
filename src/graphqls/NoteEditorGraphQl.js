import gql from 'graphql-tag';

export const makeNote = gql`
    mutation makeNoteMutation {
        makeNote {
            success
            noteId
        }
    }
`;

export const deleteNote = gql`
    mutation deleteNoteMutation($userId: ID $noteId: ID!) {
        deleteNote(userId: $userId noteId: $noteId) {
            success
            noteId
        }
    }
`;


export const getSelectedMyNoteData = gql`
    query getSelectedMyNoteDataQuery($noteId: ID!) {
            getSelectedMyNoteData(noteId: $noteId) {
                _id
                title
                tags
                data
                updatedAt
                createdAt
                isPublish
            }
	}
`;

export const noteSave = gql`
    mutation noteSaveMutation($noteId: ID! $title: String $tags: [String] $data: String $isBooked: Boolean $isPublish: Boolean $preImage: String){
        noteSave(noteId: $noteId, title: $title, tags: $tags, data: $data isBooked: $isBooked isPublish: $isPublish preImage: $preImage){
            success
            noteId
        }
    }
`;

export const saveTheme = gql`
    mutation saveThemeMutation($tags: [String], $themedata: String){
        saveTheme(tags: $tags, themedata: $themedata) {
            success
        }
    }
`;
