<template>
	<div class="link">
		<router-link to="/">Home</router-link>
		<router-link to="/test">Test</router-link>
		<router-link to="/about">About</router-link>
	</div>
	<router-view></router-view>
	<div>
		这是一行文字也是一个链接点击它
		<a href="https://www.mi.com"
			><sup>{{ page }}</sup></a
		>
		可以进入一个网站这个网站的名字是
	</div>
</template>
<script>
export default {
	name: 'App',
	components: {},
	data() {
		return {
			page: 'MI',
		}
	},
	mounted() {
		console.log(this.page, this)
	},
}
</script>
<style lang="less">
.link {
	display: flex;
	span {
		color: red;
	}
}
</style>
