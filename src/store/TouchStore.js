
function Random(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

const TouchStore = {
    namespaced: true,
    state: {
        list: [],
    },
    getters: {
        get: (state) => state.list,
        getFirst: (state) => state.list[0],
    },
    actions: {
        create(miniStore, count) {
            if(count <= 0) return

            miniStore.commit('CREATE', count)
        },
        addition(miniStore, count) {
            miniStore.commit('ADDITION', count)
        },
        /**
         * 为state.list增加一个symbol。
         * @param {*} miniStore 
         * @param {String} symbol
         */
        additionOther(miniStore, symbol) {
            miniStore.commit('ADDITIONOTHER', symbol)
        },
        removeFirst(miniStore) {
            miniStore.commit('REMOVEFIRST')
        }
    },
    mutations: {
        CREATE(state, count) {
            var arr  = new Array()
            for (let index = 0; index < count; index++) {
                arr[index] = Random(37, 40)
            }

            state.list = arr
        },
        ADDITION(state, count) {
            for (let index = 0; index < count; index++) {
                state.list.push(Random(37, 40))
            }
        },
        ADDITIONOTHER(state, other) {
            state.list.push(other)
        },
        REMOVEFIRST(state) {
            state.list.shift()
        }
    }
}

export default TouchStore