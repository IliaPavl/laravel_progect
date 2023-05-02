import { createStore } from "vuex";
import axiosClient from "../axios";
const store = createStore({
    state: {
        user: {
            name: null,
            userId: null,
            token: sessionStorage.getItem('TOKEN'),
        }
    },
    getters: {},
    actions: {
        async registartion({ commit }, user) {
            try {
                const response = await axiosClient.post('/registration', user, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                commit('setUser', response);
            } catch (error) {
                alert(error.response.data.message);
            }
        },
        async login({ commit }, user) {
            try {
                const response = await axiosClient.post('/login', user, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                commit('setUser', response);
            } catch (error) {
                alert(error.response.data.message);
            }
        },
    },
    mutations: {
        logout: (state) => {
            state.user.name = null;
            state.user.userId = null;
            state.user.token = null;
        },
        setUser: (state, userData) => {
            const data = userData.data;
            if (userData !== undefined) {
                state.user.token = data.token;
                state.user.name = data.user.name;
                state.user.userId = data.user.id;
                sessionStorage.setItem('TOKEN', data.token);
            } else {
                alert("Error registration")
                state.user.token = null;
                state.user.name = null;
                state.user.userId = null;
            }
        },
    },
    modules: {}
})
export default store;