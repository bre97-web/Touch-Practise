<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            key: undefined,
            score: 0,
            result: 0,
            combo: 0,
        }
    },
    computed: {
        ...mapGetters('TouchStore', ['get', 'getFirst']),
    },
    methods: {
        ...mapActions('TouchStore', ['create', 'addition', 'removeFirst']),

        apply(e) {
            this.key = window.event ? e.keyCode : e.which

            if(!this.isKey(this.key)) {
                return
            }

            if(this.key != this.getFirst) {
                this.combo = 0
                return
            }

            this.combo ++
            this.score ++
            this.result = this.combo * 0.01 + this.score * 0.1 + this.result

            this.removeFirst()

            setTimeout(() => {
                this.key = undefined                
            }, 50);
        },

        isKey(key) {
            if(key == 37 || key == 38 || key == 39 || key == 40) {
                return true
            }

            return false
        }
    },
}
</script>

<template>
    <div>
        <input @keydown="apply" placeholder="Click to start" />

        <div class="w-full flex gap-16 items-center justify-center">
            <div class="flex-grow">
                <h1>COMBO</h1>
                <h1>SCORE</h1>
                <h1>RESULT</h1>
            </div>
            <div >
                <h1 :class="{'scale':this.key != undefined}">{{ combo }}</h1>
                <h1>{{ score }}</h1>
                <h1>{{ result.toFixed(3) }}</h1>
            </div>
        </div>
    </div>
</template>

<style scoped lang="css">
    input {
        @apply w-full h-10 border outline-none;
    }
    h1 {
        @apply font-black text-4xl;
    }
    .scale {
        animation: scale 0.1s;
    }
    @keyframes scale {
        from {
            transform: scale(150%);
        } to {
            transform: scale(100%);

        }
    }
</style>