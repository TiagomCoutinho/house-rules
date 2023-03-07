<script>
import FmButton from '../form/FmButton.vue';

export default {
    name: "SingleRule",
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    components: { FmButton },
    computed: {
        statusMessage() {
            return this.isActive ? 'Active' : 'Inactive'
        }
    },
    methods: {
		updateModal() {
			this.$emit('updateModal', this.id)
		},
        deleteModal() {
			this.$emit('deleteModal', this.id)
		}
	},
}
</script>

<template>
    <div :id="'rule-'+id" class="single-rule">
        <div class="single-rule__text">
            <span class="single-rule__id">#{{ id }}</span>
            <span class="single-rule__name">{{ name }}</span>
            <span
                :class="{'single-rule__status--active': isActive}"
                class="single-rule__status"
            >
                {{ statusMessage }}
            </span>
        </div>
        <div class="single-rule__buttons-container">
            <FmButton @click.native="updateModal" theme="action">Update</FmButton>
            <FmButton @click.native="deleteModal" theme="alert">Delete</FmButton>
        </div>
    </div>
</template>

<style lang="scss">
.single-rule {
    background-color: #1e195a;
    border-radius: 16px;
    padding: 16px;
    display: flex;
    &__text {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 12px;
    }
    &__id {
        opacity: .5;
    }
    &__name {
        font-size: 18px;
        line-height: 38px;
        font-weight: 900;
        text-transform: uppercase;
    }
    &__status {
        font-size: 10px;
        display: block;
        padding: 4px;
        border: solid 1px #a8a8a8;
        color: #a8a8a8;
        border-radius: 4px;
        height: 22px;
        line-height: 12px;
        &--active {
            border-color: #42fa70;
            background-color: #42fa70;
            color: #1e195a;
        }
    }
    &__buttons-container {
        display: flex;
        gap: 12px;
    }
}
</style>