export const state = () => ({
    rulesList: []
})

export const getters = {
    GET_RULES(state) {
        return state.rulesList
    }
}

export const mutations = {
    ADD_RULE(state, id, name, isActive) {
        state.rulesList.unshift({
            id,
            name,
            isActive
        })
    },
    UPDATE_RULE(state, id, name, isActive) {
        state.rulesList.find(item => item.id == id).name = name
        state.rulesList.find(item => item.id == id).isActive = isActive
    },
    DETELE_RULE(state, id) {
        state.rulesList.filter(item => {
            return item.id != id
        })
    }
}