<script>
export default {
	name: 'MainHeader',
	computed: {
		isUserActive() {
			return this.$store.getters.GET_EMAIL == true
		}
	}
}
</script>

<template>
	<header class="gd-container">
		<h1>House Rules</h1>
		<div v-if="isUserActive">
			{{ $store.getters.GET_EMAIL }}
			<div>Logout</div>
		</div>
	</header>
</template>