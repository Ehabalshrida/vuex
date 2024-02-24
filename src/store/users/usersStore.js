export default {
  state: {
    userName: 'ali',
    age: 22

  },
  getters: {
    getUserTitle (state) {
      return {
        userTitle: 'frontend developer',
        userName: state.userName.toUpperCase()
      }
    }
  },
  mutations: {
    changeAge (state, data) {
      state.age = data
    }
  }

}
