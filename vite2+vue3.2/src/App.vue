<script setup lang="ts">
import {
	zhCN,
	dateZhCN,
	darkTheme,
	NThemeEditor,
	NConfigProvider,
	NNotificationProvider,
} from 'naive-ui'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const themeOverrides = {
	common: {
		primaryColor: '#09f',
	},
	// Button: {
	// 	textColor: '#FF0000',
	// },
	// Select: {
	// 	peers: {
	// 		InternalSelection: {
	// 			textColor: '#FF0000',
	// 		},
	// 	},
	// },
}
</script>
<template>
	<div class="link">
		<router-link to="/">About</router-link>
		<router-link to="/home">Home</router-link>
	</div>
	<n-notification-provider>
		<n-config-provider :locale="zhCN" :date-locale="dateZhCN">
			<!-- <n-theme-editor :theme-overrides="themeOverrides"> -->
			<router-view />
			<!-- </n-theme-editor> -->
		</n-config-provider>
	</n-notification-provider>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
