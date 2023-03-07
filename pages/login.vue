<script>
export default{
    name: 'Login',
    methods: {
        loginUser(email, password) {
            this.$store.dispatch('currentUser/LOGIN_USER', {
                email,
                password
            })
        }
    }
}
</script>

<template>
    <section class="page-login gd-container">
        Login {{ $store.state.currentUser }}
        <div @click="loginUser('task@searchandstay.com','ph37i45K')">clique para adicionar email</div>
    </section>
</template>