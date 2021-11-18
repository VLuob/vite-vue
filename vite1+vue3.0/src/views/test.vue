<template>
	<h1 class="h1">TEST</h1>
	<child
		:msg="msg"
		:msg2="msg2"
		title="Title"
		ref="child"
		v-model:key="key"
		v-model:value="value"
	/>
</template>
<script lang="ts">
import { ref, reactive, defineComponent, onMounted, unref, provide } from 'Vue'
import child from '../components/child.vue'
export default defineComponent({
	components: {
		child,
	},
	setup() {
		provide('name', 123)
		const msg = ref('这是一条消息')
		const child = ref(null)
		const key = ref(123)
		const value = ref(123)
		const msg2 = reactive(['这是第二条消息'])
		onMounted(() => {
			const childRef: any = unref(child)
			childRef.someMethod()
			console.log(
				'chidlRefDomunref',
				childRef.childName,
				'msg2:',
				msg2[0]
			)
		})
		return { msg, msg2, child, key, value }
	},
})
</script>
<style lang="less">
.font(@size:12px,@color:#fff) {
	font-size: @size;
	color: @color;
}
.h1 {
	.font('', #000);
}
</style>
