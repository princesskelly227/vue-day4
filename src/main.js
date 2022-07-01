import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 默认找文件夹下的index文件(但是这个不是所以需要写路径)
import "bootstrap/dist/css/bootstrap.css"
new Vue({
  render: h => h(App),
}).$mount('#app')
