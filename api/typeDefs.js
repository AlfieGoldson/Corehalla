const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: ID!
    name: String!
    discordID: String
    brawlhallaID: String
  }
  type PlayerStats {
      brawlhallaID: String
      name: String
      xp: Int
      level: Int
      games: Int
      wins: Int
      losses: Int
  }
  type Query {
    users(name: String): [User]
    playerStats(brawlhallaID: String): PlayerStats
  }
  type Mutation {
      createUser(name: String!, brawlhallaID: String): User!
  }
`