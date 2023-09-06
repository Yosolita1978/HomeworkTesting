const app = require('./index.js'); // Path to your server.
const request = require('supertest');

describe('GET /', () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
    });

    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/');
        expect(response.body).toEqual({ message: 'Hola!, Techtonica!'});
      });
  });

  describe('GET /students', () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app).get('/students');
      expect(response.statusCode).toBe(200); //it's ok
    });

    test('should respond with a json with 3 students', async () => {
        const response = await request(app).get('/students');
        expect(response.body.length).toBe(3);
      });

      test('should respond with a json with 3 students with a name key', async () => {
        const response = await request(app).get('/students');
        expect(response.body[0]).toHaveProperty("name");
      });
  });