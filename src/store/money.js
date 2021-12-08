import axios from "axios";
import cbrXmlDailyRu from "@/mixon/cbrXmlDailyRu";

export default {
    state: {
        money: [],

    },
    mutations: {
        setMoney(state, payload) {
            state.money = payload;
        }
    },
    actions: {
        setMoney({commit}) {
            axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
                .then(res => {
                    cbrXmlDailyRu(res.data.Valute)
                    commit("setMoney", res.data.Valute);
                })
        }
    },
    getters: {
        getMoney(state) {
            return state.money;
        }
    },
}