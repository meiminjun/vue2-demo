<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <input v-model="msg" type="text" name="">
    <firstcomponent></firstcomponent>
    <router-link to="/first" exact>
          <span>知乎日报</span>
    </router-link>

    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import firstcomponent from './component/firstcomponent.vue'
import sencondcomponent from './component/sencondcomponent.vue'

import Vue from 'vue';
import { Header,Button } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

export default {
  data () {
    return {
      msg: 'Hello Vuedfdf22!'
    }
  },
  components:{ firstcomponent,sencondcomponent }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
