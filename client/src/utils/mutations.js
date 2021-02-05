import gql from 'graphql-tag';

//second variable is typeDef variable from defintions
//$ defines the variable//second plugs into mutation

//returning Auth
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password){
            token
            user{
                _id
                username
            }
        }
    }
`;

//returning Auth
export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

//returning User type
export const SAVE_BOOK = gql`
    mutation saveBook($input: BookInput){
        saveBook(input: $input) {
                _id
                username
            }
            
        }
    }
`;

//returning User type
export const REMOVE_BOOK = gql`
    mutation removeBook($id: ID!) {
        removeBook(bookId: $id) {
            _id
            username
        }
    }
`;