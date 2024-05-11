<template>
  <div class="king d-flex">
    <GameIcon :unit="king" class="king__icon" />
    <div class="w-100">
      <v-progress-linear class="king__hp" color="green" :height="30" :model-value="kingHPFormatted">
        <template v-slot:default="{ value }">
          <strong>{{ Math.ceil(value) }}%</strong>
        </template>
      </v-progress-linear>
      <div class="d-flex">
        <!-- <p>{{ formattedUpgrades }}</p> -->
        <KingUpgrade
          :upgrade="upgrade"
          v-for="(upgrade, index) in formattedUpgrades"
          :key="index"
          class="king__upgrade"
        ></KingUpgrade>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import GameIcon from '../GameIcon.vue'
import { KING_UPGRADE_COUNT } from '@/consts/kingUpades.consts'
import KingUpgrade from '@/components/game/GameKingUpgrade.vue'

const props = defineProps<{
  king: string
  kingHP: number
  kingUpgrades: string[]
}>()

const formattedUpgrades = computed(() => {
  return props.kingUpgrades
    ?.map((upgrade) => {
      return upgrade?.split(' ')[2].toLocaleLowerCase()
    })
    .sort((a, b) => a.localeCompare(b))
})

const kingHPFormatted = computed(() => props.kingHP * 100)
</script>

<style lang="scss" scoped>
.king {
  &__icon {
    height: 40px;
  }
  &__upgrade {
    width: calc(100% / v-bind(KING_UPGRADE_COUNT));
    height: 10px;
  }

  &__hp {
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.6);
  }
}
</style>
