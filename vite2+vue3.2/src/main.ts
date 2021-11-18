import { createApp } from 'vue'
import App from './App.vue'
import route from './route'
import store from './store'
const app = createApp(App)
app.use(route).use(store).mount('#app')
// app.directive('focus', {
//    mounted(el) {
//       console.log(el);
//    }
// })