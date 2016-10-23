import Vue from 'vue'
import VueResource from "vue-resource"
// import store from './vuex/store'
import router from './router'

import MintUI from 'mint-ui';
Vue.use(MintUI);

import App from './App.vue'

Vue.config.debug = true;
Vue.use(VueResource)

var app = new Vue({
	router,
  render: h => h(App)
}).$mount('#app')
