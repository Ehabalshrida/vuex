<template>
  <div class="about">
    <h1>about page</h1>
    <!-- <h2>{{ count }}</h2> -->
    <h2>{{ myCount }}</h2>
    <h3>{{increaseGet}}</h3>
    <h3>{{myName}}</h3>

<div> <button @click="increase">Increase</button><button @click="decrease">Decrease</button></div>
    </div>
    <div><button @click="()=>{changeName('hasan')}">change name</button></div>
    <div><button @click="$reset">reset</button></div>

</template>
<script>
import { useCounterStore } from '@/stores/counterStore'
import { mapState, mapActions } from 'pinia'
export default {
  computed: {
    // ...mapState(useCounterStore, ['count'])
    ...mapState(useCounterStore, {
      myCount: state => state.count,
      myName: state => state.name
    }),
    increaseGet () {
      return useCounterStore().increaseCount
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['increase', 'decrease', 'changeName', '$reset'])
  }
}
</script>
