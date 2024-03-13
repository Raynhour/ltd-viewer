<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">

      <h1 class="text-h2 font-weight-bold">Search</h1>
      <v-progress-circular
        v-if="isLoading"
        color="primary"
        indeterminate="disable-shrink"
        size="50"
        width="8"
      ></v-progress-circular>
      <v-alert v-else-if="error">Sorry something went wrong</v-alert>

      <GameWrapper :data="data" v-else />
    
      
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { inject } from 'vue';
import INJECTIONS from '@/consts/injections';
import type ApiContractor from '@/contractors/api.contractor';
import GameWrapper from "@/components/game/GameWrapper.vue";
import useGame from '@/api/composables/useGame';

const api = inject(INJECTIONS.API) as ApiContractor;
const route = useRoute()

const { game } = useGame(api) 

const {isLoading, data, error } = game(route.params.id as string)

</script>
