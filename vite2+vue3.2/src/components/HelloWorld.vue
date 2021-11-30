<script setup lang="ts">
import { inject, ref, useAttrs, watch, reactive } from 'vue'
defineProps<{ msg: string; color: string }>()
const emit = defineEmits(['count'])
const count = ref(1)
const attrs = useAttrs()
const themes = reactive({
	color: 'red',
})
const reds = ref('blue')
/* 引入 */
const name = inject('name')
const setCout = () => {
	count.value++
	emit('count', count.value)
	console.log(name, attrs)
}
const setColors = (color: string) => {
	themes.color = color
	console.log(themes)
}
watch(count, (n, o) => {
	console.log(`新值${n},旧值${o}`)
})
defineExpose({
	setColors,
	count,
})
</script>

<template>
	<h1 class="msg">{{ msg }}</h1>
	<div class="text">hello</div>
	<button type="button" @click="setCout">count is: {{ count }}</button>
</template>

<style scoped lang="less">
.msg {
	color: v-bind(reds);
}
.text {
	height: 30px;
	color: v-bind('themes.color');
	background: v-bind(reds);
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
}
a {
	color: #42b983;
}

label {
	margin: 0 0.5em;
	font-weight: bold;
}

code {
	background-color: #eee;
	padding: 2px 4px;
	border-radius: 4px;
	color: #304455;
}
</style>
