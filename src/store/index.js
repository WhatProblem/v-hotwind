import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    showTab: true, // 展示tabBar
}

const getters = {
    getTabStatus: (state) => {
        return state.showTab;
    }
}

const mutations = {
    hideTabbar(state) {
        state.showTab = !state.showTab;
    }
}

const actions = {
    ctrlTabbar({ commit, state }) {
        commit('hideTabbar');
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})