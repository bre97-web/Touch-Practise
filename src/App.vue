<script>
import Next from './components/next.vue'
import Operate from './components/operate.vue'
import Header from './components/header.vue'

export default {
    components: {
        Next,
        Operate,
        Header,
    }
}
</script>


<template>
    <div class="px-8 flex flex-col">
        <header class="py-8">
            <Header />
        </header>
        <main class="overflow-clip min-h-screen">
            <router-view></router-view>
        </main>
    </div>
</template>