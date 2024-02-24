<template>
  <div class="about">
    <h1>about page</h1>
    <!-- <h3>user name: {{ $store.state.usersStore.userName }}</h3>
    <h3>user age: {{ $store.state.usersStore.age }}</h3>
<input type="text" v-model="$store.state.usersStore.userName"/> -->
<h3>user name: {{ usersStore.userName }}</h3>
    <h3>user age: {{ usersStore.age }}</h3>
<input type="text" v-model="usersStore.userName"/>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['usersStore'])
  },
  mounted () {
    console.log(this.$store)
  }
}
</script>
