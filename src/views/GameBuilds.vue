<template>
    <div class="builds">
        <v-row>
            <v-col cols="2">
                wave
            </v-col>
            <v-col cols="8" class="align-center justify-center">
               <div> hey</div>
            </v-col>
            <v-col></v-col>
        </v-row>
        
    </div>
    </template>
    
    <script setup lang="ts">
    import type { Game } from "@/entities/game.type";
    
    defineProps<{
        data: Game
    }>()
    </script>
    