import type ApiContractor from '@/contractors/api.contractor'
import Values from '@/api/prefetched/values.json'
import Waves from '@/api/prefetched/waves.json'
import type { Wave } from '@/entities/wave.type'

export interface InfoServiceContractor {
  values: <ResT>(id: string) => Promise<ResT> | Error
}

export default class InfoService implements InfoServiceContractor {
  api: ApiContractor
  constructor(api: ApiContractor) {
    this.api = api
  }

  async values<ResT>(): Promise<ResT> {
    return new Promise((resolve) => {
      resolve(Values as ResT)
    })
  }

  async waves(): Promise<Wave[]> {
    return new Promise((resolve) => {
      const sortedWaves = Waves.sort((acc, curr) => +acc.levelNum - +curr.levelNum)
      resolve(sortedWaves)
    })
  }
}
