import { createStore } from "vuex"

import Touch from './TouchStore'

const Store = createStore({
    modules: {
        'TouchStore': Touch,
    },
})

export default Store