import MockAdapter from 'axios-mock-adapter';
import GameFixture from '../../cypress/fixtures/game.json'
import { PATH } from '@/consts/apiPath.const';
import type { AxiosInstance } from 'axios';


export default (axios: AxiosInstance): MockAdapter => {
    const mock = new MockAdapter(axios);

    mock.onGet(PATH.GAME('123')).reply(200, GameFixture);

    mock.onGet(PATH.GAME('error')).reply(500, {})


    return mock
    
}
