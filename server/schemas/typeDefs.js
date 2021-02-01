//import & typeDefs
const {qgl} = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: []
    }

    type Book{
        bookId: ID
        authors: []
        description: String
        title: String
        image:
        link:
    }
    
    type Auth {
        token:
        user: [User]
    }

    type Query {
        me: [User]
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth

        removeBook(bookId: Id): User
    }`
   






//exporting
module.exports = typeDefs;