<template>
<v-table class="custom-table">
    <thead>
        <tr>
            <th >#</th>
            <th>Nickname</th>
            <th>Rating</th>
            <th>Powerscore</th>
            <th>Fighter Value</th>
            <th>AVG Leak</th>
            <th>Leak Ratio</th>
            <th>Leak Caught</th>
            <th>income</th>
            <th>Spell</th>
            <th>Legion</th>

        </tr>
    </thead>
    <tr v-for="player in players" :key="player.playerId">
        <td class="text-left">{{  player.playerSlot }}</td>
        <td class="text-left">{{  player.playerName }}</td>
        <td class="text-left">{{  player.overallElo }}</td>
        <td class="text-left"> {{ player.netWorth}}</td>
        <td class="text-left">{{  player.value }}</td>
        <td class="text-left">avg leak</td>
        <td class="text-left">leak ratio</td>
        <td class="text-left">leak caught</td>
        <td class="text-left"> {{  player.income }}</td>
        <td class="text-left"> <img clas="icon" :src="iconPath(player.chosenSpell)" /></td>
        <td class="text-left"> <img class="icon" :src="mastermindIconPath(player.legion)" /> </td>
    </tr>
</v-table>
</template>

<script setup lang="ts">
import type { PlayersDataEntity } from "@/entities/game.type";

import { iconPath, mastermindIconPath} from "@/helpers/images";

defineProps<{
    players: PlayersDataEntity[]
}>()

</script>

<style scoped lang="scss">
.custom-table.custom-table {
    td, th {
        padding: 0.5rem;
    }

    th {
        font-weight: bold;
    }
}
</style>
