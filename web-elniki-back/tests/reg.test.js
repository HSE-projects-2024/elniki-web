const request = require('supertest');
const { app, server } = require('../index');
const conn = require('../db');

describe('POST /reg', () => {

    afterAll(async () => {
        server.close();
        conn.end();
    });

    it('should register a new user', async () => {
        const newUser = {
            Name: 'Test',
            Surname: 'Test',
            Email: 'test@test.test',
            Password: 'password123',
        };

        await conn.query('DELETE FROM users WHERE Email = ?', [newUser.Email]);

        const response = await request(app)
            .post('/reg')
            .send(newUser);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('Email', newUser.Email);

        await conn.query('SELECT * FROM users WHERE Email = ?', [newUser.Email], (req, res) => {
            expect(res.length).toBe(1);
        });
    });
});
