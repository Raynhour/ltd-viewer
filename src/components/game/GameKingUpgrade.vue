<template>
  <span class="king-upgrade" :class="[`king-upgrade_${upgrade}`]"></span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  upgrade: string
}>()
</script>

<style lang="scss" scoped>
.king-upgrade {
  display: inline-block;
  margin-right: 1px;
  &_attack {
    background-color: red;
  }
  &_spell {
    background-color: purple;
  }
  &_regen {
    background-color: green;
  }
}
</style>
