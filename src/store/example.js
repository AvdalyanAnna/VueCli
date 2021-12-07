export default {
    state: {
        message:"",
        users:[],
        admin:false,

    },
    mutations: {
        setMessage(state,payload){
            state.message = payload;
        }
    },
    actions: {
        setMessage({commit},payload){
            console.log(payload)
            commit("setMessage","Hello again");
        }
    },
    getters: {
        getMessage(state){
            return state.message;
        }
    },
}