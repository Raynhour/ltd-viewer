import { useQuery } from 'vue-query'
import type { UseQueryReturnType } from 'vue-query'
import type ApiContractor from '@/contractors/api.contractor'
import InfoService from '@/api/services/info.service'
import type { IValues } from '@/entities/values'
import type { Wave } from '@/entities/wave.type'

interface IUseInfo {
  values: () => UseQueryReturnType<IValues, Error>
  waves: () => UseQueryReturnType<Wave[], Error>
}

export default (api: ApiContractor): IUseInfo => {
  const svc = new InfoService(api)

  const values = (): UseQueryReturnType<IValues, Error> => {
    const res = useQuery<IValues, Error>(
      'values',
      async () => {
        const response = await svc.values<IValues>()
        return response
      },
      { retry: 2 }
    )

    return res
  }

  const waves = (): UseQueryReturnType<Wave[], Error> => {
    return useQuery<Wave[], Error>(
      'waves',
      async () => {
        const response = await svc.waves()
        return response
      },
      { retry: 2 }
    )
  }

  return { values, waves }
}
