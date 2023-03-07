<template>
	<label class="fm-input">
		<div class="fm-input__label">{{ label }}</div>
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