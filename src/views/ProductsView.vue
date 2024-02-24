<template>
  <!-- <div>
  <div v-if="$store.state.productsStore.products.length">
  <div v-for="product in $store.state.productsStore.products" :key="product.id">{{ product.brand }}/{{ product.category }}</div></div>
  <div v-else-if="!$store.state.productsStore.products.length"> Please Wait ...</div>
  </div> -->
  <div>
  <div v-if="productsStore.products.length">
  <div v-for="product in productsStore.products" :key="product.id">{{ product.brand }}/{{ product.category }}</div></div>
  <div v-else-if="!productsStore.products.length"> Please Wait ...</div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['productsStore'])
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  mounted () {
    // this.$store.dispatch('getProducts')
    this.getProducts()
  }

}
</script>
