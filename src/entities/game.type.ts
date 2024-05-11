export type queueType = 'Ranked' | 'Classic'

export interface Game {
  _id: string
  version: string
  date: string
  queueType: queueType
  endingWave: number
  gameLength: number
  gameElo: number
  playerCount: number
  humanCount: number
  spellChoices?: string[] | null
  leftKingPercentHp: number[]
  rightKingPercentHp: number[]
  kingSpell: string
  incomenchill: boolean
  votedmode?: null
  playersData: PlayersDataEntity[]
}
export interface PlayersDataEntity {
  playerId: string
  playerName: string
  playerSlot: number
  legion: string
  workers: number
  value: number
  cross: boolean
  gameResult: string
  classicElo: number
  overallElo: number
  eloChange: number
  fighters: string
  eco: boolean
  mercenaries: string
  stayedUntilEnd: boolean
  chosenSpell: string
  chosenSpellLocation: string
  partySize: number
  firstWaveFighters: string
  rolls: string
  legionSpecificElo: number
  partyMembers?: string[] | null
  partyMembersIds?: string[] | null
  mvpScore: number
  mvp?: boolean
  netWorthPerWave: number[]
  valuePerWave: number[]
  workersPerWave: number[]
  incomePerWave: number[]
  mercenariesSentPerWave: string[]
  mercenariesReceivedPerWave: string[]
  leaksPerWave: string[][]
  buildPerWave: (string[] | null)[]
  leakValue: number
  leaksCaughtValue: number
  leftAtSeconds: number
  kingUpgradesPerWave: string[]
  opponentKingUpgradesPerWave: string[]
  megamind: boolean
  chosenChampionLocation: string
  income?: number
  netWorth?: number
}

export interface PlayerDataByWave {
  playerId: string
  build: string[] | null
  mercenaries: string
  kingsUpgrades: string
  leaks: string[]
  value: number
  receiveSend: string[]
  workers: number
  income: number
  powerscore: number
  rolls: string
  leak: any
  chosenChampionLocation: string
}
