<script setup lang="ts">
import {  RouterView } from 'vue-router'
</script>

<template>
  <v-app dark class="bg-pattern">
      <router-view />
  </v-app>
</template>


<style scoped>
.bg-pattern {
  background: radial-gradient(transparent 95%, #327e48 80%);
  background-size: 5em 5em;
  background-color: #000000;
  opacity: 1
}
</style>
