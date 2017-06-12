import gql from 'graphql-tag';
export const autoSave = gql`
    mutation autoSaveMutation($_id: ID!, $title: String, $tag: [String], $notedata: String){
        autoSave(_id: $_id, title: $title, tag: $tag, notedata: $notedata){
            success
        }
    }
`;

export const saveTheme = gql`
    mutation saveThemeMutation($_id: ID!, $tag: [String], $themedata: String){
        saveTheme(_id: $_id, tag: $tag, themedata: $themedata) {
            success
        }
    }
`;
