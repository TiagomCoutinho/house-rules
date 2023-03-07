<script>
import MainHeader from '../components/global/MainHeader.vue';

export default {
    name: "Default",
    components: { MainHeader }
}
</script>

<template>
    <main>
        <MainHeader/>
        <Nuxt/>
    </main>
</template>