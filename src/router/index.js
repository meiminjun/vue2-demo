import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import index from '../views/home/index.vue';
import login from '../views/login/index.vue';
// 登录组件
// import SignIn from 'components/signIn';
// 注册组件
// import SignUp from 'components/signUp';


export default new Router({
  routes: [{
  path: '/',
  name: 'index',
  component: require('../views/home/index')
},{
  path: '/login',
  name: 'login',
  component: login
}]
});