import { createStore } from "vuex";
import axiosClient from "../axios";

const photosData = [
    {
        id: 1,
        user_id: 8,
        url: "https://i.imgur.com/JSxfI0I.jpeg",
        lat: "15",
        lng: "12",
        date: "12332",
        comment: "123"
    },
    {
        id: 2,
        user_id: 8,
        url: "https://i.imgur.com/JSxfI0I.jpeg",
        lat: "15",
        lng: "12",
        date: "12332"
        ,
        comment: "122gg3"
    },
    {
        id: 3,
        user_id: 8,
        url: "https://i.imgur.com/JSxfI0I.jpeg",
        lat: "15",
        lng: "12",
        date: "12332",
        comment: "1fghjkl23"
    },
    {
        id: 4,
        user_id: 8,
        url: "https://i.imgur.com/JSxfI0I.jpeg",
        lat: "15",
        lng: "12",
        date: "12332",
        comment: "gg345g45g3"
    },
    {
        id: 5,
        user_id: 8,
        url: "https://i.imgur.com/JSxfI0I.jpeg",
        lat: "15",
        lng: "12",
        date: "12332",
        comment: "jjjjjj"
    },
]

const store = createStore({
    state: {
        user: {
            name: sessionStorage.getItem('NAME'),
            userId: sessionStorage.getItem('USERID'),
            token: sessionStorage.getItem('TOKEN'),
        },
        photos: [...photosData],
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
        async savePhoto({commit},photo){
            const response = await axiosClient.post('/photos',photo,{
                headers: {
                    'Content-Type': 'multipart/form-data; charset=utf-8',
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            })
            console.log(response);
            return response;
        }
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