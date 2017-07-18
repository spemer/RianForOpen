import gql from 'graphql-tag';

export const makeNote = gql`
    mutation makeNoteMutation {
        makeNote {
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
            }
	}
`;

export const autoSave = gql`
    mutation autoSaveMutation($noteId: ID! $title: String $tags: [String] $data: String $isPublish: Boolean $preImage: String){
        autoSave(noteId: $noteId, title: $title, tags: $tags, data: $data isPublish: $isPublish preImage: $preImage){
            success
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
