<template>
  <b-breadcrumb>
    <b-breadcrumb-item>
      <i-material-symbols-home @click="itemClick('/home')" />
    </b-breadcrumb-item>
    <b-breadcrumb-item
      v-for="item in items"
      :key="item.name"
      :active="item.active"
      @click="itemClick(item.path)"
    >
      {{ item.name }}
    </b-breadcrumb-item>
  </b-breadcrumb>
  <h1 v-if="activeItem">{{ activeItem.name }}</h1>
</template>
<script setup lang="ts">
import { computed, defineProps, type PropType } from 'vue'
import { useRouter } from 'vue-router'
export interface IItem {
  name: string
  path: string
  active?: boolean
}
const props = defineProps({
  items: {
    type: Array as PropType<IItem[]>,
    default() {
      return []
    }
  }
})
const router = useRouter()
const itemClick = (path: string) => {
  router.push(path)
}
const items = computed<IItem[]>(() => props.items)
const activeItem = computed<IItem | undefined>(() => props.items.filter((i) => i.active)?.[0])
</script>
