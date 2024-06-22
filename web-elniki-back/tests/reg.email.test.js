const request = require('supertest');
const { app, server } = require('../index');
const conn = require('../db');

describe('POST /reg', () => {

    afterAll(async () => {
        server.close();
        conn.end();
    });

    it('should register a new user with an existing email', async () => {
        const newUser = {
            Name: 'Test',
            Surname: 'Test',
            Email: 'test@test.test',
            Password: 'password123',
        };

        const response = await request(app)
            .post('/reg')
            .send(newUser);

        expect(response.status).toBe(401);
    });
});
