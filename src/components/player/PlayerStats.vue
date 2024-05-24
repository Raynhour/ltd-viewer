<template>
  <v-card class="card">
    <div>wave 1</div>
    <div>For {{ games.length}} games</div>
    <div class="stat-item">
      <div>
        <GameIcon icon="snail" />
        <span
        :class="{'text-orange': snailAtWave1Percentage > 1, 'text-red': snailAtWave1Percentage > 50}"
        >{{ snailAtWave1Percentage.toFixed(0) }}% ({{ snailAtWave1}}/{{  games.length }})</span>
      </div>
      <div class="d-flex justify-center text-center mt-2">
        <div v-for="(mastermind,index) in mostPlayedMasterminds" :key="index">
          <MastermindIcon :mastermind="mastermind[0]" width="30px" class="mr-1" />
          <div class="font-weight-bold"> {{ mastermind[1]}}</div>
        </div>
      </div>
    </div>
  </v-card>
</template>


<script setup lang="ts">
import GameIcon from '@/components/GameIcon.vue'
import type {Game} from '@/entities/game.type'
import {computed} from "vue"
import  MastermindIcon from '../MastermindIcon.vue';


const props = defineProps<{
  games: Game[]
  playerName: string
}>()

const snailAtWave1 = computed(() => {
  return props.games.reduce((acc, game) => {
    const currentPlayer = game.playersData.find(player => player.playerName.toLowerCase() === props.playerName.toLowerCase())
    if(!currentPlayer) return acc
    const isSnail = currentPlayer.mercenariesSentPerWave[0].flat().includes('Snail')
    return isSnail ? acc + 1 : acc
  }, 0)
})

const snailAtWave1Percentage = computed(() => {
  return snailAtWave1.value / props.games.length * 100
})

const mostPlayedMasterminds = computed(() => {
  const masterminds = {
    ['Megamind']: 0
  }

  const playerGameData = props.games.map(game => {
    return game.playersData.find(player => player.playerName.toLowerCase() === props.playerName.toLowerCase())
  })

  playerGameData.forEach(playerData => {
    if(playerData.megamind) {
      masterminds['Megamind']++
      return
    }
    if(playerData.legion in masterminds) {
      masterminds[playerData.legion]++
    } else {
      masterminds[playerData.legion] = 1
    }
  })
  return Object.entries(masterminds).sort((a, b) => b[1] - a[1]).slice(0, 3)
})
</script>

<style scoped lang="scss">
.card {
  padding-bottom :12px;
}
.stat-item {
  padding: 0 12px;
  img {
    width: 30px;
    vertical-align: middle;
    margin-right: 12px;
  }
}
</style>
