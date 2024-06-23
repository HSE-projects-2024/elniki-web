const request = require('supertest');
const { app, server } = require('../index');
const conn = require('../db');

describe('GET /api/skiPasses', () => {

    afterAll(async () => {
        server.close();
        conn.end();
    });

    it('should return 401 if no token is provided', async () => {
        const response = await request(app)
            .get('/api/skiPasses')
            .query({ userId: 8 });

        expect(response.status).toBe(401);
    });

    it('should return 403 if token is invalid', async () => {
        const response = await request(app)
            .get('/api/skiPasses')
            .query({ userId: 8 })
            .set('Authorization', `Bearer INVALID_JWT_TOKEN`);

        expect(response.status).toBe(403);
    });
});
