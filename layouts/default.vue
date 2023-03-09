<script>
import MainHeader from '../components/global/MainHeader.vue';

import Vue from 'vue'
import CheckSessionId from '../mixins/checkSessionId.js'

Vue.mixin(CheckSessionId)

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