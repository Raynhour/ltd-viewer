<template>
<div class="builds">
    <v-row>
        <v-col cols="2">
            wave
        </v-col>
        <v-col cols="8" class="align-center">
           board
        </v-col>
        <v-col></v-col>
    </v-row>
    
</div>
</template>

<script setup lang="ts">
import type {PlayersDataEntity } from "@/entities/game.type";


defineProps<{
    players: PlayersDataEntity[]
}>()
</script>
