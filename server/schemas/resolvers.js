const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');

const resolvers = {
    Query: {
        me: async(parent, args) => {
            
        }
    },

   Mutation: {
       login: async(parent, {email, password}) => {
           const user = await User.findOne({email});

           if(!user){
               throw new AuthenticationError('No Email Exists');
           }

           const correctPass = await user.isCorrectPassword(password);

           if(!correctPass){
               throw new AuthenticationError('Incorrect Password');
           }

           const token = signToken(user);
           return{token,user};
       },

        addUser: async(parent, args) => {
            const user = await User.create(args)
            const token = signToken(user);

            return {token, user};
        },

        saveBook: async (parent, {book}, context) => {
            if(context.book){
                const savedBook = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$addToSet: {book: book}},
                    {new: true}
                )
            }
        },

        removeBook: async(parent, {bookId}, context) => {

        }

    } 
}




module.exports = resolvers;