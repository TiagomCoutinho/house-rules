export default {
    methods: {
        chooseRedirect() {
            const access_token = sessionStorage.getItem('houseRulesToken')
            const email = sessionStorage.getItem('houseRulesEmail')
            const checkToken = (access_token !== null)
            const checkEmail = (email !== null)
            if(checkToken && checkEmail) {
                this.$store.commit('currentUser/SET_USER', {
                    access_token,
                    email
                })
                this.$router.push({path:'/'})
                return
                
            }
            this.$router.push({path:'/login/'})
            
        }
    },
    mounted() {
        this.chooseRedirect()
    }
}