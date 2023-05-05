<template>
  <div class="d-flex justify-content-between w-100">
    <b-button size="lg" @click="cancelBtnClick">{{ cancelButtonLabel }}</b-button>
    <b-button size="lg" @click="okBtnClick" variant="primary">{{ okButtonLabel }}</b-button>
  </div>
</template>
<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
const props = defineProps({
  okButtonLabel: {
    type: String,
    default() {
      return 'OK'
    }
  },
  okButtonClick: {
    type: Function as PropType<() => void>
  },
  cancelButtonLabel: {
    type: String,
    default() {
      return 'Cancel'
    }
  },
  cancelButtonClick: {
    type: Function as PropType<() => void>
  }
})

const cancelBtnClick = () => {
  if (props.cancelButtonClick) {
    props.cancelButtonClick()
  }
}

const okBtnClick = () => {
  if (props.okButtonClick) {
    props.okButtonClick()
  }
}
</script>
