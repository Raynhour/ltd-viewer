<template>
  <slot :unitPosition="unitPosition" :hasChampion="hasChampion" :hasSpell="hasSpell"></slot>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { unitCoords } from '@/helpers/playerHelper'

const props = defineProps<{
  unit: string
  rows: number
  championCoords: { x: number; y: number },
  spellCoords: { x: number; y: number } | null
}>()

const unitPosition = computed(() => {
  const coords = unitCoords(props.unit, props.rows)
  return {
    gridColumnStart: coords.x,
    gridRowStart: coords.y
  }
})

const hasChampion = computed(() => {
  return hasCoords(props.championCoords)
})

const hasSpell = computed(() => {
  if(!props.spellCoords) return false
  return hasCoords(props.spellCoords)
})

function hasCoords(_coords: { x: number; y: number }) {
  
  const coords = _coords
  if (
    coords.x === unitPosition.value.gridColumnStart &&
    coords.y === unitPosition.value.gridRowStart
  ) {
    return true
  }
  return false
}

defineExpose({
  unitPosition,
  hasChampion,
  hasSpell
})
</script>
