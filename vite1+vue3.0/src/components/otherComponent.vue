<template>
	<div>Props:{{ text }}</div>
	<li
		class="div"
		v-for="item in params.list"
		:key="item.OrgId"
		@click="itemClick(item)"
	>
		{{ item }}
		<slot name="item"></slot>
	</li>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
	emits: ['itemClicks'],
	props: {
		text: {
			type: String,
			default: 'text',
		},
	},
	setup(prop, { emit }) {
		console.log(prop)
		const params = reactive({
			list: [1, 2, 3, 4, 5],
		})
		const itemClick = (item: any) => {
			emit('itemClicks', item)
		}
		return { params, itemClick }
	},
})
</script>
<style lang="less">
.total {
	height: 50px;
	width: 100px;
	font: 20px/50px '';
	background: red;
	box-shadow: 0 0 1px #000;
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
	.font(20px,30px,#333);
	margin: 5px 0;
	.border-radius(8px, 1px);
	.flex-center('',column,space-between);
}
</style>
