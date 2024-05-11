<template>
  <img :src="unitIcon" class="icon" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { iconPath } from '@/helpers/images'

const props = defineProps<{
  unit?: string
  icon?: string
}>()

const unitIcon = computed(() => {
  const _icon = props.icon || props.unit
  const CamelCaSeName = _icon.replace(' ', '')

  return iconPath(`${CamelCaSeName}`)
})
</script>

<style scoped>
.icon {
  height: 100%;
}
</style>
