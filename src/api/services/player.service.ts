import { PATH } from '@/consts/apiPath.const'
import type ApiContractor from '@/contractors/api.contractor'
import type { Game } from '@/entities/game.type'
import type { Pagination } from '@/entities/pagination.type'

export interface HistoryResponse {
  games: Game[]
  prevOffset: number
}

interface queryPagination {
  pageParam?: number
}

export interface PlayerServiceContractor {
  history: (name: string, params: queryPagination) => Promise<HistoryResponse | Error>
}

export default class PlayerService implements PlayerServiceContractor {
  api: ApiContractor
  constructor(api: ApiContractor) {
    this.api = api
  }

  async history(name: string, { pageParam = 0 }: queryPagination): Promise<HistoryResponse> {
    const params = {
      limit: 15,
      offset: pageParam
    }
    const res = (await this.api.get(PATH.PLAYER.HISTORY(name), { params })) as Game[]
    return { games: res, prevOffset: pageParam }
  }
}
