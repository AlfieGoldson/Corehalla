const User = require('./src/models/User');

module.exports = {
    Query: {
        users: () => users,
    },
    Mutation: {
        createUser: (_, { name }) => {
            const newUser = new User({ name })
            newUser.save();
            return newUser;
        }
    }
};