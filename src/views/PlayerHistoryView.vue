<template>
  <!-- <header class="header d-flex position-relative">
    <v-btn
      variant="text"
      :to="{ name: routerNames.HOME }"
      color="orange"
      icon="mdi-arrow-left"
    ></v-btn>
    <div id="header" class="container w-100"></div>
  </header> -->

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
        <h2 class="text-h5">Loading player...</h2>
      </template>
      <v-alert height="100" type="error" :closable="false" v-else-if="error"
        ><span class="text-h6 font-weight-bold title">Player not found</span>
      </v-alert>
    </v-responsive>
  </v-container>
  <div class="container fill-height mt-5" v-else>
    <v-responsive class="text-center fill-height" v-if="data">
      <!-- <p>{{ formattedData.games }}</p> -->

      <!-- <div v-intersection-observer="testEnter" v-if="!isLoading && formattedData.games.length">
        test
      </div> -->

      <div class="text-h4 text-primary title font-weight-bold">{{ playerName }} history</div>
      <game-card
        v-for="(game, index) in formattedData.games"
        :playerName="playerName"
        :game="game"
        :key="index"
      />
      <div
        v-intersection-observer="handleScroll"
        v-if="!isLoading && !isFetching && formattedData.games.length"
      >
        test
      </div>
      <v-progress-circular
        v-else-if="isFetching"
        color="primary"
        indeterminate="disable-shrink"
        size="50"
        width="8"
      ></v-progress-circular>
    </v-responsive>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import usePlayer from '@/api/composables/usePlayer'
import useDefaultApi from '@/composables/useDefaultApi'
import GameCard from '@/components/game/card/GameCard.vue'
import type { Game } from '@/entities/game.type'
import { vIntersectionObserver } from '@vueuse/components'
import type { UseQueryReturnType } from 'vue-query'
import type { InfiniteQueryObserverResult } from 'react-query/types/core'
import type { HistoryResponse } from '@/api/services/player.service'

declare type UseInfiniteQueryReturnType<TData, TError> = UseQueryReturnType<
  TData,
  TError,
  InfiniteQueryObserverResult<TData, TError>
>

const { api } = useDefaultApi()
const route = useRoute()

const { history } = usePlayer(api)
const res = history(route.query.name as string)
const { isLoading, data, error, isFetching, fetchNextPage } = res as UseInfiniteQueryReturnType<
  HistoryResponse,
  Error
>
const playerName = computed((): string => (route.query?.name || '').toString())

const formattedData = computed(() => {
  const mergedData = data.value?.pages.reduce((acc: Game[], page: HistoryResponse) => {
    page.games.forEach((game) => {
      acc = acc.concat(game)
    })
    return acc
  }, [])

  return { games: mergedData, count: 0 }
})

function handleScroll([{ isIntersecting }]: IntersectionObserverEntry[]) {
  if (isIntersecting) {
    fetchNextPage.value()
  }
}
</script>

<style lang="scss">
.container {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  display: flex;
  flex-wrap: wrap;

  .title {
    text-shadow: 0px 0px 1px #000;
  }
}

.header {
  background-color: rgba(49, 62, 61, 0.85) !important;
  min-height: 50px;
}
</style>
