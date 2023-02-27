<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState('ScoreStore', {
            value: state => state.value
        }),
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
                this.value.combo = 0
                return
            }

            this.value.combo ++
            this.value.score ++
            this.value.result += this.value.combo * 0.01 + this.value.score * 0.01

            this.removeFirst()
        },

        isKey(key) {
            if(key == 37 || key == 38 || key == 39 || key == 40) {
                return true
            }

            return false
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.$refs.input.focus()
        });
    },
}
</script>

<template>
    <div>
        <input ref="input" @keydown="apply" placeholder="Click to start" />
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