import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/a',
        name: 'A',
        component: () => import('../components/A/index.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../pages/home.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
