<template>
  <header class="header d-flex">
    <v-btn
      variant="text"
      :to="{ name: routerNames.HOME }"
      color="orange"
      icon="mdi-arrow-left"
    ></v-btn>
    <div id="header" class="container w-100"></div>
  </header>

  <v-container class="fill-height" v-if="isLoading || error">
    <v-responsive class="text-center align-center items-center fill-height">
      <!-- <h1 class="text-h2 font-weight-bold">Search</h1> -->
      <template v-if="isLoading">
        <v-progress-circular
          color="primary"
          indeterminate="disable-shrink"
          size="50"
          width="8"
        ></v-progress-circular>
        <h2 class="text-h5">Loading Game...</h2>
      </template>
      <v-alert height="100" type="error" :closable="false" v-else-if="error"
        ><span class="text-h6 font-weight-bold">Game not found</span>
      </v-alert>
    </v-responsive>
  </v-container>
  <div class="container fill-height mt-5" v-else>
    <v-responsive class="text-center fill-height">
      <!-- <h1 class="text-h2 font-weight-bold">Search</h1> -->

      <GameWrapper :data="formattedData" />
    </v-responsive>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, inject } from 'vue'
import { useRoute } from 'vue-router'

import type ApiContractor from '@/contractors/api.contractor'

import INJECTIONS from '@/consts/injections'
import routerNames from '@/router/routerNames'
import GameWrapper from '@/components/game/GameWrapper.vue'
import useGame from '@/api/composables/useGame'

const api = inject(INJECTIONS.API) as ApiContractor
const route = useRoute()

const { game } = useGame(api)

const { isLoading, data, error } = game(route.params.id as string)

const clicked = ref(false)

const formattedData = computed(() => {
  if (!clicked.value) return data.value
  const newObj = JSON.parse(JSON.stringify(data.value))
  newObj.playersData[0].gameResult = 'lost'
  return newObj
})
</script>

<style lang="scss">
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}

.header {
  background-color: rgba(49, 62, 61, 0.85) !important;
  min-height: 50px;
}
</style>
