<script>
import SingleRule from './SingleRule.vue';

export default {
    name: "RulesList",
    data() {
        return {
            isRulesLoaded: false,
        };
    },
    computed: {
        getAccessToken() {
            return this.$store.getters["currentUser/GET_ACCESS_TOKEN"];
        },
        rulesList() {
            return this.$store.getters["houseRules/GET_RULES_LIST"];
        }
    },
    methods: {
        getRules() {
            this.$store.dispatch("houseRules/GET_RULES", this.getAccessToken);
        },
        updateModal(id) {
            this.$store.dispatch("houseRules/GET_SINGLE_RULE", {
                id,
                token: this.getAccessToken
            });
            this.$store.dispatch("houseRules/UPDATE_ACTIVE_MODAL", "update");
            
        },
    },
    mounted() {
        this.$store.subscribe((mutation) => {
            if (mutation.type == "houseRules/SET_RULES") {
                this.isRulesLoaded = true;
            }
        });
        this.getRules();
    },
    components: { SingleRule }
}
</script>

<template>
    <div class="rules-list">
        <SingleRule
            v-for="rule in rulesList"
            :id="rule.id"
            :name="rule.name"
            :is-active="rule.isActive"
            @updateModal="updateModal"
            :key="rule.id"
        />
    </div>
</template>

<style lang="scss">
.rules-list {
    display: flex;
    gap: 12px;
    flex-direction: column;
}
</style>