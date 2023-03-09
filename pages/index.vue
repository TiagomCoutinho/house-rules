<script>
import SearchId from '../components/form/SearchId.vue'
import RulesList from '../components/list/RulesList.vue';
import SingleRule from '../components/list/SingleRule.vue'
import ModalBG from '../components/modal/ModalBG.vue';
import UpdateRule from '../components/modal/UpdateRule.vue';

export default {
    name: "IndexPage",
    components: { SearchId, SingleRule, UpdateRule, ModalBG, RulesList },
    computed: {
        currentModal() {
            return this.$store.getters["houseRules/GET_ACTIVE_MODAL"];
        }
    },
    mounted() {
        
    }
}
</script>

<template>
    <section class="page-index gd-container">
        <SearchId />
        <RulesList/>
        <UpdateRule v-if="currentModal == 'update'"/>
        <ModalBG v-if="currentModal"/>
    </section>
</template>

<style lang="scss">
.page-index {
    &__list {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
}
</style>