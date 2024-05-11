<template>
  <v-container fluid class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <div class="text-body-1 font-weight-light mb-n1 tip">Legion TD 2</div>

      <h1 class="text-h2 font-weight-bold tip">Viewer</h1>

      <v-row>
        <v-col></v-col>
        <v-col cols="6" class="align-center">
          <v-text-field
            class="mt-3"
            name="search"
            color="primary"
            append-inner-icon="mdi-magnify"
            variant="solo-filled"
            label="Game ID"
            @change="search"
          />
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import ROUTER_NAMES from '@/router/routerNames'

const router = useRouter()

const search = (event: Event) => {
  const value = (event.target as HTMLInputElement).value
  if (!value) return

  router.push({ name: ROUTER_NAMES.GAME_RESULT, params: { id: value } })
}
</script>
