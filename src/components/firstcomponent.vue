<template>
		<div class="component-richText-box">
			<div class="rich-header">
				{{title}}
			</div>
			<div class="rich-body">
				<img v-bind:src="url" width="100%" height="360" alt="平安车险">
			</div>
			<div class="rich-footer">
				{{desc}}
			</div>
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
		return {

		}
	},
	props:["title","url","desc"],
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
.component-richText-box
	display block
	margin 10px
	border 1px solid black
	border-radius 5px
	.rich-header
	.rich-body
	.rich-footer
		background black

</style>