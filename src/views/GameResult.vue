<template>
  <div class="w-100">
    <div class="d-flex justify-space-between">
      <div class="result" :class="firstTeamGameResult.isWin ? 'text-green' : 'text-red'">
        {{ firstTeamGameResult.title }}
      </div>

      <span class="patch">{{ data.version }} </span>
    </div>
    <GameTable :players="firstTeam" :isWin="firstTeamGameResult.isWin" />
    <div class="result" :class="secondTeamGameResult.isWin ? 'text-green' : 'text-red'">
      {{ secondTeamGameResult.title }}
    </div>
    <GameTable :players="secondTeam" :isWin="secondTeamGameResult.isWin" />
  </div>
</template>

<script setup lang="ts">
import type { Game, PlayersDataEntity } from '@/entities/game.type'
import { computed, toRefs } from 'vue'

import GameTable from '@/components/game/GameTable.vue'
import useTeams from '@/composables/useTeams'

const props = defineProps<{
  data: Game
}>()

const { playersData } = toRefs(props.data)

const formattedData = computed(() => {
  return playersData.value.map((player) => {
    return {
      ...player,
      income: player.incomePerWave[player.incomePerWave.length - 1],
      netWorth: player.netWorthPerWave[player.netWorthPerWave.length - 1]
    }
  })
})

const { firstTeam, secondTeam } = useTeams(formattedData)

const firstTeamGameResult = computed(() => {
  const isWin = isPlayerWin(firstTeam.value[0])
  return {
    title: playerResultText(isWin),
    isWin
  }
})

function isPlayerWin(player: PlayersDataEntity) {
  return player.gameResult === 'won'
}

const playerResultText = (isWin: boolean) => {
  return isWin ? 'Victory!' : 'Defeat!'
}

const secondTeamGameResult = computed(() => {
  const isWin = isPlayerWin(secondTeam.value[0])

  return {
    title: playerResultText(isWin),
    isWin
  }
})
</script>
