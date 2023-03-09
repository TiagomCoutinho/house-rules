<script>
import FmButton from '../form/FmButton.vue';

export default {
    name: "DeleteRule",
    computed: {
        getAccessToken() {
            return this.$store.getters["currentUser/GET_ACCESS_TOKEN"];
        },
        getCurrentRule() {
            return this.$store.getters['houseRules/GET_CURRENT_RULE'];
        }
    },
    methods: {
        deleteRule() {
            this.message = null
            this.$store.dispatch("houseRules/DELETE_SINGLE_RULE", {
                id: this.getCurrentRule.id,
                token: this.getAccessToken
            });
        }
    },
    components: { FmButton }
}
</script>

<template>
    <div class="delete-rule">
        <div class="delete-rule__title">
            Are you sure you want to delete the rule
        </div>
        <div v-if="getCurrentRule.isLoaded" class="delete-rule__subtitle">
            {{ getCurrentRule.name }}
        </div>
        <div v-if="getCurrentRule.isLoaded" class="delete-rule__values">
            <FmButton @click.native="updateRule()" theme="delete">Delete</FmButton>
            <FmButton theme="alert"></FmButton>
        </div>
        <div class="delete-rule__message" v-if="message">{{ message }}</div>
    </div>
</template>

<style lang="scss">
.delete-rule {
    z-index: 2;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    max-width: 600px;
    width: calc(100% - 32px);
    background-color: #1e195a;
    padding: 16px;
    border-radius: 16px;
    &__title {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 8px;
    }
    &__subtitle {
        margin-bottom: 24px;
    }
    &__values {
        margin-top: 12px;
        display: flex;
        gap: 12px;
        .fm-input {
            flex-grow: 1;
        }
        .fm-button {
            flex-grow: 1;
        }
    }
    &__message {
        color: #000000;
        text-transform: capitalize;
        margin-top: 12px;
        width: 135px;
        margin-left: auto;
        margin-right: auto;
        padding: 4px 16px;
        border-radius: 4px;
        background-color: #42fa70;
    }
}
</style>