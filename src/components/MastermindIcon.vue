<template>
  <span class="icon">
    <img :style="{ width }" class="icon__img" :src="mastermindIconPath(mastermind)" />
    <img v-if="isMegamind" class="icon__megamind" :src="mastermindIconPath(MASTERMINDS.MEGAMIND)" />
  </span>
</template>

<script lang="ts" setup>
import { mastermindIconPath } from '@/helpers/images'
import { MASTERMINDS } from '@/consts/masterminds.enum'

const props = defineProps<{
  mastermind?: string
  isMegamind?: boolean
  width: number | string
}>()
</script>

<style scoped lang="scss">
.icon {
  position: relative;
  display: inline-block;
  &__megamind {
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 50%;
  }
}
</style>
