<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <input v-model="msg" type="text" name="">
    <firstcomponent></firstcomponent>
  </div>
</template>

<script>
import firstcomponent from './component/firstcomponent.vue'

export default {
  data () {
    return {
      msg: 'Hello Vuedfdf22!'
    }
  },
  components:{ firstcomponent }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
