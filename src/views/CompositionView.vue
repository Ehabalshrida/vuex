<template>
  <div class="about">
    <h1>compos page</h1>
    <!-- <h2>{{ count }}</h2> -->
    <h2>{{ count }}</h2>
    <h3>{{increaseCount}}</h3>
    <h2>{{ name }}</h2>

<div> <button @click="increase">Increase</button><button @click="decrease">Decrease</button></div>
    </div>
    <div><button @click="()=>{changeName('khaled')}">change name</button></div>
    <div><button @click="store.$reset">reset</button></div>

</template>
<script setup>
// @ is an alias to /src
// using composition api
import { useCounterStore } from '@/stores/counterStore'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { count, increaseCount, name } = storeToRefs(store)
// const increaseValue = store.increase
// const decreaseValue = store.decrease
// const changeName = store.changeName
const { increase, decrease, changeName } = store

</script>
