import type { Game } from '@/entities/game.type'
import { computed } from 'vue'

function ordinalSuffix(i) {
  const j = i % 10
  const k = i % 100
  if (i === 1) return 'MVP'
  if (j === 1 && k !== 11) {
    return i + 'st'
  }
  if (j === 2 && k !== 12) {
    return i + 'nd'
  }
  if (j === 3 && k !== 13) {
    return i + 'rd'
  }
  return i + 'th'
}

export default function useGames(game: Game) {
  const mvpScores = computed(() => {
    return game.playersData
      .map((player) => player)
      .sort((a, b) => b.mvpScore - a.mvpScore)
      .map((player, index) => {
        return {
          mvpScore: player.mvpScore,
          playerName: player.playerName,
          positionText: ordinalSuffix(index + 1)
        }
      })
  })

  return { mvpScores }
}
