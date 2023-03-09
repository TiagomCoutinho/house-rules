<script>
export default{
	name: 'FmCheckbox',
	props: {
		label: {
			type: String,
			default: ''
		},
		defaultValue: {
			type: Boolean,
			default: false
		}
	},
    data() {
        return {
            currentValue: false
        }
    },
	methods: {
		updateValue() {
            this.currentValue = !this.currentValue
			this.$emit('input', this.currentValue)
		}
	},
    mounted() {
        this.currentValue = this.defaultValue
    }
}
</script>

<template>
	<div class="fm-checkbox" @click="updateValue">
		<div
			v-if="label !== ''"
			class="fm-input__label"
		>{{ label }}</div>
		<div :class="{'fm-checkbox__input--active': currentValue}" class="fm-checkbox__input">
            <div></div>
        </div>
    </div>
</template>

<style lang="scss">
.fm-checkbox {
	&__label {
		font-weight: 700;
		font-size: 16px;
		display: block;
	}
    &__input {
        cursor: pointer;
        height: 38px;
        border: solid 2px #5028ff;
        border-radius: 38px;
        width: 70px;
        background-color: #ff2828;
        position: relative;
        transition: background-color ease-out 50ms;
        > div {
            width: 28px;
            height: 28px;
            border-radius: 28px;
            background-color: #ffffff;
            position: absolute;
            top: 3px;
            left: 3px;
            transition: left ease-out 50ms, background-color ease-out 50ms;
        }
        &--active {
            background-color: #42fa70;
            > div{
                left: calc(100% - 31px);
                background-color: #0b0922;
            }
        }
    }
}
</style>