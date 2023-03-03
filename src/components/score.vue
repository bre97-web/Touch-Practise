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

<template>
    <div class="absolute bottom-5 left-0 px-16 w-full flex group">
        <div class="title-left-group">
            <h1>COMBO</h1>
            <h1>SCORE</h1>
            <h1>RESULT</h1>
        </div>
        <div enter-class="title-tight-group">
            <h1>{{ get.combo }}</h1>
            <h1>{{ get.score }}</h1>
            <h1>{{ get.result.toFixed(3) }}</h1>
        </div>
    </div>
</template>

<style scoped lang="css">
    .title-left-group,
    .title-right-group {
        @apply flex flex-col;
    }
    .title-left-group {
        @apply justify-start items-end;
    }
    .group {
        @apply justify-evenly;
    }
    h1 {
        @apply font-bold;
    }
</style>