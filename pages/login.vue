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
    },
    mounted() {
        this.$store.subscribe((mutation) => {
            if(mutation.type == "currentUser/SET_USER") {
                console.log(mutation.payload)
                sessionStorage.setItem('houseRulesToken', mutation.payload.access_token)
                sessionStorage.setItem('houseRulesEmail', mutation.payload.email)
            }
        })
    }
}
</script>

<template>
    <section class="page-login gd-container">
        Login {{ $store.state.currentUser }}
        <div @click="loginUser('task@searchandstay.com','ph37i45K')">clique para adicionar email</div>
        <div @click="$router.push({path:'/'})">ir pra home</div>
    </section>
</template>