<script setup lang="ts">
import KtbBtn from '@/components/button/KtbBtn.component.vue'
import { currencyTHB, currencyUSD } from '@/helpers/formatHelper'
import { reactive } from 'vue'

const num: number = 4400.333

const author = reactive({
  num2: 0
})

const company = reactive({
  employees: ['Tom', 'Sara', 'Joe'],
  managers: ['Julie', 'Jorge'],
})
console.log(company)
setTimeout(() => {
  author.num2 = num + 3.33

  console.log("ok")
}, 3000)


function onClick() {
  alert("ddd")
} 
</script>
<template>
  <div>
    <button class="ktb-btn-red">OK</button>
    <button class="ktb-btn-blue">OK</button>
    <button class="ktb-btn-green">OK</button>
    <button class="ktb-btn-white">OK</button>
    <button class="bg-red-400 text-red-100 py-2 px-4 rounded-lg hover:bg-red-800">
      ddd
    </button>
    <button class="bg-blue-400 text-blue-100 py-2 px-4 rounded-lg hover:bg-blue-800">
      <p>{{ currencyUSD(num) }}</p>
    </button>
    <button class="bg-blue-400 text-blue-100 py-2 px-4 rounded-lg hover:bg-blue-800">
      <p>{{ currencyTHB(author.num2) }}</p>
    </button>
    <KtbBtn @click="onClick">KTB</KtbBtn>
  </div>

</template>
      
