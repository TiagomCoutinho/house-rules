export const state = () => ({
	rules: {
		list: [],
		error: null
	},
	currentRule: {
		id: null,
		name: null,
		isActive: null,
		error: null
	}
})

export const getters = {
	GET_RULES_LIST(state) {
		return state.rulesList
	},
	GET_CURRENT_RULE(state) {
		return state.currentRule
	}
}

export const mutations = {
	ADD_RULE(state, id, name, isActive) {
		state.rules.list.unshift({
			id,
			name,
			isActive
		})
	},
	ADD_RULES(state, data) {
		state.rules.list = data
	},
	UPDATE_RULE(state, id, name, isActive) {
		state.rules.list.find(item => item.id == id).name = name
		state.rules.list.find(item => item.id == id).isActive = isActive
	},
	DETELE_RULE(state, id) {
		state.rules.list.filter(item => {
			return item.id != id
		})
	},
	SET_CURRENT_RULE(state, id, name, isActive) {
		state.currentRule.id = id
		state.currentRule.name = name
		state.currentRule.isActive = isActive
		state.currentRule.error = null
	},
	SET_RULES_ERROR(state, error) {
		state.rules.error = error
	},
	SET_CURRENT_RULE_ERROR(state, error) {
		state.currentRule.error = error
	}
}

export const actions = {
	GET_SINGLE_RULE({commit}, data) {
		const baseURL = process.env.apiUrl+'admin/house_rules/'+data.id
		fetch(baseURL, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${data.token}`
			}
		})
		.then(response => response.json())
		.then(result => {
			if(!result.success) {
				commit('SET_CURRENT_RULE_ERROR', result.data)
				return
			}
			commit('SET_CURRENT_RULE', {
				id: result.data.id,
				name: result.data.name,
				isActive: result.data.active
			})
		})
	},
	GET_RULES({commit}, token) {
		const baseURL = process.env.apiUrl+'admin/house_rules/'
		fetch(baseURL, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
		.then(response => response.json())
		.then(result => {
			if(!result.success) {
				commit('SET_CURRENT_RULE_ERROR', result.data)
				return
			}
			commit('SET_CURRENT_RULE', {
				id: result.data.id,
				name: result.data.name,
				isActive: result.data.active
			})
		})
	}
}