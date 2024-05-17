<template>
  <v-table class="custom-table">
    <thead>
      <tr :class="{ win: isWin, lost: !isWin }">
        <th>#</th>
        <th>Nickname</th>
        <th>Rating</th>
        <th>Powerscore</th>
        <th>Fighter Value</th>
        <!-- <th>AVG Leak</th> -->
        <!-- <th>Leak Ratio</th>
        <th>Leak Caught</th> -->
        <th>Income</th>
        <th>Spell</th>
        <th>Legion</th>
      </tr>
    </thead>
    <tr v-for="player in players" :key="player.playerId">
      <td class="text-left">{{ player.playerSlot }}</td>
      <td class="text-left">
        {{ player.playerName }}
        <span class="text-warning font-weight-bold" v-if="player.mvp">[MVP]</span>
      </td>
      <td class="text-left">{{ player.overallElo }}</td>
      <td class="text-left">{{ player.netWorth }}</td>
      <td class="text-left">{{ player.value }}</td>
      <!-- <td class="text-left">avg leak</td> -->
      <!-- <td class="text-left">leak ratio</td>
      <td class="text-left">leak caught - {{ player.legion }}</td> -->
      <td class="text-left">{{ player.income }}</td>
      <td class="text-left"><img clas="icon" :src="iconPath(player.chosenSpell)" /></td>
      <td class="text-left">
        <MastermindIcon :mastermind="player.legion" :is-megamind="player.megamind" />
      </td>
    </tr>
  </v-table>
</template>

<script setup lang="ts">
import type { PlayersDataEntity } from '@/entities/game.type'
import MastermindIcon from '../MastermindIcon.vue'
import { iconPath } from '@/helpers/images'

defineProps<{
  players: PlayersDataEntity[]
  isWin: boolean
}>()
</script>

<style scoped lang="scss">
.custom-table.custom-table {
  td,
  th {
    padding: 0.5rem;
  }

  th {
    font-weight: bold;
  }

  .win {
    th {
      background-color: rgba(var(--v-theme-success), 1);
    }
  }

  .lost {
    th {
      background-color: rgba(#f44336, 1);
    }
  }
}
</style>
