<template>
	<div id="firstcomponent">
		  <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
		<h1>I am a title</h1>
		<a href="">write {{author}}</a>

		<ul>
			<li v-for="todo in todos">
				{{todo.text}}
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				author:'微信公众号神奇',
				todos:[
				{text:'Learn Javascript'},
				{text:'Learn Javascript'},
				{text:'Learn Java'}
				]
			}
		}

	}
</script>

<style type="text/css">

</style>