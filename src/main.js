import Vue from 'vue'
// import MintUI from 'mint-ui'

import App from './App'
import VueRouter from "vue-router"
import VueResource from "vue-resource"


Vue.config.debug = true
// Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(VueResource)


// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
import sencondcomponent from './component/sencondcomponent.vue'

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: sencondcomponent
    }
  ]
})



var app = new Vue({
	router: router,
  render: h => h(App)
}).$mount('#app')
