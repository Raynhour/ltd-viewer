import injections from '@/consts/injections'
import type ApiContractor from '@/contractors/api.contractor'
import { inject } from 'vue'

export default function useDefaultApi() {
  const api = inject(injections.API) as ApiContractor

  return { api }
}
