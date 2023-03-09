export const state = () => ({
	rules: {
		list: [],
		error: null
	},
	currentRule: {
		id: null,
		name: null,
		isActive: null,
		error: null,
		isLoaded: false
	},
	activeModal: null
})

export const getters = {
	GET_RULES_LIST(state) {
		return state.rules.list
	},
	GET_CURRENT_RULE(state) {
		return state.currentRule
	},
	GET_ACTIVE_MODAL(state) {
		return state.activeModal
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
	UPDATE_RULE(state, data) {
		state.rules.list.find(item => item.id == data.id).name = data.name
		state.rules.list.find(item => item.id == data.id).isActive = data.isActive
	},
	DETELE_RULE(state, id) {
		state.rules.list.filter(item => {
			return item.id != id
		})
	},
	SET_CURRENT_RULE(state, data) {
		state.currentRule.id = data.id
		state.currentRule.name = data.name
		state.currentRule.isActive = data.isActive
		state.currentRule.error = null
		state.currentRule.isLoaded = true
	},
	RESET_CURRENT_RULE(state) {
		state.currentRule.id = null
		state.currentRule.name = null
		state.currentRule.isActive = null
		state.currentRule.error = null
		state.currentRule.isLoaded = false
	},
	SET_RULES(state, data) {
		state.rules.list = data
	},
	SET_RULES_ERROR(state, error) {
		state.rules.error = error
	},
	SET_CURRENT_RULE_ERROR(state, error) {
		state.currentRule.error = error
	},
	SET_ACTIVE_MODAL(state, data) {
		state.activeModal = data 
	}
}

export const actions = {
	GET_SINGLE_RULE({commit}, data) {
		commit('RESET_CURRENT_RULE')
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
			const isActive = result.data.active ? true : false
			commit('SET_CURRENT_RULE', {
				id: result.data.id,
				name: result.data.name,
				isActive,
				error: null,
				isLoaded: true
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
			const rules = []
			result.data.entities.forEach(rule => {
				const isActive = rule.active ? true : false
				rules.push({
					id: rule.id,
					name: rule.name,
					isActive
				})
			});
			commit('SET_RULES', rules)
		})
	},
	UPDATE_ACTIVE_MODAL({commit}, modal) {
		commit('SET_ACTIVE_MODAL', modal)
	},
	UPDATE_SINGLE_RULE({commit}, data) {
		const active = data.isActive ? 1 : 0
		const baseURL = process.env.apiUrl+'admin/house_rules/'+data.id
		fetch(baseURL, {
			method: 'PUT',
			body: JSON.stringify({
				"house_rules": {
					name: data.name,
					active
				}
			}),
			headers: {
				'Authorization': `Bearer ${data.token}`
			}
		})
		.then(response => response.json())
		.then(result => {
			const isActive = result.data.active ? true : false
			commit('UPDATE_RULE', {
				id: result.data.id,
				name: result.data.name,
				isActive
			})
		})
	}
}