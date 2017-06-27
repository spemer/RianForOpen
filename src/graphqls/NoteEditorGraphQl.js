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
    query getSelectedMyNoteDataQuery($noteId: ID!){
            getSelectedMyNoteData(noteId: $noteId){
            _id
            title
            tags
            data
            updated_at
            created_at
            like
            is_publish
        }
	}
`;

export const autoSave = gql`
    mutation autoSaveMutation($noteId: ID! $title: String $tags: [String] $data: String $is_publish: Boolean $pre_image: String){
        autoSave(noteId: $noteId, title: $title, tags: $tags, data: $data is_publish: $is_publish pre_image: $pre_image){
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
