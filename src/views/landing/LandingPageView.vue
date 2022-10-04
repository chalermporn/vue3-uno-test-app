<script setup lang="ts">
import KtbBtn from '@/components/button/KtbBtn.component.vue'
import formatHelper from '@/helpers/formatHelper'
// import { inject } from 'vue'
// const $filters = inject('$filters')
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
      <p>{{ formatHelper.currencyUSD(200) }}</p>
    </button>
    <button class="bg-blue-400 text-blue-100 py-2 px-4 rounded-lg hover:bg-blue-800">
      <p>{{ $filters.price(400) }}</p>
    </button>
    <KtbBtn @click="onClick">KTB</KtbBtn>
  </div>

</template>
      
