<script>
import FmButton from '../form/FmButton.vue';
import FmCheckbox from '../form/FmCheckbox.vue';
import FmInput from '../form/FmInput.vue';

export default {
    name: "UpdateRule",
    data() {
        return {
            rule: {
                name: "",
                isActive: true
            },
            message: null
        }
    },
    computed: {
        getAccessToken() {
            return this.$store.getters["currentUser/GET_ACCESS_TOKEN"];
        },
        getCurrentRule() {
            return this.$store.getters['houseRules/GET_CURRENT_RULE'];
        }
    },
    methods: {
        updateRule() {
            this.message = null
            this.$store.dispatch("houseRules/UPDATE_SINGLE_RULE", {
                id: this.getCurrentRule.id,
                name: this.rule.name,
                isActive: this.rule.isActive,
                token: this.getAccessToken
            });
        }
    },
    mounted() {
        this.$store.subscribe((mutation) => {
            if (mutation.type == "houseRules/SET_CURRENT_RULE") {
                this.rule.name = this.getCurrentRule.name
                this.rule.isActive = this.getCurrentRule.isActive
            }
        });
        this.$store.subscribe((mutation) => {
            if (mutation.type == "houseRules/UPDATE_RULE") {
                this.message = 'Rule updated'
            }
        });
    },
    components: { FmInput, FmCheckbox, FmButton }
}
</script>

<template>
    <div class="update-rule">
        <div class="update-rule__title">
            Update rule values
        </div>
        <div v-if="getCurrentRule.isLoaded" class="update-rule__values">
            <div class="update-rule__subtitle">
                ID:<br/>
                {{ getCurrentRule.id }}
            </div>
            <FmInput
                label="Name"
                name="Rule Name"
                :defaultValue="getCurrentRule.name"
                v-model.trim="rule.name"
            />
            <FmCheckbox
                label="Is active"
                :defaultValue="getCurrentRule.isActive"
                v-model="rule.isActive"
            />
        </div>
        <div class="update-rule__values">
            <FmButton @click.native="updateRule()" theme="action">Update</FmButton>
            <FmButton theme="alert">Delete</FmButton>
        </div>
        <div class="update-rule__message" v-if="message">{{ message }}</div>
    </div>
</template>

<style lang="scss">
.update-rule {
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