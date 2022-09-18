
<template>
    <div>
        Test Rxjs Ajax
        <ul>
            <li v-for="item in name" :key="item">{{ item.login }}</li>
        </ul>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, ref, type Ref } from "vue"
import { ajax } from 'rxjs/ajax'
import { map, catchError, of } from 'rxjs'

export default defineComponent({
    setup() {
        let name: Ref<any[]> = ref([])
        const obs$ = ajax('https://api.github.com/users?per_page=5').pipe(
            map(userResponse => {
                console.log('users: ', userResponse)
                const { response } = userResponse
                return response
            }),
            catchError(error => {
                console.log('error: ', error)
                return of(error)
            })
        )

        onMounted(() => {
            const dd = typeof obs$
            console.log("typeof", dd)
            obs$.subscribe({
                next: value => {
                    console.log(value)
                    name.value = value
                },
                error: err => console.log(err)
            })
        })
        return {
            name,
        }
    },
})
</script>