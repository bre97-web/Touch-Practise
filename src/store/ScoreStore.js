
const ScoreStore = {
    namespaced: true,
    state: {
        value: {
            score: 0,
            combo: 0,
            result: 0,
        }
    },
    getters: {
        get: (state) => state.value,
    },
    actions: {
        set(miniStore, {score, combo, result}) {
            miniStore.commit('SET', {score, combo, result})
        },
    },
    mutations: {
        SET(state, {score, combo, result}) {
            state.value.score = score
            state.value.combo = combo
            state.value.result = result
        },
    },

}

export default ScoreStore