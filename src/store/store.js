import Vue from 'vue'
import Vuex from 'vuex'

const bh_api = require("corehalla")(
    require("../config/keys").brawlhalla.api_key
);

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {

        leaderboard: [],
        playerStats: []

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
        }
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
        }
    }
})
