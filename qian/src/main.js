// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './router/index.js'
const router = new VueRouter({
	routes
})


 // Vue.config.productionTip = false


new Vue({
	router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
