<template>
  <div class="text-left">
    <Teleport to="#header">
      <v-tabs :model-value="currentTab" align-tabs="center" bg-color="basil" grow class="game-tabs">
        <v-tab :value="ROUTER_NAMES.GAME_RESULT" @click.prevent="goToResult">Result</v-tab>
        <v-tab :value="ROUTER_NAMES.GAME_BUILD" @click.prevent="goToBuilds"> Builds</v-tab>
      </v-tabs>
    </Teleport>
    <router-view :data="data" />
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import type { Game } from '@/entities/game.type'

import ROUTER_NAMES from '@/router/routerNames'
import { computed } from 'vue'

defineProps<{
  data: Game
}>()

const route = useRoute()
const router = useRouter()

function goToBuilds() {
  router.replace({ name: ROUTER_NAMES.GAME_BUILD, params: { id: route.params.id } })
}

function goToResult() {
  router.replace({ name: ROUTER_NAMES.GAME_RESULT, params: { id: route.params.id } })
}

const currentTab = computed(() => {
  return route.name
})
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
