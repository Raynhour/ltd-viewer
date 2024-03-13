import { useQuery } from "vue-query";
import type ApiContractor from '@/contractors/api.contractor';
import  GameService from '@/api/services/game.service';

export default (api: ApiContractor) => {
    const gameService = new GameService(api);

    const game = (id: string) => {
        const res = useQuery('search', async () => {
            const response = await gameService.game(id);
            return response;
        })

        return res
    }

    return { game }
}


