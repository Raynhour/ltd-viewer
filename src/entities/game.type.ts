export enum queueTypeEnum {
  Ranked = 'Normal',
  Classic = 'Classic'
}
export interface Game {
  _id: string
  version: string
  date: string
  queueType: queueTypeEnum
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

export interface PlayerStats {
  value: number
  workers: number
  income?: number
  powerscore?: number
}

export interface PlayerDataByWave extends PlayerStats {
  playerId?: string
  build?: string[] | null
  mercenaries?: string
  kingsUpgrades?: string
  leaks?: string[]
  receiveSend?: string[]
  rolls?: string
  leak?: any
  chosenChampionLocation?: string
}

export class DefaultPlayerData implements PlayersDataEntity {
  playerId: string = ''
  playerName: string = ''
  playerSlot: number = 0
  legion: string = ''
  workers: number = 0
  value: number = 0
  cross: boolean = false
  gameResult: string = ''
  classicElo: number = 0
  overallElo: number = 0
  eloChange: number = 0
  fighters: string = ''
  eco: boolean = false
  mercenaries: string = ''
  stayedUntilEnd: boolean = true
  chosenSpell: string = ''
  chosenSpellLocation: string = ''
  partySize: number = 0
  firstWaveFighters: string = ''
  rolls: string = ''
  legionSpecificElo: number = 0
  partyMembers: string[] | null = null
  partyMembersIds: string[] | null = null
  mvpScore: number = 0
  mvp: boolean | undefined = undefined
  netWorthPerWave: number[] = []
  valuePerWave: number[] = []
  workersPerWave: number[] = []
  incomePerWave: number[] = []
  mercenariesSentPerWave: string[] = []
  mercenariesReceivedPerWave: string[] = []
  leaksPerWave: string[][] = []
  buildPerWave: (string[] | null)[] = []
  leakValue: number = 0
  leaksCaughtValue: number = 0
  leftAtSeconds: number = 0
  kingUpgradesPerWave: string[] = []
  opponentKingUpgradesPerWave: string[] = []
  megamind: boolean = false
  chosenChampionLocation: string = ''
  income: number | undefined = undefined
  netWorth: number | undefined = undefined
}
