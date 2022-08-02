import { createStore } from 'vuex'

export default createStore({
  state: {
    map: null
  },
  mutations: {
    setMap(state, map) {
      state.map = map
    }
  },
  actions: {
  },
  modules: {
  }
})
