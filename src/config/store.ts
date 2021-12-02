import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoged: false,
    user: null,
  },
  mutations: {
    // setUser(state, user) {
    //   state.user = user
    //   if(user) {
    //     axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
    //   } else {
    //     delete axios.defaults.headers.common['Authorization']
    //   }
    // },
    // setProdutoId(state, produtoId) {
    //   state.produtoId = produtoId
    // }
  },
  actions: {
  },
  modules: {
  }
})
