import { createRouter, createWebHistory } from 'vue-router'

import Home from "../pages/Home.vue"
import Quran from "../pages/Quran.vue"

const routes = [
    {
        path: '/',
        component: Home,
    },
    // Card Menu
    { path: '/quran', component: Quran }



]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router