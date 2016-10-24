<template>
	<div id="second">
		<div v-if="hiddenFlag">
			<span v-bind:title="message">
				Hover your mose over me for a few seconds to see my dynamically bound {{message}}!
			</span>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				message:'message22',
				hiddenFlag:true
			}
		}
	}
</script>

<style type="text/css">

</style>