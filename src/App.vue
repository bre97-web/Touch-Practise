<script>
import Next from './components/next.vue'
import Operate from './components/operate.vue'

export default {
    components: {
        Next,
        Operate,
    }
}
</script>


<template>
    <div class="px-8">
        <main class="overflow-clip min-h-screen">
            <Next />
            <Operate />
        </main>
    </div>
</template>