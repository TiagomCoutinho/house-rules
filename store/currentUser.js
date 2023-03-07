export const state = () => ({
    email: null,
    error: null,
    sessionStorage: null
})

export const mutations = {
    SET_USER(state, data) {
        state.sessionStorage = data
    },
    LOGOUT_USER(state) {
        state.email = null
    }
}

export const actions = {
    LOGIN_USER({commit}, data) {
        const baseURL = process.env.apiUrl+'admin/login_json'
        fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify({
                "login": {
                    "email": data.email,
                    "password": data.password
                }
            })
        })
        .then(response => response.json())
        .then(result => {
            commit('SET_USER', result.data.result.access_token)
        })
    }
}

export const getters = {
    GET_EMAIL(state) {
        return state.email
    },
    GET_SESSIONSTORAGE(state) {
        return state.sessionStorage
    }
}