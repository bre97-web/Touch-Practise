<script>
import { mapActions, mapGetters } from 'vuex'
import Next from '../components/next.vue'
import Operate from '../components/operate.vue'

export default {
    components: {
        Next,
        Operate
    },
    data() {
        return {
            isClose: false,
            countdown: 30,
        }
    },
    computed: {
        ...mapGetters('ScoreStore', ['get']),
    },
    watch: {
        countdown: {
            immediate: false,
            handler(value) {
                if(value <= 0) {
                    clearInterval(this.timer)
                    this.isClose = true
                }
            },
        },
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
    mounted() {
        this.timer = setInterval(() => {
            this.countdown --
        }, 1000)
    },
}
</script>

<template>  
    <div>  
        <header> 
            <h1>Limit Mode</h1>
            <h2>30 sec</h2>
        </header>

        <main>
            <Next />
            <Operate v-if="!isClose" />

            <div class="rounded-full overflow-clip h-10">
                <progress max="30" :value="countdown" class="w-full h-full"></progress>
            </div>

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