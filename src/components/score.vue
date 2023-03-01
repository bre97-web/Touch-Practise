<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters('ScoreStore', ['get']),
    },
    methods: {
        ...mapActions('ScoreStore', ['set']),
        
    },
    created() {
        this.set({
            score: 0,
            combo: 0,
            result: 0,
        })
    },
}
</script>

<template lang="">
    <div class="w-full flex gap-16 items-center justify-center">
        <div class="flex-grow">
            <h1>COMBO</h1>
            <h1>SCORE</h1>
            <h1>RESULT</h1>
        </div>
        <div>
            <h1>{{ get.combo }}</h1>
            <h1>{{ get.score }}</h1>
            <h1>{{ get.result.toFixed(3) }}</h1>
        </div>
    </div>
</template>