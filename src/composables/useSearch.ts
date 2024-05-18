import ROUTER_NAMES from '@/router/routerNames'
import { useRouter } from 'vue-router'

export default function useSearch() {
  const router = useRouter()

  function search(value: string) {
    if (value.length < 40) {
      return router.push({ name: ROUTER_NAMES.PLAYER_HISTORY, query: { name: value } })
    }

    router.push({ name: ROUTER_NAMES.GAME_RESULT, params: { id: value } })
  }

  return { search }
}
