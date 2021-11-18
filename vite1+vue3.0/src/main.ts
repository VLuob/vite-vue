import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import '/@modules/element-plus/lib/theme-chalk/index.css'
createApp(App).use(router).use(store).mount('#app')
/**
 * element 按需引入组件安装
 * .component(ElButton.name, ElButton)
 */
