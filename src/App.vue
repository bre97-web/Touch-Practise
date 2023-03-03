<script>
import Header from './components/header.vue'

export default {
    components: {
        Header,
    }
}
</script>


<template>
    <div class="px-8 flex flex-col max-h-screen">
        <header class="mt-16">
            <Header />
        </header>
        <main class="overflow-hidden">
            <router-view></router-view>
        </main>
    </div>
</template>

<style lang="css">
    
    /* 不允许页面上下滑动 */
    ::-webkit-scrollbar {
        display: none;
    }
</style>