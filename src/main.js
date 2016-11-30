import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import router from './router'
import store from './store'

import MintUI from 'mint-ui';
Vue.use(MintUI);

Vue.config.debug = true;
Vue.use(VueResource)

var app = window.app = new Vue({
	router,
  store,
  render: h => h(App)
}).$mount('#app')
