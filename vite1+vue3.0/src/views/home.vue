<template>
	<h3>Home</h3>
	<h2>{{ newObj }}</h2>
	<el-button type="primary" @click="openToast" ref="button"
		>主要按钮</el-button
	>
	<!-- 异步组件 -->
	<Suspense v-cloak>
		<template #default>
			<otherComponent @itemClicks="itemClick" :text="text" ref="other">
				<template v-slot:item><div>2</div></template>
			</otherComponent>
		</template>
		<template #fallback>
			<el-skeleton :rows="5" animated loading />
		</template>
	</Suspense>
	<div id="teleport-target"></div>
	<teleport to="#teleport-target">
		<div v-if="visible" class="toast" @click="visible = false">
			<div id="mse">1223</div>
		</div>
	</teleport>
	<!-- <div class="img">
		<img v-for="item in 5" :key="item" src="../assets/logo.png" alt="" />
	</div> -->
</template>

<script lang="ts">
import Api from '../api'
import moment from 'moment'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { ElButton, ElSkeleton } from 'element-plus'
import {
	defineAsyncComponent,
	getCurrentInstance,
	defineComponent,
	watchEffect,
	onMounted,
	reactive,
	computed,
	nextTick,
	toRefs,
	toRaw,
	toRef,
	unref,
	watch,
	ref,
} from 'vue'
import otherComp from '/@/components/otherComponent.vue'
export default defineComponent({
	name: 'home',
	mixins: [],
	components: {
		ElButton,
		ElSkeleton,
		otherComp,
		otherComponent: defineAsyncComponent(
			() => import('/@/components/otherComponent.vue')
		),
	},
	setup(props, { attrs, emit, slots }) {
		const num = ref(2)
		const orgList = ref([])
		const propText = reactive({ text: '这是Props传入的值' })
		const store = useStore()
		const route = useRoute()
		const router = useRouter()
		const double = ref(10)
		const param = reactive({
			page: 1,
			limit: 10,
			list: [1, 2, 3, 4, 5],
			name: '香瓜',
		})
		const state = reactive({
			foor: 1,
			bar: 3,
		})
		const visible = ref(false)
		const other = ref(null)

		const that = getCurrentInstance()
		console.log('实例化that：', that)

		function useCounte(value: number) {
			const count = ref(value)
			const setCount = (values: number) => {
				count.value = values
			}
			return { count, setCount }
		}

		const doubles = computed(() => double.value * 2)
		console.log('计算属性:', doubles.value)

		const itemClick = (val: any) => {
			let data = toRaw(propText)
			data.text = '改变props传入的值'
			console.log(data)
			console.log('itemValue', val)
			const { count, setCount } = useCounte(20)
			setCount(10)
			console.log('hooksUseCounter:', count.value)
			change()
		}

		let obj = { name: '张三', age: 12 }
		let newObj = toRef(obj, 'name')
		//let newObj = ref(obj.name)

		function change() {
			newObj.value = '李四'
			console.log('修改了obj.name的值：', newObj.value)
		}
		const componentId = computed({
			get: () => num.value,
			set: (val) => {
				num.value = val - 2
			},
		})

		const openToast = () => {
			visible.value = !visible.value
		}

		onMounted(() => {
			const name = param?.name
			console.log('param.name:', name)

			if (name ?? '' !== '') {
				console.log(name)
			}

			nextTick(() => {
				setTimeout(() => {
					console.log('other$refs:', unref(other))
				}, 100)
				param.name = '小明'
			})

			store.dispatch('updateUser', {
				UserInfo: 'updateUser.userInfo',
				Id: '12fdd-dfdf',
			})
			console.log(store.getters.userInfo)
			// Api.GetClassOrgList().then((res: any) => {
			// 	if (res.status === 0) {
			// 		orgList.value = res.List
			// 	}
			// 	console.log(res)
			// })
			interface Point {
				readonly x: number
				readonly y: number
			}
			interface B {
				str: string
			}
			interface A extends B, Point {
				isShow: boolean
			}
			enum Home {
				TEXT,
				TAB,
			}
			console.log('枚举Enum:', Home)
			interface Counter {
				(start: number): string
				interval: number
				reset(): void
			}
			let square = <A>{}
			let p1: Point = { x: 10, y: 20 }
			square.str = 'TypeScript'
			square.isShow = false
			console.log(p1.x, p1.y, square)

			function getCounter() {
				let count = <Counter>function (start: number) {
					console.log('start', start)
				}
				count.interval = 1
				count.reset = () => console.log('resetFunction', count.interval)
				return count
			}
			let c = getCounter()
			c(1.0)
			c.reset()
			c.interval = 5.0
			console.log('route', route, router)

			class Animal {
				name: string
				protected age: number
				constructor(thenName: string, thenAge: number) {
					this.name = thenName
					this.age = thenAge
				}
				move(distanceInMeters: number = 0) {
					console.log(`${this.name} move ${distanceInMeters}`)
				}
				public getNameAge() {
					console.log(`${this.name}age:${this.age}`)
				}
			}
			class Cat extends Animal {
				constructor(name: string, age: number) {
					super(name, age)
				}
				move(distanceInMeters = 5) {
					console.log('喵~', this.age)
					super.move(distanceInMeters)
				}
			}
			let cat = new Cat('猫', 1)
			cat.move()
			cat.getNameAge()

			class Employee {
				private _fullName!: string
				get fullName(): string {
					return this._fullName
				}
				set fullName(newName: string) {
					if (newName) {
						this._fullName = newName
					} else {
						console.log('Error:update _fullName')
					}
				}
			}
			let employee = new Employee()
			employee.fullName = 'Tom'
			interface Card {
				suit: string
				card: number
			}
			interface Deck {
				suits: string[]
				cards: number[]
				createCardPicker(this: Deck): () => Card
			}
			let obj: Deck = {
				suits: ['1', '2', '4'],
				cards: Array(52),
				createCardPicker: function (this: Deck) {
					return () => {
						let pickedCard = Math.floor(Math.random() * 52)
						let pickedSuits = Math.floor(pickedCard / 13)
						return {
							suit: this.suits[pickedSuits],
							card: pickedCard % 13,
						}
					}
				},
			}
			//alert('card: ' + pickedCard.card + ' of ' + pickedCard.suit)
			function getNum<T>(num: T[]): T[] {
				console.log(num.length)
				return num
			}
			getNum([1, 2])

			let mysum: (x: number, y: number) => number = function (
				x: number,
				y: number
			): number {
				return x + y
			}
			console.log('mysum', mysum(2, 5))
			function reverse(x: number): number
			function reverse(x: string): string
			function reverse(x: number | string): number | string | void {
				if (typeof x === 'string') {
					return x.split('').reverse().join('')
				} else if (typeof x === 'number') {
					return Number(x.toString().split('').reverse().join(''))
				}
			}
			console.log('reverse:', reverse('str'))
		})

		setTimeout(() => {
			num.value = 3
			param.page = 2
		}, 10)
		watchEffect(() => {
			console.log('watchEffect', num.value)
			const v = toRefs(state)
			const { foor, bar } = v
			console.log(
				'toRefs返回num的初始值对象',
				v,
				'通过toRefs解构出来的值',
				foor.value,
				bar.value
			)
		})
		watchEffect(() => {
			let { page } = param
			console.log('oPage:', page, 'num:', num.value)
		})
		watch(
			() => [num.value, param.page],
			([nnum, npage], [onum, opage], clear) => {
				console.log(
					`num新值:${nnum},旧值:${onum} page新值:${npage},旧值:${opage}`
				)
				clear(() => {}), { lazy: false, immediate: true }
			}
		)
		return {
			change,
			openToast,
			itemClick,
			num,
			other,
			double,
			newObj,
			visible,
			orgList,
			componentId,
			...toRefs(param),
			...toRefs(propText),
		}
	},
})
</script>
<style lang="less">
[v-cloak] {
	display: none;
}
li {
	list-style: none;
}
.border-radius(@radius:5px,@border:5px) {
	border-radius: @radius;
	border: @border solid chocolate;
}
.flex-center(@align:center,@direction,@justify:center) {
	display: flex;
	align-items: @align;
	justify-content: @justify;
	flex-direction: @direction;
}
.font(@size:12px, @lineHeight,@color:#fff) {
	font-size: @size;
	color: @color;
	line-height: @lineHeight;
	text-align: center;
}
.div {
	.font(20px,50px,#333);
	.border-radius(8px, 1px);
	.flex-center(center,column,space-between);
}
.toast {
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	.font(20px,50px,#333);
	background: rgba(0, 0, 0, 0.5);
	div {
		color: #fff;
		background: coral;
		.border-radius(8px, 6px);
		.flex-center(center,column,space-between);
	}
}
a {
	text-decoration: none;
	color: #333;
}
.img {
	height: 500px;
	width: 100%;
	border: 1px solid #000;
	overflow: auto;
	img {
		width: 100%;
	}
}
</style>
