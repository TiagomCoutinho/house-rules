<script>
export default {
	name: 'MainHeader',
	computed: {
		getEmail() {
			return this.$store.getters['currentUser/GET_EMAIL']
		}
	}
}
</script>

<template>
	<header class="gd-container">
		<div>House Rules</div>
		<div v-if="getEmail">
			{{ getEmail }}
			<div>Logout</div>
		</div>
	</header>
</template>

<style lang="scss">

</style>