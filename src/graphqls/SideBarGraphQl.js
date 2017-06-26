import gql from 'graphql-tag';

export const makeNote = gql`
    mutation makeNoteMutation {
        makeNote {
            success
            noteId
        }
    }
`;
