import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/a',
        redirect: '/a',
        component: () => import('../components/A/index.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
