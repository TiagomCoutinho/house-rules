<script>
import MainHeader from '../components/global/MainHeader.vue';

export default {
    name: "Default",
    components: { MainHeader }
}
</script>

<template>
    <main class="main-content">
        <MainHeader/>
        <Nuxt/>
    </main>
</template>

<style lang="scss">
.main-content {
    background-color: #0b0922;
    min-height: 100vh;
    color: #FFFFFF;
}
</style>