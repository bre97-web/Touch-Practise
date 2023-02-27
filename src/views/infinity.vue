<script>
import { mapActions, mapGetters } from 'vuex';
import Next from '../components/next.vue'
import Operate from '../components/operate.vue';

export default {
    components: {
        Next,
        Operate
    },
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

<template>
    <div>
        <header>
            <h1>Infinity Mode</h1>
            <h2>No time limiter</h2>
        </header>

        <main>
            <Next />
            <Operate />
            
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