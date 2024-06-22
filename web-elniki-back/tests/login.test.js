const request = require('supertest');
const { app, server } = require('../index');
const conn = require('../db');

describe('POST /login', () => {

    afterAll(async () => {
        server.close();
        conn.end();
    });

    it('should login an existing user', async () => {
        const user = {
            Email: 'test@test.test',
            Password: 'password123',
        };

        const response = await request(app)
            .post('/login')
            .send(user);

        expect(response.status).toBe(200);
    });

    it('should login an existing user with wrong password', async () => {
        const user = {
            Email: 'test@test.test',
            Password: 'wrong',
        };

        const response = await request(app)
            .post('/login')
            .send(user);

        expect(response.status).toBe(401);
    });

    it('should login a non-existing user', async () => {
        const user = {
            Email: 'hehe',
            Password: 'hehe',
        };

        const response = await request(app)
            .post('/login')
            .send(user);

        expect(response.status).toBe(401);
    });
});
