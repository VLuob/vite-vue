<script setup lang="ts">
import { onMounted, ref, watchEffect, reactive, markRaw } from 'vue'
const name = ref('about')

const aboutObj = reactive({
	Id: '22-55dgeef-12',
	age: 12,
	gender: 1,
})
onMounted(() => {
	name.value = 'ABOUT'
	console.log(aboutObj)
})
watchEffect(() => {
	console.log(name.value)
})
</script>
<template>
	<div class="about">
		<h1>{{ name }}</h1>
	</div>
</template>
<style lang="less" scoped>
.about {
	background: chocolate;
}
</style>
