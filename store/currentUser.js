export const state = () => ({
    email: null,
    error: null,
    access_token: null
})

export const mutations = {
    SET_USER(state, data) {
        state.access_token = data.access_token
        state.email = data.email
    },
    LOGOUT_USER(state) {
        state.access_token = null
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
            commit('SET_USER', {
                access_token: result.data.result.access_token,
                email: data.email
            })
        })
    }
}

export const getters = {
    GET_EMAIL(state) {
        return state.email
    },
    GET_ACCESS_TOKEN(state) {
        return state.access_token
    }
}