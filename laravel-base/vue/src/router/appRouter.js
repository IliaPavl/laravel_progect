import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import DashboardMap from '../views/DashboardMap.vue'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration
    },
    {
        path: '/map',
        name: 'DashboardMap',
        component: DashboardMap
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;