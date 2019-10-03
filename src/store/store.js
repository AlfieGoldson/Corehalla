import Vue from 'vue'
import Vuex from 'vuex'

const bh_api = require("corehalla")(process.env.BRAWLHALLA_API_KEY);

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        social: {
            twitter: "https://twitter.com/Corehalla",
            discord: "https://discord.gg/eD248ez",
            githubWebsite: "https://github.com/AlfieGoldson/Corehalla",
            githubNPMModule: "https://github.com/AlfieGoldson/Corehalla-NPM",
            githubWiki: "https://github.com/AlfieGoldson/Corehalla-Wiki",
            patreon: "https://patreon.com/Corehalla",
            trello: "https://trello.com/b/ZjfqD2Qx/corehalla-dev"
        },
        leaderboard: [],
        playerStats: [],
        wiki: {
            currentPage: 'fiyu'
        }
    },
    getters: {
        fetchLeaderboard: state => {
            return state.leaderboard;
        },
        fetchPlayerStats: state => {
            return state.playerStats;
        }
    },
    mutations: {
        updateLeaderboard: (state, data) => {
            state.leaderboard = data;
        },
        clearLeaderboard: state => {
            state.leaderboard = [];
        },
        updatePlayerStats: (state, data) => {
            state.playerStats = data;
        },
        clearPlayerStats: state => {
            state.playerStats = [];
        },
        updateWikiPage: state => {
            fetch('../wiki/raw/index.md')
                .then(res => res.text()
                    .then(text => {
                        state.wiki.currentPage = ''
                    })
                    .catch(console.error)
                )
                .catch(console.error)
        },
        clearWikiPage: state => {
            state.wiki.currentPage = '';
        },
    },
    actions: {
        fetchLeaderboard: (context, options) => {
            context.commit('clearLeaderboard');
            bh_api.fetchLeaderboardFormat(options).then(data => {
                context.commit('updateLeaderboard', data);
            })
                .catch(err => console.log(err));
        },
        fetchPlayerStats: (context, player_id) => {
            context.commit('clearPlayerStats');
            bh_api.fetchPlayerStatsFormat(player_id).then(data => {
                context.commit('updatePlayerStats', data);
            })
                .catch(err => console.log(err));
        },
        changeWikiPage: (context/* pageURL */) => {
            context.commit('clearWikiPage');
            context.commit('updateWikiPage');
        }
    }
})
