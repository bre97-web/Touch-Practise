<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('TouchStore', ['get']),
    },
    methods: {
        ...mapActions('TouchStore', ['create', 'addition']),
    },
    beforeMount() {
        this.create(64)
    },
    beforeUpdate() {
        if(this.get.length <= 12) {
            this.addition(32)
        }
    }
}
</script>

<template>

    <div>
        <ul>
            <li v-for="e in get">
                <i class="material-icons" :class="{'bg-green-200': e == 37, 'bg-red-200': e == 38, 'bg-yellow-200': e == 39, 'bg-blue-200': e == 40}">
                    {{ 
                    e == 37 ? 'keyboard_arrow_left' : e == 38 ? 'arrow_upward' : e == 39 ? 'keyboard_arrow_right' : 'arrow_downward'   
                    }}
                </i>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="css">
    ul {
        @apply flex items-center justify-start;
    }
    ul li {
        @apply flex items-center justify-center mx-1 rounded-sm;
    }

    ul,
    li,
    i {
        transition: all 0.1s;
    }
    i {
        @apply bg-opacity-25;
    }
    li i {
        @apply w-16 h-16 flex items-center justify-center;
    }

    ul li:nth-child(1) i {
        @apply w-24 h-24 flex bg-opacity-100 border rounded-xl mx-2;
    }
    ul li:nth-child(2) i {
        @apply w-20 h-20 flex bg-opacity-75 rounded-md;
    }
</style>