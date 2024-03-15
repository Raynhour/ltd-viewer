<template>
<div class="text-left">
        <v-tabs
            bg-color="primary"
        >
            <v-tab :to="{name: ROUTER_NAMES.GAME_RESULT, params: {id: route.params.id}}">Result</v-tab>
            <v-tab :to="{name: ROUTER_NAMES.GAME_BUILD, params: {id: route.params.id}}">Builds</v-tab>
        </v-tabs>
        <router-view :data="data" />

        <!-- <v-window v-model="tab">
            <v-window-item value="result">
                <div class="result" :class="firstTeamGameResult.isWin ? 'text-green' : 'text-red'"> {{ firstTeamGameResult.title }}</div>
                <GameTable :players="firstTeam" />
                <div class="result" :class=" secondTeamGameResult.isWin ? 'text-green' : 'text-red'">{{  secondTeamGameResult.title}}</div>
                <GameTable :players="secondTeam" />
            </v-window-item>

            <v-window-item value="builds">
                <GameBuilds :players="playersData" />
            </v-window-item>

        </v-window> -->
   
</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import type { Game } from "@/entities/game.type";

import ROUTER_NAMES from "@/router/routerNames";



 defineProps<{
    data: Game
}>()

const route = useRoute()

</script>
