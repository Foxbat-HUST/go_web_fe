<template>
  <v-app>
    <v-main class="app-main">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  data () {
    return {
      //
    }
  },
})
</script>
<style scoped >
.app-main{
  background: var(--color-background-soft);
  display: flex;
}
</style>
