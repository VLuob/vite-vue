import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
const routerHistory = createWebHashHistory()
const router = createRouter({
   history: routerHistory,
   routes: [
      {
         path: '/',
         component: () => import('../views/home.vue'),
      },
      {
         path: '/about',
         component: () => import('../views/about.vue'),
      },
      {
         path: '/test',
         component: () => import('../views/test.vue'),
      },
   ],
})
export default router
