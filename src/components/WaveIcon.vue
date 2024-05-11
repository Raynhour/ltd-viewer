<template>
  <img
    v-if="waveIcon"
    class="wave-icon cursor-pointer text-primary"
    :class="{ selected }"
    :src="waveIcon"
    :alt="`wave-${wave}`"
    :style="{ width, height: width }"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useInfo from '@/api/composables/useInfo'
import useDefaultApi from '@/composables/useDefaultApi'

const { api } = useDefaultApi()
const { waves: getWaves } = useInfo(api)

const props = defineProps({
  wave: {
    type: Number,
    required: true
  },
  width: {
    type: String,
    default: '30px'
  },

  selected: {
    type: Boolean,
    default: false
  }
})

const { data: waves } = getWaves()

const waveIcon = computed(() => {
  if (!waves.value) return ''
  return import.meta.env.VITE_IMAGES_SRC + '/' + waves.value[props.wave - 1].iconPath
})
</script>

<style scoped lang="scss">
.wave-icon {
  box-sizing: content-box;
  border: 2px solid #000;
  vertical-align: middle;
  transition:
    border-color,
    border-width 0.3s;
  &:hover {
    border-color: var(--v-theme-primary);
  }
  &.selected {
    border-color: var(--v-theme-primary);
  }
}
</style>
