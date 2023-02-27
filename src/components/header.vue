<template>
    <div>
        <nav class="fixed top-0 left-0 border flex justify-between w-full px-4 py-2 bg-white bg-opacity-25 backdrop-blur-xl">
            <h1 class="font-black text-2xl">Touch Practise</h1>

            <div>
                <router-link to="/" class="link">Home</router-link>
            </div>
        </nav>
    </div>
</template>

<style scoped lang="css">
    .link {
        @apply font-medium;
    }
</style>