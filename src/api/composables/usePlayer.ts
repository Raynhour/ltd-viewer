import { useInfiniteQuery } from 'vue-query'
import type ApiContractor from '@/contractors/api.contractor'
import PlayerService from '@/api/services/player.service'

export default (api: ApiContractor) => {
  const playerService = new PlayerService(api)

  const history = (name: string) => {
    return useInfiniteQuery(
      ['history', name],
      (param) => {
        return playerService.history(name, param)
      },
      {
        getNextPageParam: (lastPage: { prevOffset: number; articleCount: number }) => {
          if (lastPage.prevOffset + 10 > lastPage.articleCount) {
            return false
          }

          return lastPage.prevOffset + 10
        },
        retry: 0,
        refetchOnWindowFocus: false, // Disable refetching on window focus
        refetchOnReconnect: false
      }
    )
  }

  return { history }
}
