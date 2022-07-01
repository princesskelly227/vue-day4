import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.css"
import moment from 'moment'

Vue.filter('totime',val=>moment(val).format('YYYY-MM-DD HH:mm:ss'))

new Vue({
  render: h => h(App),
}).$mount('#app')
