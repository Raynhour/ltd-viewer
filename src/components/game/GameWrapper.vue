<template>
  <div class="text-left">
    <Teleport to="#header">
      <v-tabs align-tabs="center" bg-color="basil" grow class="game-tabs">
        <v-tab :to="{ name: ROUTER_NAMES.GAME_RESULT, params: { id: route.params.id } }"
          >Result</v-tab
        >
        <v-tab :to="{ name: ROUTER_NAMES.GAME_BUILD, params: { id: route.params.id } }"
          >Builds</v-tab
        >
      </v-tabs>
    </Teleport>
    <router-view :data="data" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { Game } from '@/entities/game.type'

import ROUTER_NAMES from '@/router/routerNames'

defineProps<{
  data: Game
}>()

const route = useRoute()
</script>

<style lang="scss">
.bg-basil {
  background-color: rgba(49, 62, 61, 0.85) !important;
}

.game-tabs {
  .v-tab {
    &--selected {
      .v-btn__content {
        font-weight: bold;
      }
      .v-tab__slider {
        background-color: rgb(var(--v-theme-success)) !important;
      }
    }
  }
}
</style>
