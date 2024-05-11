<script setup lang="ts">
import { provide } from 'vue'
import { RouterView } from 'vue-router'
import auth from '@/api/initApi'
import { useQueryProvider } from 'vue-query'
import INJECTIONS from './consts/injections'

useQueryProvider()

// auth.get('https://apiv2.legiontd2.com/players/byName/raynhour')

provide(INJECTIONS.API, auth)
</script>

<template>
  <v-app dark class="bg-pattern">
    <router-view />
  </v-app>
</template>

<style scoped>
.bg-pattern {
  /* background: radial-gradient(transparent 95%, #327e48 80%); */
  /* background-size: 5em 5em;
  background-color: #000000;
  opacity: 1 */
  background-image: url('/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
