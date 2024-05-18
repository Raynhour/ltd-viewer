import { useInfiniteQuery } from 'vue-query'
import type ApiContractor from '@/contractors/api.contractor'
import PlayerService from '@/api/services/player.service'
import type { Ref } from 'vue'

const maxOffset = 100

export default (api: ApiContractor) => {
  const playerService = new PlayerService(api)

  const history = (name: Ref<string>) => {
    return useInfiniteQuery(
      ['history', name],
      (param) => {
        return playerService.history(name.value, param)
      },
      {
        getNextPageParam: (lastPage: { prevOffset: number; articleCount: number }) => {
          console.log(lastPage.prevOffset)
          if (
            lastPage.prevOffset + 10 > lastPage.articleCount ||
            lastPage.prevOffset + 10 > maxOffset
          ) {
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
