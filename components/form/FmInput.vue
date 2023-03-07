<script>
export default{
	name: 'FmInput',
	props: {
		name: {
			type: String,
			required: true
		},
		label: {
			type: String,
			default: ''
		},
		defaultValue: {
			type: String,
			default: ''
		}
	},
	methods: {
		updateValue(event) {
			this.$emit('fmInput', event.target.value)
		}
	},
	computed: {
		getName() {
			return this.label.toLowerCase().trim().replaceAll(' ','')
		}
	},
}
</script>

<template>
	<label class="fm-input">
		<div
			v-if="label !== ''"
			class="fm-input__label"
		>{{ label }}</div>
		<input
			class="fm-input__text-field"
			type="text"
			:name="getName"
			:value="defaultValue"
			@input="updateValue"
		/>
	</label>
</template>

<style lang="scss">
.fm-input {
	&__label {
		font-weight: 700;
		font-size: 16px;
		display: block;
	}
	&__text-field {
		padding: 8px;
		font-size: 14px;
		background-color: #1e195a;
		border: solid 2px #5028ff;
		border-radius: 4px;
		outline: none;
		color: #ffffff;
		height: 38px;
		width: 100%;
		&:focus {
			border-color: #9077ff;
		}
	}
}
</style>