<template>
	<div @click="handelClick">{{ msg }}</div>
</template>
<script lang="ts">
import { use } from 'element-plus/lib/locale'
import { defineComponent, onMounted, useContext, inject } from 'vue'
export default defineComponent({
	name: 'child',
	props: ['msg'],

	setup(props) {
		console.log(props)
		const ctx = useContext()
		const { emit } = useContext()
		const name = inject('name')
		onMounted(() => {
			console.log(ctx.attrs, 'inject:', name)
		})
		const handelClick = () => {
			try {
				emit('update:key', '新的key')
				emit('update:value', '新的value')
			} finally {
				console.log('finally')
			}
		}
		ctx.expose({
			childName: '这是子组件的属性',
			someMethod() {
				console.log('这是子组件的方法')
			},
		})
		return { handelClick, name }
	},
})
</script>
