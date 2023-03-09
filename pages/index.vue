<script>
import SearchId from '../components/form/SearchId.vue'
import SingleRule from '../components/list/SingleRule.vue'
import ModalBG from '../components/modal/ModalBG.vue';
import UpdateRule from '../components/modal/UpdateRule.vue';

export default {
    name: "IndexPage",
    components: { SearchId, SingleRule, UpdateRule, ModalBG },
    data() {
        return {
            modalStatus: {
                update: false,
                delete: false
            },
            selectedId: 0
        }
    },
    computed: {
        hasModalActive() {
            return this.modalStatus.update || this.modalStatus.delete
        }
    },
    methods: {
        closeAllModal() {
            this.modalStatus = {
                update: false,
                delete: false
            }
        },
        updateModal(id) {
            this.closeAllModal()
            this.selectedId = id
            this.modalStatus.update = true
        }
    },
    mounted() {
        
    }
}
</script>

<template>
    <section class="page-index gd-container">
        <SearchId />
        <div class="page-index__list">
            <SingleRule @updateModal="updateModal" name="Nome" id="0"/>
            <SingleRule @updateModal="updateModal" name="Nome" id="1"/>
            <SingleRule @updateModal="updateModal" name="Nome" id="2" :is-active="false"/>
        </div>
        <UpdateRule
            v-if="modalStatus.update"
            :selected-id="selectedId"
        />
        <ModalBG @closeAllModal="closeAllModal" v-if="hasModalActive"/>
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