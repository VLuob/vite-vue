<script setup lang="ts">
import {
	NIcon,
	NCard,
	NModal,
	NButton,
	NPopover,
	NEllipsis,
	NScrollbar,
	NDatePicker,
	NColorPicker,
} from 'naive-ui'
import { useStore, mapGetters } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { ElButton, ElSkeleton } from 'element-plus'
import HelloWorld from '@/components/HelloWorld.vue'
import {
	Wifi,
	GameController,
	TrainOutline as TrainIcon,
	AccessibilityOutline as AccessibilityIcon,
} from '@vicons/ionicons5'
import {
	ref,
	watch,
	toRefs,
	provide,
	useAttrs,
	reactive,
	computed,
	onMounted,
	watchEffect,
} from 'vue'
const obj = reactive({
	name: 'Tom',
	age: 13,
})
/* 获取ref */
const hwRefs = ref()
/* vuex */
const store = useStore()
/* route */
const route = useRoute()
/* router */
const router = useRouter()
/* attrs */
const attrs = useAttrs()
/* 双向绑定 */
const iptVal = ref()
/* 注入 */
provide('name', '香瓜')
/* 动态color */
let colorRandom = ref('red')
/* 模态框 */
let showModal = ref(false)
/* time */
let range = ref()
/* mounted */
onMounted(async () => {
	console.log('hwRefs:', hwRefs.value, 'attrs:', attrs)
	let res = await fetchData()
	console.log(res)
})
/* computed */
const userInfo = computed(() => 'userInfo')
const theme = reactive({
	color: '#09f',
})
/* $emit */
const emitCount = (val: any) => {
	store.dispatch('updateUser', { UserId: '116-feeggdd', name: 'Tom', sex: 0 })
	console.log(
		store.getters.userInfo,
		'store:',
		store,
		'route:',
		route,
		'router:',
		router
	)
}
const btnClick = () => {
	store.commit('UPDATE_LOGINSTATUS', { loginStatus: 1 })
	console.log('loginStatus:', store.state.home.loginStatus)
}

const changeColor = () => {
	const { setColors } = hwRefs.value
	theme.color = theme.color === '#09f' ? '#08f' : '#09f'
	colorRandom.value = colorRandom.value === 'red' ? 'pink' : 'red'
	setColors(colorRandom.value)
}

// watch(
// 	() => theme.color,
// 	(newColor, oldColor) => {
// 		console.log(newColor, oldColor)
// 	}
// )

watch(
	[theme, colorRandom],
	([newProps, newCheckTip], [oldProps, oldCheckTip]) => {
		console.log(newProps, newCheckTip, oldProps, oldCheckTip)
	}
)

watchEffect(() => {
	const { color } = theme
	console.log('color:', color)
})

function fetchData() {
	return new Promise((resolve) => {
		resolve([
			{ name: 'Tom', age: 15 },
			{ name: 'alex', age: 13 },
		])
	})
}
</script>

<template>
	<n-color-picker :showPreview="true" v-model:value="colorRandom" />
	<n-button type="error" @click="btnClick">
		<input type="file" accept=".jpg, .gif, .png" style="opacity: 0" />点击上传
	</n-button>
	<n-date-picker v-model:value="range" type="datetimerange" clearable />
	<pre>{{ JSON.stringify(range) }}</pre>
	<n-button type="error" @click="btnClick">add</n-button>
	<input type="number" id="ipt" v-model="iptVal" maxlength="2" />
	<div :class="classess.home" @click="changeColor">
		<span :class="classess.span">{{ obj.name }}</span>
	</div>
	<n-popover trigger="hover">
		<template #trigger>
			<n-button>悬浮</n-button>
		</template>
		<span>或许不想知道你的花园长得咋样</span>
	</n-popover>
	<HelloWorld msg="vite" ref="hwRefs" :color="theme.color" @count="emitCount" />
	<br />
	<n-button text>
		<n-icon>
			<train-icon />
		</n-icon>那车头依然吐着烟
	</n-button>
	<n-icon size="40" color="#0e7a0d">
		<game-controller />
		<wifi />
		<accessibility-icon />
	</n-icon>
	<br />
	<n-button @click="showModal = true">来吧</n-button>
	<n-modal v-model:show="showModal">
		<n-card style="width: 600px" title="模态框" :bordered="false" size="huge">
			<template #header-extra>噢！</template>
			内容
			<template #footer>尾部</template>
		</n-card>
	</n-modal>
	<br />
	<!-- ellipsis -->
	<n-ellipsis style="max-width: 240px">
		住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪
		<template #tooltip>
			<div style="text-align: center">
				《秦皇岛》
				<br />住在我心里孤独的
				<br />孤独的海怪 痛苦之王
				<br />开始厌倦
				深海的光 停滞的海浪
			</div>
		</template>
	</n-ellipsis>
	<div style="width: 200px">
		<n-scrollbar style="max-height: 120px"></n-scrollbar>
	</div>
</template>
<style scoped lang="less" module="classess">
/* 自定义注入名称 */
.span {
	font: 600 20px/2 "";
	color: #fff;
	background: v-bind(colorRandom);
}
/* 全局样式 */
:global(div) {
	border-radius: 5px;
}
/* 深度选择器 */
.home:deep(span) {
	font: 600 15px/2 "";
}
/* 状态驱动的动态css */
.home {
	background: v-bind("theme.color");
}
</style>
