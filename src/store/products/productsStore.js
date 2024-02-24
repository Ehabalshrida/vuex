export default {
  state: {
    products: []
  },
  mutations: {
    fillProducts (state, data) {
      state.products = data
    }
  },
  actions: {
    getProducts (context) {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => {
          console.log(json.products)
          return context.commit('fillProducts', json.products)
        })
    }
  }
}
