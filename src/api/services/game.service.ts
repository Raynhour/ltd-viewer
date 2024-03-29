import { PATH } from "@/consts/apiPath.const"
import type ApiContractor from "@/contractors/api.contractor"
import type { Game } from "@/entities/game.type"

export interface GameServiceContractor {
    game: (id: string) => Promise<Game | Error>
}

export default class GameService implements GameServiceContractor{
    api: ApiContractor
    constructor(api: ApiContractor) {
        this.api = api
    }
    
    async game(id: string) {
        const res = await this.api.get(PATH.GAME(id))
        return res
    }
}
