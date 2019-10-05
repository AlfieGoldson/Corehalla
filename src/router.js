import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PlayerStats from './views/PlayerStats.vue'
import Leaderboard from './views/Leaderboard.vue'
import Wiki from './views/Wiki.vue'

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
            path: '/wiki',
            name: 'wiki',
            component: Wiki
        },
        {
            path: '/twitter',
            beforeEnter: () => {
                window.location = "https://twitter.com/Corehalla"
            }
        },
        {
            path: '/discord',
            beforeEnter: () => {
                window.location = "https://discord.gg/eD248ez"
            }
        },
        {
            path: '/github-website',
            beforeEnter: () => {
                window.location = "https://github.com/AlfieGoldson/Corehalla"
            }
        },
        {
            path: '/github-npm-module',
            beforeEnter: () => {
                window.location = "https://github.com/AlfieGoldson/Corehalla-NPM"
            }
        }
    ]
})
