import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import Map from '../views/Map.vue'
import DefaultDashboard from '../components/DefaultDashboard.vue'
import Photos from '../views/Photos.vue'
import store from "../store/store";
import DefaultAuth from "../components/DefaultAuth.vue"

const routes = [
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        component: DefaultAuth,
        meta: {isGuest: true},
        children: [
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
        ]
    },

    {
        path: '/',
        component: DefaultDashboard,
        redirect: '/map',
        meta: { requiresAuth: true },
        children: [
            { path: '/map', name: 'Map', component: Map },
            { path: '/photos', name: 'Photos', component: Photos }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: 'Login' })
    } else if (store.state.user.token && to.isGuest) {
        next({ name: 'Map' })
    } else {
        next()
    }
})

export default router;