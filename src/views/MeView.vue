
<template>
    <div>
        Test Rxjs
        <h2>Filter Frameworks</h2>
        <ul>
            <li v-for="item in frameworks" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref, onMounted, type Ref } from "vue"
import { interval } from "rxjs"
import { map, filter } from "rxjs/operators"

export default defineComponent({
    setup() {
        let frameworks: Ref<any[]> = ref([])
        const time = 1000

        const source = [
            { name: "VueJS", language: "js" },
            { name: "ReactJS", language: "js" },
            { name: "Laravel", language: "PHP" },
            { name: "Svelte", language: "js" },
            { name: "AngularJS", language: "js" },
            { name: "Spring", language: "java" },
            { name: "Lit", language: "js" },
            { name: "CodeIgniter", language: "PHP" },
            { name: "RiotJS", language: "js" },
        ]

        onMounted(() => {
            const jsFrameworks = interval(time).pipe(
                filter((i) => source[i].language === "js"),
                map((i) => source[i].name)
            )
            const observable$: any = jsFrameworks.subscribe(
                (value) => {
                    frameworks.value.push(value)
                },
                () => observable$.unsubscribe()
            )
        })
        return {
            frameworks,
        }
    },
})
</script>