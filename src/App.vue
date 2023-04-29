<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from '@/components/Menu.vue'
</script>

<template>
  <Menu class="menu" ></Menu>
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>
.menu{
  width: 320px;
  max-width: 320px;
  min-width: 320px;
}
</style>
