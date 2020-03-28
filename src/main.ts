import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/base.css'

Vue.config.productionTip = false

//axios
// @ts-ignore
import Axios from './config/http.js'
Vue.prototype.$http = Axios

// @ts-ignore
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
