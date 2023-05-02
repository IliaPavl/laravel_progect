import { createStore } from "vuex";
const store = createStore({
    state: {
        user:{
            login:"Tom@mail.ru",
            userId:"fgkf34yytr738qt34crii3",
            token:'13' 
        }
    },
    getters: {},
    actions: {},
    mutations: {
        logout: (state) => {
            state.user.name=null;
            state.user.userId=null;
            state.user.token=null;
        }
    },
    modules: {}
})
export default store;