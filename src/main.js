import Vue from 'vue'
// import MintUI from 'mint-ui'
// import VueResource from "vue-resource"

import App from './App.vue'
import router from './router'


Vue.config.debug = true
// Vue.use(MintUI)
// Vue.use(VueResource)

var app = new Vue({
	router,
  render: h => h(App)
}).$mount('#app')
