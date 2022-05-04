import request from 'supertest';
import { getConnection } from 'typeorm';
import App from '../src/App';
import Database from '../src/database';

const app = new App();

describe('User tests', () => {
  beforeAll(async () => {
    const connection = await Database.connect();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });

  it('should be able to create a new user', async () => {
    const response = await request(app.server).post('/api/v1/user').send({
      email: "matheuslopes@gmail.com",
      senha: "040236",
      habilitado: "sim",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});
