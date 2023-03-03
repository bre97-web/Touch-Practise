<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
    computed: {
        ...mapState('ScoreStore', {
            value: state => state.value
        }),
        ...mapGetters('TouchStore', ['getFirst']),
    },
    methods: {
        ...mapActions('TouchStore', ['removeFirst']),

        /**
         * 传入一个键盘事件的keyCode。
         * @param {Nuumber} e 
         */
        apply(e) {
            if(!this.isKey(e)) {
                return
            }

            if(e != this.getFirst) {
                this.value.combo = 0
                return
            }

            this.value.combo ++
            this.value.score ++
            this.value.result += this.value.combo * 0.01 + this.value.score * 0.01

            this.removeFirst()
        },

        /**
         * 如果参数可以映射为键盘上的 Left、Up、Right、Down、Space则返回true。
         * @param {Number} key 
         * @returns Boolean
         */
        isKey(key) {
            if(key == 37 || key == 38 || key == 39 || key == 40 || key == 32) {
                return true
            }

            return false
        }
    },
    mounted() {
        document.onkeydown = (e) => {
            
            if(this.isKey(e.keyCode)) {
                this.apply(e.keyCode)
            }
            //e.preventDefault()
        }
    },
    beforeUnmount() {
        document.onkeydown = null
    },
}
</script>

<template>
    <!-- 渐变背景 -->
    <div class="w-full max-w-md h-full blur-3xl max-h-96 rounded-xl -z-10 absolute top-0 left-0 bg-colorful move" :class="{'bg-green-200': getFirst == 37, 'bg-red-200': getFirst == 38, 'bg-yellow-200': getFirst == 39, 'bg-blue-200': getFirst == 40}">
        
    </div>
</template>

<style scoped lang="css">
    .bg-colorful {
        transition: all 1s;
        @apply bg-opacity-25;
    }

    .move {
        animation: moveAn 120s infinite;
    }
    @keyframes moveAn {
        from {
            left: 0%;
            top: 20%;
        } 30% {
            left: 50%;
            top: 50%;
        } 60% {
            left: 70%;
            top: 30%;
        } to {
            left: 0%;
            top: 20%;
        }
    }
</style>