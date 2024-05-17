import type { PlayersDataEntity } from '@/entities/game.type'

export function unitCoords(unit: string, rows: number) {
  const coordsString = unit.split(':')[1].split('|')
  const formattedCoords = coordsString.map((coord) => {
    return +coord * 2
  })

  //@NOTE the y axis in game is reversed
  const reversedY = rows - formattedCoords[1]
  return {
    x: formattedCoords[0],
    y: reversedY
  }
}

export const championCoords = (
  championLocation: string,
  rows: number
): { x: number; y: number } => {
  const coords = championLocation.split('|').map((coord) => +coord * 2)
  const reversedY = rows - coords[1]
  return {
    x: coords[0],
    y: reversedY
  }
}

export function isPlayerWin(player: PlayersDataEntity) {
  return player.gameResult === 'won'
}

export const playerResultText = (isWin: boolean) => {
  return isWin ? 'Victory!' : 'Defeat!'
}

export function rankIcon(elo: number, mode: string) {
  const baseUrl = 'https://cdn.legiontd2.com'
  const ratingThresholdsRanked = [1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800]
  const ratingThresholdsClassic = [1000, 1200, 1400, 1600, 1800, 2100, 2500, 3000, 3500, 4000]
  const rankPaths = [
    '/icons/Ranks/Bronze.png', // 0: Bronze
    '/icons/Ranks/Silver.png', // 1: Silver
    '/icons/Ranks/Gold.png', // 2: Gold
    '/icons/Ranks/Platinum.png', // 3: Platinum
    '/icons/Ranks/Diamond.png', // 4: Diamond
    '/icons/Ranks/Expert.png', // 5: Expert
    '/icons/Ranks/Master.png', // 6: Master
    '/icons/Ranks/SeniorMaster.png', // 7: Senior Master
    '/icons/Ranks/Grandmaster.png', // 8: Grandmaster
    '/icons/Ranks/Legend.png' // 9: Legend
  ]

  const thresholds = mode === 'classic' ? ratingThresholdsClassic : ratingThresholdsRanked
  let rankIndex = thresholds.findIndex((threshold) => elo < threshold)
  if (rankIndex === -1) {
    rankIndex = rankPaths.length - 1 // Assign the highest rank if elo exceeds all thresholds
  }

  return baseUrl + rankPaths[rankIndex]
}
