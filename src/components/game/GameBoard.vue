<template>
  <div class="test">
    <div class="game-board">
      <GameCoords
        :championCoords="championCoords"
        :unit="unit"
        :rows="rows"
        v-for="unit in build"
        :key="unit"
      >
        <template #default="{ unitPosition, hasChampion }">
          <GameUnit
            :champion-location="championLocation"
            :unit="unit"
            :units="Units"
            :style="unitPosition"
            :has-champion="hasChampion"
          />
        </template>
      </GameCoords>
    </div>
  </div>
</template>

<script setup lang="ts">
import GameUnit from './GameUnit.vue'
import GameCoords from './GameCoords.vue'
import Units from '@/api/prefetched/units.json'
import { championCoords as _championCoords } from '@/helpers/playerHelper'

const props = defineProps<{
  build: string[] | null
  championLocation: string
}>()

const rowsReal = 14
const rows = rowsReal * 2
const columnsReal = 9
const columns = columnsReal * 2

const championCoords = _championCoords(props.championLocation, rows)
</script>

<style lang="scss" scoped>
.game-board {
  width: calc(100% - 1px);
  aspect-ratio: 9/14;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: repeat(v-bind(rows), calc(100% / v-bind(rows)));
  grid-template-columns: repeat(v-bind(columns), calc(100% / v-bind(columns)));
  background-size: calc(100% / v-bind(columnsReal)) calc(100% / v-bind(rowsReal));
  border-right: 1px solid rgba(0, 0, 0, 0.6);
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  background-image: linear-gradient(to right, rgba(red, 0.6) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(red, 0.6) 1px, transparent 1px);
  margin-top: 0.5%;
  background-repeat: repeat;
}
</style>
