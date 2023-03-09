<script>
import FmButton from '../components/form/FmButton.vue';
import FmInput from '../components/form/FmInput.vue'

export default{
    name: "Login",
    data() {
        return {
            userEmail: '',
            userPassword: ''
        }
    },
    computed: {
        getError() {
            return this.$store.getters["currentUser/GET_ERROR"];
        }
    },
    methods: {
        loginUser() {
            this.$store.dispatch("currentUser/LOGIN_USER", {
                email: this.userEmail,
                password: this.userPassword
            });
        },
    },
    mounted() {
        this.$store.subscribe((mutation) => {
            if (mutation.type == "currentUser/SET_USER") {
                sessionStorage.setItem("houseRulesToken", mutation.payload.access_token);
                sessionStorage.setItem("houseRulesEmail", mutation.payload.email);
                this.$router.push({ path: "/" });
            }
        });
    },
    components: { FmInput, FmButton }
}
</script>

<template>
    <section class="page-login gd-container">
        <div class="page-login__box">
            <div class="page-login__title">Login</div>
            <FmInput label="Email" name="email" type="email" v-model="userEmail"/>
            <FmInput label="Password" name="password" type="password" v-model="userPassword"/>
            <div class="page-login__button" @click="loginUser">
                <FmButton theme="action">Submit</FmButton>
            </div>
            <div class="page-login__error" v-if="getError">ERROR: {{ getError }}</div>
        </div>
    </section>
</template>

<style lang="scss">
.page-login {
    .fm-button{
        width: 100%;
    }
    &__box {
        max-width: 400px;
        width: calc(100% - 32px);
        margin-left: auto;
        margin-right: auto;
        background-color: #1e195a;
        padding: 16px;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    &__title {
        text-align: center;
        font-weight: 700;
        font-size: 24px;
    }
    &__error {
        color: #ffffff;
        text-transform: capitalize;
        display: inline-block;
        margin-left: auto;
        margin-right: auto;
        padding: 4px 16px;
        border-radius: 4px;
        background-color: #ff2828;
    }
}
</style>