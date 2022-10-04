<script setup lang="ts">
import router from '@/router'
import {useRoute} from 'vue-router'

const route = useRoute()
console.log("router MOne: ", router)

console.log("object", route)

function toTwo() {

  router.push({
    name: "mtwo2",
    params: {
      data: "123"
    },
    query: {
      age: 10
    },
    state: {
      test: 'bird'
    }
  })
}
</script>
<template>
  <div class="bg-blue-200">
    <h1 class="custom-shortcut">MOne</h1>
    <button @click="toTwo()" class="bg-black text-white p-2 radius border-dark-100 hover:bg-amber hover:text-black">
      to Two
    </button>
  </div>
</template>
    
    