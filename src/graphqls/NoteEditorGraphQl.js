import gql from 'graphql-tag';
export const autoSave = gql`
    mutation autoSaveMutation($_id: ID!, $title: String, $tag: [String], $data: String){
        autoSave(_id: $_id, title: $title, tag: $tag, data: $data){
            title
            tag
            data
        }
    }
`;
