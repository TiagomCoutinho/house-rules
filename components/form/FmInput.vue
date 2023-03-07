<template>
	<label class="fm-input">
		<div
			v-if="label !== ''"
			class="fm-input__label"
		>{{ label }}</div>
		<input
			class="fm-input__text-field"
			type="text"
			:name="name"
			v-model="model"
		/>
	</label>
</template>

<script>
export default{
	name: 'FmInput',
	props: {
		label: {
			type: String
		}
	},
	computed: {
		name() {
			return this.label.toLowerCase().trim().replaceAll(' ','')
		},
		model: {
			get() {
				return this.value
			},
			set(value) {
				this.$emit('fmInput', value)
			}
		}
	}
}
</script>

<style lang="scss">
.fm-input {
	&__label {
		font-weight: 700;
		font-size: 16px;
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
		&:focus {
			border-color: #9077ff;
		}
	}
}
</style>