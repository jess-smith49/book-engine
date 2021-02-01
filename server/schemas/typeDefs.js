//import & typeDefs
const {qgl} = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
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
        token: ID!
        user: [User]
    }

    type Query {
        me: [User]
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook()
        removeBook(bookId: Id): User
    }`
   






//exporting
module.exports = typeDefs;