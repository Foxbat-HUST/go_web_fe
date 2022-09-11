<template>
    <b-container :toast="{root: true}" fluid="sm" position="position-fixed"></b-container>

    <v-card elevation="18" color="#B2E0DF" outlined>
        <v-card-title>
            Login to app:
        </v-card-title>
        <v-card-actions>
            <v-btn v-for="item in loginMethods" rounded color="primary" dark :onclick="item.action">
                {{item.name}}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script lang="ts" setup>
import { useToast } from 'bootstrap-vue-3'
import {useRouter } from 'vue-router'
interface LoginMethod {
    name: string,
    action: () => void
}
const toast = useToast()
const router = useRouter()
const loginMethods: LoginMethod[] = [
    {
        name: "With email",
        action: () => {
            console.log("gogogogog")
            router.push('/login')
        }
    },
    {
        name: "Other method",
        action: () => {
            toast?.show(
                { title: 'Error', body: 'This method not implement yes' },
                { pos: 'bottom-right', variant: 'danger' }
            )
        }
    }
]
</script>
<style scoped>

</style>