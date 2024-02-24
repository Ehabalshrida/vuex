import { createStore } from 'vuex'
import productsStore from './products/productsStore'
import usersStore from './users/usersStore'

export default createStore({
  strict: true,
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: { productsStore, usersStore }
})
