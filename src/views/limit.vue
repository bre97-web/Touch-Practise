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
    data() {
        return {
            isClose: false,
            countdown: 30,
        }
    },
    computed: {
        ...mapGetters('TouchStore', ['get']),
        
        leftOffset() {
            return {
                left: this.countdown * 3 - 100 + '%'
            }
        },
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
        ...mapActions('TouchStore', ['create', 'addition', 'additionOther']),
    },
    beforeMount() {
        this.create(64)
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
            <Next :class="{'grayscale': countdown <= 0}" />
            <Operate v-if="!isClose" />

            <div class="relative rounded-full h-10">
                <!-- <progress max="30" :value="countdown" class="w-full h-full"></progress> -->
                <div class="progress" :class="{'bg-green-500': countdown > 20 && countdown <= 30, 'bg-orange-500': countdown > 10 && countdown <= 20, 'bg-red-500' : countdown <= 10}" :style="leftOffset"></div>
            </div>

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

    .progress {
        transition: all 1s;
        @apply absolute left-0 top-0 h-full w-full;
    }
</style>