<script>
import FmButton from '../form/FmButton.vue';
import FmCheckbox from '../form/FmCheckbox.vue';
import FmInput from '../form/FmInput.vue';

export default {
    name: "UpdateRule",
    props: {
        selectedId: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            isRuleLoaded: false,
            rule: {
                id: "",
                name: "",
                isActive: true
            }
        };
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
        getSingleRule() {
            this.$store.dispatch("houseRules/GET_SINGLE_RULE", {
                id: this.selectedId,
                token: this.getAccessToken
            });
        },
        updateStatus(value) {
            this.rule.isActive = value
        },
        submitUpdate() {
            this.$emit('rulesUpdated')
        },
        deleteRule() {
            this.$emit('modalDelete', rule)
        }
    },
    mounted() {
        this.$store.subscribe((mutation) => {
            if (mutation.type == "houseRules/SET_SINGLE_RULE") {
                this.isRuleLoaded = true
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
        <div class="update-rule__subtitle">
            ID: {{ selectedId }}
        </div>
        <div v-if="isRuleLoaded" class="update-rule__values">
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
            <FmButton theme="action">Update</FmButton>
            <FmButton theme="alert">Delete</FmButton>
        </div>
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
}
</style>