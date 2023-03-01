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
                if(this.get.length <= 0) {
                    this.additionOther(32)
                    this.addition(4)
                }
            },
        },
    },
    methods: {
        ...mapActions('TouchStore', ['create', 'addition', 'additionOther']),
    },
    beforeMount() {
        this.create(4)
    }
}
</script>

<template>
    <div>
        <header>
            <h1>Space Mode</h1>
            <h2>Left、Up、Right、Down and Space.</h2>
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