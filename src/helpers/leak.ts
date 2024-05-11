import type { IValues } from '@/entities/values'

export function leakPercentage(leak: string[], wave: number, values: IValues) {
  const creepValues = values.creep
  const mercs = values.merc
  const waveTotal = values.wave[wave - 1]
  let leakAmount = 0

  leak.forEach((item) => {
    if (item in creepValues) {
      leakAmount += creepValues[item][1]
    } else {
      leakAmount += mercs[item][1]
    }
  })

  return Math.round((leakAmount / waveTotal) * 100)
}
