import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'ali'
  }),
  getters: {
    increaseCount () {
      return this.count + 1
    },
    changeState () {
      return { ...this.$state, id: 1 }
    }
  },
  actions: {
    increase () {
      return this.count++
    },
    decrease () {
      return this.count--
    },
    changeName (name) {
      this.name = name
    }
  }
})
