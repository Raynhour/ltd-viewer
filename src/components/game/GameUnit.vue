<template>
  <div class="unit" :style="unitPosition">
    <img
      v-if="hasChampion"
      :src="mastermindIconPath(MASTERMINDS.CHAMPION)"
      alt=""
      class="unit__note"
    />
    <img :src="unitIcon" alt="" />
    <v-tooltip activator="parent" location="top">
      <div>{{ unitName }}</div>
    </v-tooltip>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { mastermindIconPath } from '@/helpers/images'
import { unitCoords as _unitCoords } from '@/helpers/playerHelper'
import type { Unit } from '@/entities/units.type'
import { MASTERMINDS } from '@/consts/masterminds.enum'

const props = defineProps<{
  unit: string
  rows: number
  units: Unit[]
  championCoords: { x: number; y: number }
}>()

const unitPosition = computed(() => {
  return _unitPosition(props.unit)
})

const matchedUnit = computed(() => {
  return _unit(props.unit, props.units)
})

const unitName = computed(() => {
  return matchedUnit.value?.name
})

const unitIcon = computed(() => {
  return `${import.meta.env.VITE_IMAGES_SRC}/${matchedUnit.value?.iconPath}`
})

const hasChampion = computed(() => {
  const coords = props.championCoords
  if (
    coords.x === unitPosition.value.gridColumnStart &&
    coords.y === unitPosition.value.gridRowStart
  ) {
    return true
  }
  return false
})

function _unitPosition(unit: string) {
  const coords = _unitCoords(unit, props.rows)
  return {
    gridColumnStart: coords.x,
    gridRowStart: coords.y
  }
}

function _unit(unit: string, units: Unit[]): Unit | undefined {
  const name = unit.split(':')[0]
  const matchedUnit = units.find((unit) => unit.unitId === name)
  return matchedUnit
}
</script>

<style lang="scss" scoped>
.unit {
  cursor: pointer;
  height: calc(200% - 2px);
  margin: 1px;
  width: calc(200% - 2px);
  position: relative;
  img {
    height: 100%;
    width: 100%;
  }
  &__note {
    position: absolute;
    top: 0;
    right: 0;
    width: 50% !important;
    height: 50% !important;
  }
}
</style>
