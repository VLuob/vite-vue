<script setup lang="ts">
import { onMounted, ref, watchEffect, reactive, markRaw } from 'vue'
import {
	NGrid,
	NSpace,
	NBadge,
	NAvatar,
	NButton,
	NDivider,
	NGridItem,
	useNotification,
} from 'naive-ui'
const value = ref(1)
const name = ref('about')
const aboutObj = reactive({
	Id: '22-55dgeef-12',
	age: 12,
	gender: 1,
})
const notification = useNotification()
onMounted(() => {
	name.value = 'ABOUT'
	console.log(aboutObj)
})
watchEffect(() => {
	console.log(name.value)
})
const handleClick = () => {
	value.value += 1
	notification.info({
		title: `通知框序号${value.value}`,
		content: '你可以限制通知框的数量',
	})
}
</script>
<template>
	<nButton @click="handleClick">最多允许三条通知</nButton>
	<div class="about">
		<h1>{{ name }}</h1>
	</div>
	<n-divider>
		<n-space :size="24" align="center">
			<n-badge dot processing>
				<n-avatar />
			</n-badge>
			<n-badge :value="value" :max="15">
				<n-avatar
					size="large"
					object-fit="cover"
					src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
				/>
			</n-badge>
			<n-badge dot type="info" processing>
				<n-avatar />
			</n-badge>
		</n-space>
	</n-divider>
	<n-divider>Self 响应式</n-divider>
	<n-grid cols="4" item-responsive>
		<n-grid-item span="0 400:1 600:2 800:3">
			<div class="light-green">
				0～400px：不显示<br />
				400～600px：占据空间 1<br />
				600～800px：占据空间 2<br />
				800px 以上：占据空间 3
			</div>
		</n-grid-item>
		<n-grid-item>
			<div class="green">2</div>
		</n-grid-item>
	</n-grid>
	<n-divider>Screen 响应式</n-divider>
	<n-grid cols="4" item-responsive responsive="screen">
		<n-grid-item span="0 m:1 l:2">
			<div class="light-green">
				m 以下：不显示<br />
				m 到 l：占据空间 1<br />
				l 以上：占据空间 2
			</div>
		</n-grid-item>
		<n-grid-item>
			<div class="green">2</div>
		</n-grid-item>
	</n-grid>
</template>

<style lang="less" scoped>
.about {
	background: chocolate;
}
.light-green {
	height: 108px;
	background-color: rgba(0, 128, 0, 0.12);
}
.green {
	height: 108px;
	background-color: rgba(0, 128, 0, 0.24);
}
</style>
