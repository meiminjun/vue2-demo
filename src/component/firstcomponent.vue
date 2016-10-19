<template>
	<div id="header">
		  <mt-header title="平安日报">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
		<h1>I am a title1</h1>
		<a href="">write {{date}}</a>

		<ul class="ulList">
			<li v-for="todo in stories">
				{{todo.title}}
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">

import Vue from 'vue';

const getUrl = "http://localhost:8088/api/before?time=20161013";

function fetch() {
  var promise = new Promise(function(resolve, reject){
    Vue.http.get(getUrl).then((response) => {
    	debugger;
      resolve(response.body)
    }, reject)
  });
  return promise;
}

function fetchItems() {
  return fetch().then((item) => {

  	return item;

  })
}

export default {
	data() {
		debugger;
		return fetchItems()

		// return {
		// 	author:'微信公众号神奇',
		// 	todos:[
		// 	{text:'Learn Javascript'},
		// 	{text:'Learn Javascript'},
		// 	{text:'Learn Java'}
		// 	]
		// }
	},
	beforeCreate() {
		console.log("beforeCreate")
	},
	created() {
		console.log("created")
	},
	beforeMount() {
		console.log("beforeMount")
	},
	mounted() {
		console.log("mounted")
	},
	beforeUpdate() {
		console.log("beforeUpdate")
	},
	updated() {
		console.log("updated")
	}
}
</script>

<style lang="stylus">
	.ulList
		background blue
</style>