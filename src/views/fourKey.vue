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
            /**
             * index作为每一组的指示器，正确的按下按键时index自增。
             */
            index: 1,

            countdown: 10,
            isClose: false,
        }
    },
    computed: {
        /**
         * get在组件初始化后调用一次，赋值给data中的list。
         */
        ...mapGetters('TouchStore', ['get', 'getFirst']),
        ...mapGetters('ScoreStore', {'getScore': 'get'}),

        leftOffset() {
            return {
                left: -100 + this.countdown*10 + '%'
            }
        },
    },
    watch: {
        countdown: {
            immediate: false,
            handler(value) {
                if(value > 10) {
                    this.countdown = 10
                }
                if(value < 0) {
                    this.isClose = true
                    this.countdown = 0
                    clearInterval(this.timer)
                }
            },
        },
        get: {
            deep: true,
            handler() {
                if(this.get.length <= 0) {
                    this.addition(++this.index)
                    this.countdown += 2
                }
            },
        },
        index: {
            handler() {
                if(this.index > 10) {
                    this.index = 1
                }
            }
        }
    },
    methods: {
        ...mapActions('TouchStore', ['create', 'addition', 'additionOther']),
    },
    beforeMount() {
        this.create(this.index)
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
            <h1>FourKey Mode</h1>
            <h2>No time limiter and four key</h2>
        </header>

        <main class="overflow-clip flex flex-col gap-8">
            <Next :class="{'grayscale': countdown <= 0}" />
            <div class="relative rounded-full h-10 overflow-clip">
                <div class="progress" :class="{'bg-green-500': countdown > 20 && countdown <= 30, 'bg-orange-500': countdown > 10 && countdown <= 20, 'bg-red-500' : countdown <= 10}" :style="leftOffset"></div>
            </div>
            <Operate />
            <Score />
        </main>
    </div>
</template>


<style lang="css" scoped>
    h1 {
        @apply font-black text-4xl;
    }
    h2 {
        @apply font-bold text-xl italic;
    }
    .progress {
        transition: all 2s;
        @apply absolute left-0 top-0 h-full w-full;
    }
</style>