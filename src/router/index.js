import { createRouter, createWebHistory } from 'vue-router'

import Home from "../pages/Home.vue"


const routes = [
    {
        path: '/',
        component: Home,
    },
    // Card Menu
    { path: '/quran', component: () => import('../pages/Quran.vue') },




]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router