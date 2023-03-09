<script>
export default {
    name:'RulesList',
    data() {
        return {
            isRulesLoaded: false,
        }
    },
    computed: {
        getAccessToken() {
            return this.$store.getters["currentUser/GET_ACCESS_TOKEN"];
        },
        rulesList() {
            return this.$store.getters['houseRules/GET_RULES_LIST'];
        }
    },
    methods: {
        getRules() {
            this.$store.dispatch("houseRules/GET_RULES", this.getAccessToken);
        }
    }
}
</script>

<template>

</template>