<template>
  <b-modal v-model="show" :title="title" :hide-header-close="true" @hide.prevent>
    <h6>
      {{ content }}
    </h6>
    <template #footer>
      <b-button variant="secondary" size="sm" @click="buttonPress(false)"> Cancel </b-button>
      <b-button variant="primary" size="sm" @click="buttonPress(true)"> OK </b-button>
    </template>
  </b-modal>
</template>
<script setup lang="ts">
import { defineExpose, ref } from 'vue'
const title = ref<string>('')
const content = ref<string>('')
const show = ref<boolean>(false)
const modalResolver = ref<(val: boolean) => void>()
const confirm = (header: string, body: string): Promise<boolean> => {
  show.value = true
  title.value = header
  content.value = body
  return new Promise<boolean>((resolve) => {
    modalResolver.value = resolve
  })
}
const buttonPress = (val: boolean) => {
  show.value = false
  if (modalResolver.value) {
    modalResolver.value(val)
  }
}
defineExpose({
  confirm
})
</script>
