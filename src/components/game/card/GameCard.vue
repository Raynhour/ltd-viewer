<template>
  <router-link
    :to="{ name: routerNames.GAME_RESULT, params: { id: game._id } }"
    class="game-card text-left"
    :class="{ 'game-card_win': result.isWin }"
  >
    <div class="game-card__main-info game-card-item">
      <WaveIcon width="50px" :wave="game.endingWave" class="game-card__main-icon" />
      <div>
        <div
          :class="{
            'text-green': result.isWin,
            'text-red': !result.isWin
          }"
        >
          {{ result.title }}
        </div>
        <div class="game-card__text game-card-item d-flex">
          {{ game.queueType }}
          <div
            class="ml-1"
            :class="{
              'text-green': searchedPlayer.eloChange >= 0,
              'text-red': searchedPlayer.eloChange < 0
            }"
          >
            ({{ eloChange }})
          </div>
        </div>
        <div class="game-card__text">wave {{ game.endingWave }}</div>
        <div class="game-card__text">{{ date }}</div>
      </div>
    </div>
    <div class="game-card-item">
      <GameStats :wave="game.endingWave" :player="stats" />
      <div class="game-card__text">
        <GameIcon icon="Worker After 10" class="game-card__icon" />
        {{ searchedPlayer.workersPerWave[9] }}
      </div>
      <div class="game-card__text">
        <GameIcon icon="Alpha Top 10" class="game-card__icon" />
        {{ playerScore }}
      </div>
    </div>
    <div class="game-info">
      <div class="game-card__text d-flex">
        Opening:
        <GameUnit
          v-for="(unit, index) in searchedPlayer.buildPerWave[0]"
          :key="index"
          :unit="unit"
          :units="Units"
          :has-champion="false"
          class="game-card__icon ml-1"
        />
      </div>
      <div class="game-card__text">
        Legion:
        <MastermindIcon
          width="15px"
          :is-megamind="searchedPlayer.megamind"
          :mastermind="searchedPlayer.legion"
        />
      </div>
      <div class="game-card__text">
        Spell:
        <GameIcon class="game-card__icon" :icon="searchedPlayer.chosenSpell" />
      </div>
    </div>
    <div class="game-teams d-flex justify-start">
      <div class="game-team mr-5">
        <div
          class="game-player game-card__text"
          v-for="player in firstTeam"
          :key="player.playerName"
        >
          <img
            :src="rankIcon(isClassic ? player.classicElo : player.overallElo, game.queueType)"
            class="game-card__icon"
          />
          {{ player.playerName }}
        </div>
      </div>
      <div class="game-team">
        <div
          class="game-player game-card__text"
          v-for="player in secondTeam"
          :key="player.playerName"
        >
          <img
            :src="rankIcon(isClassic ? player.classicElo : player.overallElo, game.queueType)"
            class="game-card__icon"
          />
          {{ player.playerName }}
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import WaveIcon from '@/components/WaveIcon.vue'
import GameIcon from '@/components/GameIcon.vue'
import GameUnit from '../GameUnit.vue'
import GameStats from '../GameStats.vue'
import MastermindIcon from '../../MastermindIcon.vue'
import { queueTypeEnum, type Game, type PlayersDataEntity } from '@/entities/game.type'
import { DefaultPlayerData } from '@/entities/game.type'
import { computed } from 'vue'
import { isPlayerWin, playerResultText, rankIcon } from '@/helpers/playerHelper'
import useDateAdapter from '@/composables/useDateAdapter'
import useGames from '@/composables/useGames'
import Units from '@/api/prefetched/units.json'
import useTeams from '@/composables/useTeams'
import routerNames from '@/router/routerNames'

const props = defineProps<{
  game: Game
  playerName: string
}>()

const searchedPlayer = computed((): PlayersDataEntity => {
  const player = props.game.playersData?.find(
    (player) => player.playerName.toLocaleLowerCase() === props.playerName.toLocaleLowerCase()
  )
  return player || new DefaultPlayerData()
})

const result = computed(() => {
  const isWin = isPlayerWin(searchedPlayer.value)
  return {
    title: playerResultText(isWin),
    isWin
  }
})

const date = useDateAdapter(props.game.date).daysAgo()
const stats = computed(() => {
  return {
    value: searchedPlayer.value.value,
    workers: searchedPlayer.value.workers,
    income: searchedPlayer.value.incomePerWave[searchedPlayer.value.incomePerWave.length - 1]
  }
})

const { mvpScores } = useGames(props.game)

const playerScore = computed(() => {
  return mvpScores.value.find((score) => score.playerName.toLocaleLowerCase() == props.playerName.toLocaleLowerCase())?.positionText
})

// TODO: refactor useTeams to accept not reactive data
const players = computed(() => {
  return props.game.playersData
})

const { firstTeam, secondTeam } = useTeams(players)

const isClassic = computed(() => {
  return props.game.queueType === queueTypeEnum.Classic
})

const eloChange = computed((): string => {
  if (searchedPlayer.value.eloChange > 0) return `+${searchedPlayer.value.eloChange}`
  return searchedPlayer.value.eloChange.toString()
})
</script>

<style lang="scss" scoped>
.game-card {
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  margin: 16px 0;
  padding: 16px;
  display: flex;
  font-size: 12px;
  border-radius: 6px;
  position: relative;
  text-decoration: none;
  &:first-child {
    margin-top: 0px;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 6px;
    background-color: #f44336;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  &_win {
    &::after {
      background-color: #43a047;
    }
  }

  &__text {
    color: #f2f0f0a8;
  }
  &__main-info {
    display: flex;
    margin-right: 16px;
  }
  &__main-icon {
    height: 100%;
    width: 100%;
    margin-right: 16px;
  }

  &__icon {
    width: 15px;
    vertical-align: middle;
  }
  &-item {
    width: 25%;
  }
}

.game-info {
  width: 20%;
}

.game-teams {
  width: 30%;
}

.game-team {
  white-space: nowrap;
  width: 50%;
}
</style>
