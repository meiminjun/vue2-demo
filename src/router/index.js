import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import index from '../src/home/index.vue';
// 登录组件
// import SignIn from 'components/signIn';
// 注册组件
// import SignUp from 'components/signUp';


export default new Router({
  mode: 'hash',
  routes: [
    // 注册路由
    {
      path: '/',
      component: index,
      children: [
        // 嵌套路由 https://github.com/vuejs/vue-router/blob/next-doc/docs/en/advanced-routing/nested.md
        { path: '/', component: index },
        // { path: '/signin', component: SignIn },
      ],
    },
    { path: '*', redirect: '/' },
  ],
});