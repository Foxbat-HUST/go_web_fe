<template>
  <b-overlay :show="loadingStore.loading" rounded="sm" class="h-100 w-100 d-flex">
    <Menu class="menu h-100" v-if="showMenu"></Menu>
    <div class="content h-100 flex-grow-1">
      <RouterView />
    </div>
  </b-overlay>
  <ConfirmModal ref="confirmModel" />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from '@/components/Menu.vue'
import ConfirmModal from '@/components/common/ConfirmModal.vue'
import { ConfirmSymbol, type IConfirmModel } from '@/util/confirm'
import { computed, ref, onMounted, provide } from 'vue'
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
const confirmModel = ref<IConfirmModel>()
onMounted(() => {
  const confirm = (title: string, content: string): Promise<boolean> => {
    if (confirmModel.value) {
      return confirmModel.value?.confirm(title, content)
    }
    return Promise.reject()
  }
  provide(ConfirmSymbol, confirm)
})
</script>

<style scoped lang="scss">
.menu {
  width: 320px;
  max-width: 320px;
  min-width: 320px;
}
.content {
  padding: 1em;
}
</style>
