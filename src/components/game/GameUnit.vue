<template>
<div class="unit" :style="unitPosition"> 
    <img :src="unitIcon" alt=""> 
    <v-tooltip
        activator="parent"
        location="top"
    >
        <div>{{ unitName }} </div>
        <p>popover</p>
    </v-tooltip>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { iconPath} from "@/helpers/images";

const props = defineProps<{
    unit: string,
    rows: number
}>()

const unitPosition = computed(() => {
    return _unitPosition(props.unit)
})

const unitName = computed(() => {
    return _unitName(props.unit)
})

const unitIcon = computed(() => {
    return iconPath(unitName.value)
})

function _unitCoords(unit: string) {
    const coordsString  = unit.split(":")[1].split("|");
    const formattedCoords = coordsString.map(coord => {
        return +coord * 2
    })

    //@NOTE the y axis in game is reversed
    const reversedY = props.rows - formattedCoords[1] + 1;
    return  {
        x: formattedCoords[0],
        y: reversedY
    }
}

function _unitPosition(unit: string) {
    const coords = _unitCoords(unit);
    return {
        gridColumnStart: coords.x,
        gridRowStart: coords.y
    }
}

function _unitName(unit: string) {

    const name = unit.split("_unit_id")[0]
    const CamelCaseName = name.split('_').map( word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join('')
    return CamelCaseName

}
</script>

<style lang="scss" scoped>
.unit {
    cursor: pointer;
    height: calc(200% - 2px);
    margin: 1px;
    width: calc(200% - 2px);
    img {
        height: 100%;
        width: 100%;
    
    }
}

</style>
