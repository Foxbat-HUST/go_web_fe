<template>
  <img class="profile-image" :class="sizeClass" src="/src/assets/images/profile.jpg" />
</template>
<script setup lang="ts">
import { computed, defineProps, type PropType } from 'vue';
type SizeType = 'xs' | 'sm' | 'md'
const props = defineProps({
  size: {
    type: String as PropType<SizeType>,
    default(){
      return 'sm'
    }
  }
})

const sizeClass = computed(() => `size-${props.size}`)
</script>
<style scoped lang="scss">
.profile-image {
  border-style: solid;
  border-color: white;
  margin-right: 0.5rem;
}

.size-xs{
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
.size-sm{
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
.size-md{
  width: 200px;
  height: 200px;
  border-radius: 100px;
}
</style>