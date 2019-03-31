const createTestServer = require('create-test-server');
import axios from 'axios';
import { Request, Response } from 'express';

let server: any;
beforeAll(async () => {
    server = await createTestServer();
});
afterAll(async () => {
    console.log('server close');
    await server.close();
});
it('nothing', async () => {
    server.get('/foo', (req: Request, res: Response) => {
        res.send('bar');
    });
    const response = await axios.get(`${server.url}/foo`);
    expect(response.data).toEqual('bar');
});
