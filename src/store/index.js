import { createStore } from "vuex"

import Touch from './TouchStore'
import Score from './ScoreStore'

const Store = createStore({
    modules: {
        'TouchStore': Touch,
        'ScoreStore': Score,
    },
})

export default Store