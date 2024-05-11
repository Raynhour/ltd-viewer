import { useQuery } from 'vue-query'
import type ApiContractor from '@/contractors/api.contractor'
import GameService from '@/api/services/game.service'

export default (api: ApiContractor) => {
  const gameService = new GameService(api)

  const game = (id: string) => {
    return useQuery(
      ['search', id],
      async () => {
        const response = await gameService.game(id)
        return response
      },
      {
        refetchOnWindowFocus: false, // Disable refetching on window focus
        refetchOnReconnect: false
      }
    )
  }

  return { game }
}
