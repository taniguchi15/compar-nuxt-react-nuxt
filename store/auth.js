export const state = () => ({
  login: false,
  userId: ''
})

export const mutations = {
  login(state, userId){
    state.login = true
    state.userId = userId
  },
  logout(state) {
    state.login = false
    state.userId = ''
  }
}

export const actions = {
  login(context, {userId}){
    context.commit('login', userId)
  },
  logout(context) {
    context.commit('logout')
  }
}