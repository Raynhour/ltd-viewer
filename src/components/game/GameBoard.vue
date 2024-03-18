<template>
    <div class="test">
        <div class="game-board">
            <GameUnit
                v-for="unit in build"
                :key="unit"
                :unit="unit"
                :rows="rows"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import GameUnit from "./GameUnit.vue"

defineProps<{
    build: string[] | null
}>()

// function generateGrid(rows: number, columns: number) {
//     const grid = [];
//     for (let y = 1; y <= rows; y++) {
//         for (let x = 1; x <= columns; x++) {
//             grid.push({ x: x, y: y });
//         }
//     }
//     return grid;
// }


const rowsReal = 14;
const rows = rowsReal * 2;
const columnsReal = 9;
const columns = columnsReal * 2;

</script>

<style lang="scss" scoped>

.game-board {
    width: calc(100% - 1px);
    aspect-ratio: 9/14;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-rows: repeat(v-bind(rows), calc(100% / v-bind(rows)));
    grid-template-columns: repeat(v-bind(columns), calc(100% / v-bind(columns)));
    background-size: calc(100%/v-bind(columnsReal)) calc(100%/v-bind(rowsReal));
    border-right: 1px solid rgba(0, 0, 0, 0.6);
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    background-image:
            linear-gradient(to right, rgba(red, 0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(red, 0.6) 1px, transparent 1px);
    margin-top: 0.5%;
    background-repeat: repeat;
}


</style>
