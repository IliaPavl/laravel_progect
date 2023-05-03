import { createStore } from "vuex";
import axiosClient from "../axios";
const store = createStore({
    state: {
        user: {
            name: sessionStorage.getItem('NAME'),
            userId: sessionStorage.getItem('USERID'),
            token: sessionStorage.getItem('TOKEN'),
        }
    },
    getters: {},
    actions: {
        async registartion({ commit }, user) {
            const response = await axiosClient.post('/registration', user, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            });
            commit('setUser', response);
        },
        async login({ commit }, user) {
            const response = await axiosClient.post('/login', user, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            });
            commit('setUser', response);
        },
        async logout({ commit }, user) {
            const response = await axiosClient.post('/logout', user, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            });
            commit('logout');
            return response;
        },
    },
    mutations: {
        logout: (state) => {
            state.user.name = null;
            state.user.userId = null;
            state.user.token = null;
            sessionStorage.clear();
        },
        setUser: (state, userData) => {
            const data = userData.data;
            if (userData !== undefined) {
                state.user.token = data.token;
                state.user.name = data.user.name;
                state.user.userId = data.user.id;
                sessionStorage.setItem('TOKEN', data.token);
                sessionStorage.setItem('NAME', data.user.name);
                sessionStorage.setItem('USERID', data.user.id);
            }
        },
    },
    modules: {}
})
export default store;