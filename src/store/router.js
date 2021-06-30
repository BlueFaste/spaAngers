
const state = {
	routerName: 'Home'
}
const getters = {
	getRouterName(state){
		return state.routerName
	}
}

const actions = {
	updateRouterName({commit}, data){
		commit('UPDATE_ROUTER_NAME', data)
	}
}
const mutations = {
	UPDATE_ROUTER_NAME(state, data){
		state.routerName = data
		// console.log(state.routerName)
	}

}

export default {
	state,
	getters,
	actions,
	mutations
}
