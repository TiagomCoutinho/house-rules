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
        }
    },
    data() {
        return {
            defaultValues: {
                name: "A name",
                isActive: true
            },
            rule: {
                id: "0",
                name: "A name",
                isActive: true
            }
        };
    },
    methods: {
        updateName(value) {
            this.rule.name = value.trim()
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
        <div class="update-rule__values">
            <FmInput
                label="Name"
                name="Rule Name"
                :defaultValue="defaultValues.name"
                @fmInput="updateName"
            />
            <FmCheckbox
                label="Is active"
                :defaultValue="false"
                @fmInput="updateStatus"
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