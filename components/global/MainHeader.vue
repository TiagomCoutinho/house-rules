<script>
export default {
	name: 'MainHeader',
	computed: {
		getEmail() {
			return this.$store.getters['currentUser/GET_EMAIL']
		}
	},
	methods: {
		logoutUser() {
			sessionStorage.removeItem('houseRulesToken')
            sessionStorage.removeItem('houseRulesEmail')
			this.$store.commit('currentUser/LOGOUT_USER')
			this.$router.push({path:'/login/'})
		}
	}
}
</script>

<template>
	<header class="gd-container main-header">
		<div class="main-header__title">House Rules</div>
		<div class="main-header__user" v-if="getEmail">
			<div>{{ getEmail }}</div>
			<div class="main-header__logout" @click="logoutUser">Logout</div>
		</div>
	</header>
</template>

<style lang="scss">
.main-header {
	display: flex;
	gap: 12px;
	align-items: center;
	padding-top: 12px;
	padding-bottom: 12px;
	&__title {
		font-size: 22px;
		font-weight: 900;
		flex-grow: 1;
	}
	&__user {
		display: flex;
		gap: 12px;
	}
	&__logout {
		color: #ff2828;
		font-weight: 700;
		cursor: pointer;
		&:hover{
			text-decoration: underline;
		}
	}
}
</style>