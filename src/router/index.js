import { createRouter, createWebHashHistory } from "vue-router"

const Router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/home.vue'),
        },
        {
            path: '/infinity',
            component: () => import('../views/infinity.vue'),
        },
        {
            path: '/limit',
            component: () => import('../views/limit.vue'),
        },
    ],
})



export default Router