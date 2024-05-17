<template>
  <div class="builds">
    <v-row class="justify-center">
      <v-col cols="2">
        <GameKing :kingHP="firstTeamKingHP" :kingUpgrades="firstKingUpgrades" king="EarthKing" />
      </v-col>
      <v-col class="text-center text-yellow-darken-1">
        <div>
          <span class="mr-2 font-weight-bold">Wave {{ wave }}</span>
          <WaveIcon
            :wave="_wave"
            v-for="_wave in data.endingWave"
            :selected="wave === _wave"
            :key="_wave"
            @click="selectWave(_wave)"
          />
        </div>
      </v-col>
      <v-col cols="2"
        ><GameKing :kingHP="secondTeamKingHP" :kingUpgrades="secondKingUpgrades" king="SkyKing"
      /></v-col>
    </v-row>

    <div class="boards mt-3">
      <v-table class="table">
        <thead>
          <tr>
            <th width="11%"></th>
            <th
              width="21%"
              :style="{ color: `var(--player${player.playerSlot})` }"
              v-for="player in playersData"
              :key="player.playerId"
            >
              <img class="mastermind" :src="mastermindIconPath(player.legion)" />

              {{ player.playerName }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="fighters">
            <td>Fighters</td>
            <td v-for="player in currentWave" :key="player.playerId">
              <GameStats :wave="wave" :player="player" />
              <GameBoard :build="player.build" :champion-location="player.chosenChampionLocation" />
            </td>
          </tr>
          <tr>
            <td class="cell-receive">Mercenaries received</td>
            <td class="cell-receive" v-for="player in currentWave" :key="player.playerId">
              <div class="receive">
                <template v-if="player.receiveSend.length">
                  <TotalMythium class="mr-1" :recevieSend="player.receiveSend" />
                  <span>
                    <GameIcon
                      class="unit"
                      v-for="(mercenary, index) in player.mercenaries"
                      :key="index"
                      :unit="mercenary"
                    />
                  </span>
                  <span>
                    <GameIcon
                      class="unit"
                      v-for="(upgrade, index) in player.kingsUpgrades"
                      :key="index"
                      :unit="upgrade"
                    />
                  </span>
                </template>
              </div>
            </td>
          </tr>
          <tr>
            <td class="cell-leaks">Leaks</td>
            <td class="cell-leaks" v-for="player in currentWave" :key="player.playerId">
              <div class="leaks">
                <template v-if="player.leaks.length">
                  <span class="leak-percentage ma-2 text-red-darken-1 font-weight-bold"
                    >{{ player.leak }} %</span
                  >
                  <span>
                    <GameIcon
                      class="unit"
                      v-for="(mercenary, index) in player.leaks"
                      :key="index"
                      :unit="mercenary"
                    />
                  </span>
                </template>
              </div>
            </td>
          </tr>
        </tbody>
      </v-table>
      <p class="text-grey-lighten-2 tip text-center">
        You can you arrows to navigate &#8679; &#8681;
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PlayerDataByWave, type Game, type PlayersDataEntity } from '@/entities/game.type'

