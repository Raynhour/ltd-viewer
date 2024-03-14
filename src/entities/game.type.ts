export type queueType = "Ranked" | 'Classic'

export interface Game {
    _id: string;
    version: string;
    date: string;
    queueType: queueType;
    endingWave: number;
    gameLength: number;
    gameElo: number;
    playerCount: number;
    humanCount: number;
    spellChoices?: (string)[] | null;
    leftKingPercentHp?: (number)[] | null;
    rightKingPercentHp?: (number)[] | null;
    kingSpell: string;
    incomenchill: boolean;
    votedmode?: null;
    playersData: (PlayersDataEntity)[];
  }
  export interface PlayersDataEntity {
    playerId: string;
    playerName: string;
    playerSlot: number;
    legion: string;
    workers: number;
    value: number;
    cross: boolean;
    gameResult: string;
    classicElo: number;
    overallElo: number;
    eloChange: number;
    fighters: string;
    eco: boolean;
    mercenaries: string;
    stayedUntilEnd: boolean;
    chosenSpell: string;
    chosenSpellLocation: string;
    partySize: number;
    firstWaveFighters: string;
    rolls: string;
    legionSpecificElo: number;
    partyMembers?: (string)[] | null;
    partyMembersIds?: (string)[] | null;
    mvpScore: number;
    netWorthPerWave: (number)[];
    valuePerWave?: (number)[] | null;
    workersPerWave?: (number)[] | null;
    incomePerWave: (number)[];
    mercenariesSentPerWave?: ((string | null)[] | null)[] | null;
    mercenariesReceivedPerWave?: ((string | null)[] | null)[] | null;
    leaksPerWave?: ((string | null)[] | null)[] | null;
    buildPerWave?: ((string)[] | null)[] | null;
    leakValue: number;
    leaksCaughtValue: number;
    leftAtSeconds: number;
    kingUpgradesPerWave?: ((string | null)[] | null)[] | null;
    opponentKingUpgradesPerWave?: ((string | null)[] | null)[] | null;
    megamind: boolean;
    chosenChampionLocation: string;
  }
  