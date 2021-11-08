import Vue from 'vue'
import App from './App.vue'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faExternalLinkAlt, faInfoCircle, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faExternalLinkAlt, faInfoCircle, faSlidersH)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
