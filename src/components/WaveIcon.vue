<template>
    <img class="wave-icon cursor-pointer text-primary" :class="{selected}" :src="waveIcon" :alt="`wave-${wave}`" :style="{width, height: width}" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import waves from '../../cypress/fixtures/waves.json';
const props = defineProps({
    wave: {
        type: Number,
        required: true
    },
    width: {
        type: String,
        default: "30px"
    },

    selected: {
        type: Boolean,
        default: false
    }
})

const waveIcon = computed(() => {
    return import.meta.env.VITE_IMAGES_SRC + '/' + waves[props.wave - 1].iconPath
})
</script>

<style scoped lang="scss">
.wave-icon {
    box-sizing:content-box;
    border: 2px solid #000;
    transition: border-color, border-width 0.3s;
    &:hover {
        border-color: var(--v-theme-primary);
    }
    &.selected {
        border-color: var(--v-theme-primary);
    }
}
</style>
