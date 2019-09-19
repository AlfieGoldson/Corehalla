const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const database = `mongodb+srv://Corehalla:${process.env.MATLAS_KEY}@corehalla-xtv6m.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    const server = new ApolloServer({ typeDefs, resolvers });

    server.listen('31199').then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });
}).catch(err => console.log(err));