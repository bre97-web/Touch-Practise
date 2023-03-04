<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
    computed: {
        ...mapGetters('TouchStore', ['get']),
    },
}
</script>

<template>

    <div class="w-screen relative left-1/2 -ml-16">
        <div class="absolute right-0 top-0 h-full w-full z-50 bg-gradient-to-r from-transparent via-slate-50 to-white blur-md">12</div>
        <ul>
            <li v-for="e in get">
                <i class="material-icons" :class="{'bg-green-200': e == 37, 'bg-red-200': e == 38, 'bg-yellow-200': e == 39, 'bg-blue-200': e == 40}">
                    {{ 
                    e == 37 ? 
                        'keyboard_arrow_left' :
                        e == 38 ? 
                            'arrow_upward' : 
                            e == 39 ? 
                                'keyboard_arrow_right' :
                                e == 40 ?
                                    'arrow_downward' :
                                    'trip_origin'
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
        transition: all 0.05s;
    }
    i {
        @apply bg-opacity-25;
    }
    li i {
        @apply w-16 h-16 flex items-center justify-center rounded-sm;
    }

    ul li:nth-child(1) i {
        @apply w-24 h-24 bg-opacity-100 border rounded-xl mx-2;
    }
    ul li:nth-child(2) i {
        @apply w-20 h-20 bg-opacity-75 rounded-md;
    }
    ul li:nth-child(3) i {
        @apply bg-opacity-50 rounded-md;
    }
</style>