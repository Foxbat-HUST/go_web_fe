<template>
  <Header :items="headerItems"></Header>
  <div>this is user page</div>
</template>
<script setup lang="ts">
import Header, { type IItem } from '@/components/Header.vue'
import type { User } from '@/model/user'
import { ref, onMounted } from 'vue'
import { UserApi } from '@/api/userApi'
import { useLoadingStore } from '@/stores/loading'
const headerItems = ref<Array<IItem>>([
  {
    name: 'Users',
    path: '/users',
    active: true
  }
])
const loadingStore = useLoadingStore()
const userApi = UserApi.getInstance()
const users = ref<Array<User>>([])
const userCount = ref<number>(0)
onMounted(async () => {
  try {
    loadingStore.showLoading()
    const res = await userApi.list({
      pageIndex: 1,
      itemPerPage: 20
    })
    users.value = res.user
    userCount.value = res.count
  } catch (e) {
    console.log(e)
  } finally {
    loadingStore.hideLoading()
  }
})
</script>
