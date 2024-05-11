type CreepOrMercEntry = [number, number]

export interface IValues {
  creep: {
    [key: string]: CreepOrMercEntry
  }
  merc: {
    [key: string]: CreepOrMercEntry
  }
  wave: number[]
}
