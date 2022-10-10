<script setup lang="ts">
const props = defineProps(['color'])
// const Iclass = "bg-red-400 text-red-100 py-2 px-4 rounded-lg hover:bg-red-800"

function Iclass(color: string = "red") {
  console.log(color)
  const vclass = `bg-${color}-400 text-${color}-100 py-2 px-4 rounded-lg hover:bg-${color}-800`
  return vclass
}

</script>
<template>
  <button v-bind="$attrs" :class="Iclass(props.color)">
    <slot></slot>
  </button>
</template>