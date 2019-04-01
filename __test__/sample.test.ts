import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

import { DefaultApi } from '../out/typescript-axios';
const api = new DefaultApi(undefined, '');

it('nothing', async () => {
    mock.onGet('/foo').reply(200, 'bar');
    const response = await axios.get(`/foo`);
    expect(response.data).toEqual('bar');
});
//
it('get User', async () => {
    mock.onGet('/user').reply(200, { id: 1234, name: 'test_user_name' });
    await expect(api.userGet()).resolves.toBeDefined();
});

it('get User fail', async () => {
    mock.onGet('/user').reply(200, { id: '12342', name: 'test_user_name' });
    await expect(api.userGet()).rejects.toBeDefined();
});

it('get user extend succ', async () => {
    mock.onGet('/userExtend').reply(200, { id: 1234, name: 'test_user_name' });
    await expect(api.userExtendGet()).resolves.toBeDefined();
    mock.onGet('/userExtend').reply(200, {
        id: 1234,
        name: 'test_user_name',
        email: 'test@sfdf.com',
    });
    await expect(api.userExtendGet()).resolves.toBeDefined();
});

it('get user extend fail', async () => {
    mock.onGet('/userExtend').reply(200, {
        id: 1234,
        name: 'test_user_name',
        email: 222,
    });
    await expect(api.userExtendGet()).rejects.toBeDefined();
});
