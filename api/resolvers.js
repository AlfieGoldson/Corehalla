const mongoose = require('mongoose');
const bh_api = require("corehalla")(process.env.BRAWLHALLA_API_KEY);

const User = require('./src/models/User');

module.exports = {
    Query: {
        users: (_, { name }) => User.find({ name }),
        playerStats: async (_, { brawlhallaID }) => {
            let playerStats;
            await bh_api.fetchPlayerStats(brawlhallaID).then(player => {
                playerStats = {
                    brawlhallaID: player.brawlhalla_id,
                    name: player.name,
                    xp: player.xp,
                    level: player.level,
                    games: player.games,
                    wins: player.wins,
                    losses: (player.games - player.losses)
                };
                console.log(playerStats);
            })
            return playerStats;
        }
    },
    Mutation: {
        createUser: (_, { name, brawlhallaID }) => {
            const newUser = new User({ name, brawlhallaID })
            newUser.save();
            return newUser;
        }
    }
};