import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PlayerStats from './views/PlayerStats.vue'
import Leaderboard from './views/Leaderboard.vue'
import Legend from './views/wiki/legends/legend.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/stats/leaderboard/:bracket?/:region?/:page?',
            name: 'leaderboard',
            component: Leaderboard
        },
        {
            path: '/stats/player/:id',
            name: 'player-stats',
            component: PlayerStats
        },
        {
            path: '/l',
            name: 'wiki-legend-page',
            component: Legend
        },
        {
            path: '/twitter',
            beforeEnter(to, from, next) {
                window.location = "https://twitter.com/Corehalla"
            }
        },
        {
            path: '/discord',
            beforeEnter(to, from, next) {
                window.location = "https://discord.gg/eD248ez"
            }
        },
        {
            path: '/github-website',
            beforeEnter(to, from, next) {
                window.location = "https://github.com/AlfieGoldson/Corehalla"
            }
        },
        {
            path: '/github-npm-module',
            beforeEnter(to, from, next) {
                window.location = "https://github.com/AlfieGoldson/Corehalla-NPM"
            }
        }
    ]
})
