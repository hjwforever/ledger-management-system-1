import Vue from 'vue'

import axios from 'axios';
import './plugin'
import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss'


import App from './App.vue'
import router from './router'
import store from './store'

import '@/icons'
import '@/permission'

Vue.use(ElementUI)
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
window.axios = axios;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
