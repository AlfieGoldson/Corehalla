import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faChevronLeft, faChevronRight, faStar, faChartPie, faUserFriends, faPalette, faSortAmountDown, faUserCheck, faSearch, faTableTennis } from '@fortawesome/free-solid-svg-icons'
import { faSquare, faWindowMinimize } from '@fortawesome/free-regular-svg-icons'
import { faDiscord, faTwitter, faSteam, faYoutube, faTwitch, faInstagram, faReddit } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTimes, faSquare, faWindowMinimize, faChevronLeft, faChevronRight, faStar, faChartPie, faUserFriends, faPalette, faSortAmountDown, faDiscord, faTwitter, faSteam, faYoutube, faTwitch, faInstagram, faReddit, faUserCheck, faSearch, faTableTennis);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
