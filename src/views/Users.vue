<template>
    <main class="home-content content shadow">
      
    </main>
  </template>
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useAuthStore } from '@/stores/auth';
  import { UserType } from '@/models';
  import {useRouter } from 'vue-router'
  const router = useRouter()
  const userName = ref("")
  const password = ref("")
  const authStore = useAuthStore()
  const login = () => {
    console.log(userName.value)
    console.log(password.value)
    authStore.setAuthUser({
      id: 1,
      name: "pham quoc an",
      email: userName.value,
      type: UserType.Super,
    })
    router.push("/home")
  }
  </script>
  <style lang="scss" scoped>
  .home-content {
    border-radius: 20px;
    margin: 10px 30px;
  }
  </style>