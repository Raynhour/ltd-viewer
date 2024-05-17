<template>
  <img :src="unitIcon" class="icon" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { iconPath } from '@/helpers/images'
import { capitalizeWords } from '@/helpers/global'
const props = defineProps<{
  unit?: string
  icon?: string
}>()

const unitIcon = computed(() => {
  let _icon = props.icon || props.unit
  if (!_icon) return ''
  _icon = capitalizeWords(_icon)
  const CamelCaSeName = _icon.replace(' ', '')

  return iconPath(`${CamelCaSeName}`)
})
</script>

<style scoped>
.icon {
  height: 100%;
}
</style>
