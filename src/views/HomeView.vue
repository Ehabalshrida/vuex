<template>
  <h2>Home Page</h2>
  <!-- <h3>user name: {{ $store.state.userName }}</h3> -->
  <!-- <h3>user age: {{ $store.state.usersStore.age }}</h3> -->
  <h3>user age: {{ usersStore.age }}</h3>

<hr>
<!-- <h3>{{this.$store.getters.getUserTitle.userTitle}}</h3>
<h3>{{this.$store.getters.getUserTitle.userName}}</h3> -->
<h3>{{getUserTitle.userTitle}}</h3>
<h3>{{getUserTitle.userName}}</h3>
<!-- <div><button @click="$store.commit('changeAge',40)">change age</button></div> -->
<div><button @click="changeAge(50)">change age</button></div>

</template>

<script>
// @ is an alias to /src
import { mapState, mapGetters, mapMutations, useStore } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getUserTitle']),
    ...mapState(['usersStore'])
  },
  methods: {
    ...mapMutations(['changeAge'])
  },
  mounted () {
    const store = useStore()
    console.log({ StoreMethode: store })
    console.log(this.$store)
  }
}
</script>
