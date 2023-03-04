<template>
    <div>
        <ul>
            <li>
                <router-link class="link" to="/infinity">Infinity</router-link>
            </li>
            <li>
                <router-link class="link" to="/limit">30s</router-link>
            </li>
            <li>
                <router-link class="link" to="/space">Space</router-link>
            </li>
            <li>
                <router-link class="link" to="/fourKey">FourKey</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="css">
    ul {
        @apply flex flex-col w-full items-center justify-center gap-4;
    }
    ul li {
        @apply w-full flex items-center justify-center;
    }
    .link {
        @apply h-16 w-32 px-4 py-2 bg-purple-500 font-bold text-white flex items-center justify-center rounded-md;
    }
</style>