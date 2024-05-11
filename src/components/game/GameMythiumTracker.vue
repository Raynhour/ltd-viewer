<template>
  <span class="mythium">
    {{ totalMythium }}
    <GameIcon unit="mythium" />
  </span>
</template>

<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import GameIcon from '@/components/GameIcon.vue'
import useUnits from '@/composables/useUnits'
import type { Unit } from '@/entities/units.type'

const props = defineProps<{
  recevieSend: string[]
}>()

const { unit } = useUnits()

const totalMythium = ref(0)

watchEffect(() => {
  const mythium = props.recevieSend.reduce((acc, curr) => {
    try {
      const unitStat = unit(curr)
      if ('mythiumCost' in unitStat) {
        return acc + +unitStat.mythiumCost
      }
      return acc
    } catch (error) {
      return 0
    }
  }, 0)
  totalMythium.value = mythium
})
</script>

<style scoped lang="scss">
.mythium {
  white-space: nowrap;
  img {
    vertical-align: middle;
  }
}
</style>
