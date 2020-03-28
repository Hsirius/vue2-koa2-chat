import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//@ts-ignore
import userId from './userid'

const store = new Vuex.Store ({
    modules: {
        userId
    }
})
export default store
