<template>
  <v-app>
    <v-main class="app-main">
      <SideBarVue v-if="isAuthed"/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import SideBarVue from './components/SideBar.vue';
import { useAuthStore } from './stores/auth';
import { storeToRefs } from 'pinia';
const {isAuthed} = storeToRefs(useAuthStore())
</script>
<style scoped lang="scss">
.app-main{
  background: var(--color-background-soft);
  display: flex;
}
</style>
