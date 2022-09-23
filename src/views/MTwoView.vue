<script setup lang="ts">
import router from '@/router'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log("router router: ", router)
console.log("router route: ", route)

console.log("route.fullPath:", route.fullPath)
console.log("route.hash:", route.hash)
console.log("route.matched:", route.matched)
console.log("route.meta:", route.meta)
console.log("route.name:", route.name)
console.log("route.params:", route.params)
console.log("route.path:", route.path)
console.log("route.query:", route.query)
console.log("route.redirectedFrom:", route.redirectedFrom)

function toTwo() {

  router.push({
    name: "mone", state: {
      id: 'bird'
    }
  })
}
</script>
<template>
  <div class="bg-blue-200">
    <h1 class="custom-shortcut">MTwo</h1>
    <button @click="toTwo()" class="bg-black text-white p-2 radius border-dark-100 hover:bg-amber hover:text-black">
      to One
    </button>
  </div>
</template>
    
    