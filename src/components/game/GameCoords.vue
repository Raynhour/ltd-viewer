<template>
  <slot :unitPosition="unitPosition" :hasChampion="hasChampion"></slot>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { unitCoords } from '@/helpers/playerHelper'

const props = defineProps<{
  unit: string
  rows: number
  championCoords: { x: number; y: number }
}>()

const unitPosition = computed(() => {
  const coords = unitCoords(props.unit, props.rows)
  return {
    gridColumnStart: coords.x,
    gridRowStart: coords.y
  }
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

defineExpose({
  unitPosition,
  hasChampion
})
</script>
