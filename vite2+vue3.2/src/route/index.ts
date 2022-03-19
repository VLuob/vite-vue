import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { defineAsyncComponent } from 'vue'
const routes: Array<RouteRecordRaw> = [
   {
      path: '/home',
      component: defineAsyncComponent(() => import('@/views/home.vue')),
   },
   {
      path: '/',
      component: defineAsyncComponent(() => import('@/views/about.vue')),
   },
   // {
   //    path: '/test',
   //    component: () => import('../views/test.vue'),
   // },
]
const router = createRouter({
   history: createWebHashHistory(),
   routes,
})
export default router
