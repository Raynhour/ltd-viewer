import { describe, it, expect, vi } from 'vitest'
import { leakPercentage } from './leak'
import Values from '@/api/prefetched/values.json'
import type { IValues } from '@/entities/values'

const values: IValues = Values

describe('leak.ts', () => {
  const wave = 1
  const leak: string[] = []
  it('should return 0 when no leaks', () => {
    const result = leakPercentage(leak, wave, values)

    expect(result).toBe(0)
  })

  it('should return 100 when all leaks', () => {
    const quantity = 12
    const leak = Array(quantity).fill('Crab')

    const result = leakPercentage(leak, wave, values)

    expect(result).toBe(100)
  })

  it('should return 50 when half leaks', () => {
    const quantity = 6
    const leak = Array(quantity).fill('Crab')

    const result = leakPercentage(leak, wave, values)

    expect(result).toBe(50)
  })

  it('should return correct percentage with snail leak', () => {
    const leak = ['Snail', 'Crab', 'Crab', 'Crab']

    const result = leakPercentage(leak, wave, values)

    expect(result).toBe(33)
  })
})
