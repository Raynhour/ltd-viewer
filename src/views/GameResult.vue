<template>
<div>
    <div class="result" :class="firstTeamGameResult.isWin ? 'text-green' : 'text-red'"> {{ firstTeamGameResult.title }}</div>
    <GameTable :players="firstTeam" />
    <div class="result" :class=" secondTeamGameResult.isWin ? 'text-green' : 'text-red'">{{  secondTeamGameResult.title}}</div>
    <GameTable :players="secondTeam" />
</div>

</template>

<script setup lang="ts">
import type { Game, PlayersDataEntity } from "@/entities/game.type";
import { computed, toRefs } from "vue";


import GameTable from "@/components/game/GameTable.vue";

const props = defineProps<{
    data: Game
}>()


const { data } = toRefs(props)
const { playersData } = toRefs(data.value)

const formattedData = computed(() => {
    return playersData.value.map(player => {
        return {
            ...player,
            income: player.incomePerWave[player.incomePerWave.length - 1],
            netWorth: player.netWorthPerWave[player.netWorthPerWave.length - 1],
        }
    })
})

const firstTeam = computed( () => {
    return formattedData?.value?.slice(0, middleIndex.value)
})

const middleIndex = computed(() => {
    return Math.ceil(formattedData.value.length ? formattedData.value.length / 2 : 0)
})

const secondTeam = computed( () => {
    return formattedData?.value?.slice(middleIndex.value)
})

const firstTeamGameResult = computed(() => {
    return {
        title: firstTeam.value[0].gameResult,
        isWin: isPlayerWin(firstTeam.value[0])
    } 
})

function isPlayerWin(player: PlayersDataEntity) {
    return player.gameResult === "won"
}

const secondTeamGameResult = computed(() => {
    return {
        title: secondTeam.value[0].gameResult,
        isWin: isPlayerWin(secondTeam.value[0])
    } 
})
</script>
