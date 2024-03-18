<template>
    <div class="builds">
        <v-row>
            <v-col cols="2">
                wave
            </v-col>
            <v-col cols="8" class="align-center justify-center">
               <div> hey</div>
            </v-col>
            <v-col>

            </v-col>
        </v-row>

        <v-row class="justify-center">
            <v-col class="text-center " >
                Wave {{ wave }}
                <WaveIcon :wave="_wave" v-for="_wave in data.endingWave" :selected="wave === _wave" :key="_wave" @click="selectWave(_wave)" />
            </v-col>
        </v-row>

        <div class="boards">
            <v-table>
                <thead>
                    <tr>
                        <th width="11%"></th>
                        <th width="21%" v-for="player in playersData" :key="player.playerId">{{ player.playerName }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="fighters">
                        <td>Fighters</td>
                        <td v-for="player in currentWave" :key="player.playerId" > <GameBoard :build="player.build"  /></td>
                    </tr>
                    <tr>
                        <td class="bg-green-darken-4">Mercenaries received</td>
                        <td class="bg-green-darken-4" v-for="player in currentWave" :key="player.playerId">{{ player.mercenaries }}</td>
                    </tr>
                    <tr>
                        <td class="bg-red-darken-4">Leaks</td>
                        <td class="bg-red-darken-4" v-for="player in currentWave" :key="player.playerId">{{ player.mercenaries }}</td>
                    </tr>

                </tbody>
            </v-table>
        </div>
        
    </div>
 </template>
    
<script setup lang="ts">
import type { Game } from "@/entities/game.type";

import { computed, watchEffect, toRefs, ref, onBeforeUnmount } from "vue";
import GameBoard from "@/components/game/GameBoard.vue";
import WaveIcon from "@/components/WaveIcon.vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps<{
    data: Game
}>()

const route = useRoute();
const router = useRouter();

const { data } = toRefs(props)
const { playersData } = toRefs(data.value)

const wave = ref(route.query.wave ? +route.query.wave : 1)

watchEffect(() => {
    const _wave = route.query.wave
    return _wave ? +_wave : 1
})


const currentWave = computed(() => {
    return playersData.value.map(player => {
        return {
            playerId: player.playerId,
            build: player.buildPerWave[wave.value - 1],
            mercenaries: player.mercenariesReceivedPerWave[wave.value - 1]
        }
    })
})

function selectWave(selectedWave: number) {
    router.push({query: {wave: selectedWave}})
}

// change wave by click on arrow up and down with remove after unmount
const changeWave = (e: KeyboardEvent) => {
    if (e.key === "ArrowUp") {
        e.preventDefault();
        if(wave.value === props.data.endingWave) return
        selectWave(wave.value + 1)
    } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if(wave.value === 1) return
        selectWave(wave.value - 1);
    }
}

onBeforeUnmount(() => {
    window.removeEventListener("keydown", changeWave)
})

window.addEventListener("keydown", changeWave)

</script>
    
<style scoped lang="scss">
.builds { 
    td:not(:last-child), th:not(:last-child) {
        border-right: 1px solid grey;
    }

    .fighters {
        background-color: #000;
    }

    
}
</style>
