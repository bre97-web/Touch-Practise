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
            e.preventDefault()
        }
    },
    beforeUnmount() {
        document.onkeydown = null
    },
}
</script>

<template>
    <div>
        
    </div>
</template>