<script>
import { mapActions, mapGetters } from 'vuex'
import Next from '../components/next.vue'
import Operate from '../components/operate.vue'
import Score from '../components/score.vue'


export default {
    components: {
        Next,
        Operate,
        Score,
    },
    computed: {
        ...mapGetters('TouchStore', ['get']),

    },
    watch: {
        get: {
            deep: true,
            handler() {
                if(this.get.length <= 16) {
                    this.addition(48)
                }
            },
        },
    },
    methods: {
        ...mapActions('ScoreStore', ['set']),
        ...mapActions('TouchStore', ['create', 'addition']),
    },
    beforeMount() {
        this.create(64)
    },
}
</script>

<template>
    <div>
        <header>
            <h1>Infinity Mode</h1>
            <h2>No time limiter</h2>
        </header>

        <main>
            <Next />
            <Operate />
            <Score />
        </main>
    </div>
</template>

<style scoped lang="css">
    h1 {
        @apply font-black text-4xl;
    }
    h2 {
        @apply font-bold text-xl italic;
    }
</style>