import { computed, watchEffect, toRefs, ref, onBeforeUnmount, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import GameIcon from '@/components/GameIcon.vue'
import GameBoard from '@/components/game/GameBoard.vue'
import WaveIcon from '@/components/WaveIcon.vue'
import TotalMythium from '@/components/game/GameMythiumTracker.vue'
import GameKing from '@/components/game/GameKing.vue'
import useTeams from '@/composables/useTeams'
import GameStats from '@/components/game/GameStats.vue'
import useInfo from '../api/composables/useInfo'
import type ApiContractor from '@/contractors/api.contractor'
import injections from '@/consts/injections'
import { leakPercentage } from '@/helpers/leak'
import { mastermindIconPath } from '@/helpers/images'

const props = defineProps<{
  data: Game
}>()

const route = useRoute()
const router = useRouter()
const api = inject(injections.API) as ApiContractor

const { playersData } = toRefs(props.data)

const wave = ref(route.query.wave ? +route.query.wave : 1)

watchEffect(() => {
  const _wave = route.query.wave
  wave.value = _wave ? +_wave : 1
})

const { values } = useInfo(api)

const { data: _values, isLoading } = values()
const currentWave = computed<PlayerDataByWave[]>(() => {
  return playersData.value.map((player) => {
    const _wave = wave.value - 1
    return {
      playerId: player.playerId,
      build: player.buildPerWave[_wave],
      mercenaries: player.mercenariesReceivedPerWave[_wave],
      kingsUpgrades: player.opponentKingUpgradesPerWave[_wave],
      leaks: [...player.leaksPerWave[_wave]],
      value: player.valuePerWave[_wave],
      leak:
        isLoading.value || !player.leaksPerWave[_wave].length
          ? 0
          : leakPercentage(player.leaksPerWave[_wave], wave.value, _values.value),
      receiveSend: [
        ...player.mercenariesReceivedPerWave[_wave],
        ...player.opponentKingUpgradesPerWave[_wave]
      ],
      workers: player.workersPerWave[_wave],
      income: player.incomePerWave[_wave],
      powerscore: player.netWorthPerWave[_wave],
      chosenChampionLocation: player.chosenChampionLocation,
      rolls: player.rolls
    }
  })
})

const firstKingUpgrades = computed(() => {
  return kingUpgrades(firstTeam.value)
})

function kingUpgrades(team: PlayersDataEntity[]) {
  // data only until current waveß
  const kingUpgrades = team
    .map((player) => {
      return player.kingUpgradesPerWave.slice(0, wave.value)
    })
    .reduce((acc: string[], curr: string[]) => {
      return [...acc, ...curr]
    }, [])
    .flat()

  return kingUpgrades
}

const secondKingUpgrades = computed(() => {
  return kingUpgrades(secondTeam.value)
})

const firstTeamKingHP = computed(() => {
  return kingHPOnSelectedWave(props.data.leftKingPercentHp)
})

function kingHPOnSelectedWave(kingHP: number[]) {
  return kingHP[wave.value - 1]
}

const secondTeamKingHP = computed(() => {
  return kingHPOnSelectedWave(props.data.rightKingPercentHp)
})

function selectWave(selectedWave: number) {
  router.replace({ query: { wave: selectedWave } })
}

const changeWave = (e: KeyboardEvent) => {
  if (e.key === 'ArrowUp') {
    e.preventDefault()
    if (wave.value === props.data.endingWave) return
    selectWave(wave.value + 1)
  } else if (e.key === 'ArrowDown') {
    e.preventDefault()
    if (wave.value === 1) return
    selectWave(wave.value - 1)
  }
}

onBeforeUnmount(() => {
  window.removeEventListener('keydown', changeWave)
})

window.addEventListener('keydown', changeWave)

const { firstTeam, secondTeam } = useTeams(playersData)
</script>

<style scoped lang="scss">
.builds {
  td:not(:last-child),
  th:not(:last-child) {
    border-right: 1px solid grey;
  }

  .mastermind {
    vertical-align: middle;
    height: 20px;
  }

  .fighters {
    background-color: rgba(0, 0, 0, 0.5);
  }

  th {
    background: rgba(49, 62, 61, 0.85);
  }

  .table {
    background-color: rgba(0, 0, 0, 0.5);
  }
}

.unit {
  width: 20px;
  vertical-align: middle;
}

.cell-receive {
  background-color: rgba(62, 144, 130, 0.5);

  .receive {
    min-height: 50px;
  }
}

.cell-leaks {
  background: rgba(144, 62, 62, 0.5);
  .leaks {
    min-height: 50px;
  }
}

.leaks,
.receive {
  display: flex;
  align-items: center;
}

.leak-percentage {
  white-space: nowrap;
  text-shadow: 2px -1px rgba(0, 0, 0, 1);
}

.tip {
  font-size: 0.8rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
}
</style>
