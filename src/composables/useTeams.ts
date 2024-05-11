import type { PlayersDataEntity } from '@/entities/game.type'
import { computed } from 'vue'
import type { Ref } from 'vue'

export default function useTeams(data: Ref<PlayersDataEntity[]>) {
  const firstTeam = computed(() => {
    const players = [...(data?.value ?? []).slice(0, middleIndex.value)]
    return playersWithMVP(players)
  })

  function playersWithMVP(players: PlayersDataEntity[]) {
    const highestScore = Math.max(...players.map((player) => player.mvpScore))
    return players.map((player) => {
      return {
        mvp: player.mvpScore === highestScore,
        ...player
      }
    })

    // return players
  }

  const middleIndex = computed(() => {
    return Math.ceil(data.value.length ? data.value.length / 2 : 0)
  })

  const secondTeam = computed(() => {
    const players = [...(data?.value ?? []).slice(middleIndex.value)]
    return playersWithMVP(players)
  })

  return { firstTeam, secondTeam }
}
