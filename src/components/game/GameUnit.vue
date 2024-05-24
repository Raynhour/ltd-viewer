<template>
  <div class="unit">
    <img
      v-if="hasChampion"
      :src="mastermindIconPath(MASTERMINDS.CHAMPION)"
      alt=""
      class="unit__note"
    />
    <GameIcon :icon="spell" class="unit__note unit__note_spell" v-if="hasSpell" />
    <img :src="unitIcon" alt="" />
    <v-tooltip content-class="unit-popover" activator="parent" location="top" v-if="matchedUnit">
      <div class="unit-stat d-flex">
        <img :src="unitIcon" alt="" />
        <div>{{ unitName }}</div>
      </div>
      <div class="unit-stat d-flex">
        <GameIcon :icon="matchedUnit.attackType" />
        <div>{{ matchedUnit.attackType }}</div>
      </div>
      <div class="unit-stat d-flex">
        <GameIcon :icon="matchedUnit.armorType" />
        <div>{{ matchedUnit.armorType }}</div>
      </div>
      <div class="unit-stat d-flex">
        <GameIcon icon="Health" />
        <div>{{ matchedUnit.hp }}</div>
      </div>
      <div class="unit-stat d-flex">
        <GameIcon  icon="Damage" />
        <div>{{ matchedUnit.dps }}</div>
      </div>
      <div class="unit-stat d-flex" v-if="+matchedUnit.attackRange > 100">
        <GameIcon  icon="Range" />
        <div>{{ matchedUnit.attackRange }}</div>
      </div>
      <div class="unit-stat d-flex" v-if="matchedUnit.totalValue">
        <GameIcon  icon="Gold" />
        <div>{{ matchedUnit.totalValue }}</div>
      </div>
      <div class="unit-stat d-flex" v-if="matchedUnit.mythiumCost">
        <GameIcon  icon="Gold" />
        <div>{{ matchedUnit.mythiumCost }}</div>
      </div>
    </v-tooltip>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { mastermindIconPath } from '@/helpers/images'
import { unitCoords as _unitCoords } from '@/helpers/playerHelper'
import type { Unit } from '@/entities/units.type'
import { MASTERMINDS } from '@/consts/masterminds.enum'
import GameIcon from '../GameIcon.vue'
import { match } from 'assert'

const props = defineProps<{
  unit: string
  units: Unit[]
  hasChampion: boolean,
  spell?: string,
  hasSpell?: boolean
}>()

const matchedUnit = computed(() => {
  return _unit(props.unit, props.units)
})

const unitName = computed(() => {
  return matchedUnit.value?.name
})

const unitIcon = computed(() => {
  return `${import.meta.env.VITE_IMAGES_SRC}/${matchedUnit.value?.iconPath}`
})

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
    &_spell {
      left: 0;
      right: initial;
    }
  }
  &-stat {
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      max-width: 15px;
      margin-right: 10px;
      vertical-align: middle;
    }
  }
}


</style>

<style>
.unit-popover {
  background: rgba(63, 61, 61, 0.9) !important;
  color: #fff !important;
}</style>
