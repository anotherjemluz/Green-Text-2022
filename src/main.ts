import Vue from 'vue'
import App from './App.vue'
import router from './config/router'
import store from './config/store'

// import './config/msgs'
import './config/axios'

// import AOS from 'aos'
// import 'aos/dist/aos.css'

// import Toasted from 'vue-toasted'
// Vue.use(Toasted)

// import SmoothScrollbar from 'vue-smooth-scrollbar'
// Vue.use(SmoothScrollbar)

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBullhorn,
  faCircle,
  faShareAlt,
  faExternalLinkAlt,
  faAppleAlt,
  faToiletPaper,
  faCommentAlt,
  faReply,
  faGlobeAmericas
  // faEllipsisV

} from '@fortawesome/free-solid-svg-icons'

// importando os icones que serão utilizados no projeto
Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(
  faBullhorn,
  faCircle,
  faShareAlt,
  faExternalLinkAlt,
  faAppleAlt,
  faToiletPaper,
  faCommentAlt,
  faReply,
  faGlobeAmericas
  // faEllipsisV
)

Vue.config.productionTip = false

new Vue({
  // created() {
  //   AOS.init()
  // },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
