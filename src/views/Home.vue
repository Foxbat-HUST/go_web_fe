<script setup lang="ts">
import Intro from '@/components/home/Intro.vue';
import LoginMethod from '@/components/home/LoginMethod.vue';
</script>

<template>
  <main>
    <b-container fluid="sm">
      <b-row>
        <b-col sm="4">
          <Intro/>
        </b-col>
        <b-col>
          <LoginMethod/>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>