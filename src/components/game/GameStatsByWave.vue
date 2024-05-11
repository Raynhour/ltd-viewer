<template>
  <div class="ma-2 game-stats">
    <div class="d-flex w-100 align-center items-center game-stats__wrapper">
      <div class="stat-item d-flex align-center text-green-darken-1 mr-1">
        <GameIcon icon="Value 32" class="mr-1" />
        <span> {{ value }}</span>
      </div>
      <div class="stat-item d-flex text-blue-darken-1 align-center mr-1">
        <GameIcon icon="Worker" class="mr-1" />
        <span> {{ workers }}</span>
      </div>
      <div class="stat-item d-flex align-center text-orange-darken-1 mr-1">
        <GameIcon icon="Income" class="mr-1" />
        <span> {{ player.income }}</span>
      </div>
      <div class="stat-item d-flex align-center powerscore">
        <span> NET {{ player.powerscore }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GameIcon from '@/components/GameIcon.vue'
import type { PlayerDataByWave } from '@/entities/game.type'
import { computed } from 'vue'

const props = defineProps<{
  wave: number
  player: PlayerDataByWave
}>()

const value = computed(() => {
  return props.player.value
})

const workers = computed(() => {
  return props.player.workers % 1 === 0 ? props.player.workers : props.player.workers.toFixed(1)
})
</script>

<style scoped lang="scss">
.game-stats {
  height: 25px;
  position: relative;
  &__wrapper {
    position: absolute;
    top: 0;
  }
  .stat-item {
    img {
      width: 15px;
    }
  }

  .powerscore {
    white-space: nowrap;
  }
}
</style>
