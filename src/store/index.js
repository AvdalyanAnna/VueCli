import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)
import messanger from "@/store/messanger";

export default new Vuex.Store({
    modules: {
        messanger
    },
    state: {}
})