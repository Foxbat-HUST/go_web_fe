<template>
  <b-overlay :show="loadingStore.loading" rounded="sm" class="h-100 w-100">
    <Menu class="menu h-100" v-if="showMenu"></Menu>
  <div class="content h-100 flex-grow-1">
    <RouterView />
  </div>
  </b-overlay>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from '@/components/Menu.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useLoadingStore } from './stores/loading'
const loadingStore = useLoadingStore()
const showMenu = computed<boolean>(() => {
  const router = useRouter()
  switch (router.currentRoute.value.path) {
    case '/login':
      return false
    default:
      return true
  }
})
</script>

<style scoped>
.menu {
  width: 320px;
  max-width: 320px;
  min-width: 320px;
}
</style>
