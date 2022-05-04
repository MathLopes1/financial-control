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

  it('error creating user conflict in email', async () => {
    const response = await request(app.server).post('/api/v1/user').send({
      email: "matheuslopes@gmail.com",
      senha: "040236",
      habilitado: "sim",
    });

    expect(response.status).toBe(409);
  });

  it('error creating user password less than 6 digits', async () => {
    const response = await request(app.server).post('/api/v1/user').send({
      email: "matheuslopes@gmail.com",
      senha: "04",
      habilitado: "sim",
    });

    expect(response.status).toBe(400);
  });

  it('creating user error because enabled is required yes or no', async () => {
    const response = await request(app.server).post('/api/v1/user').send({
      email: "matheuslopes@gmail.com",
      senha: "04485632",
      habilitado: "s",
    });

    expect(response.status).toBe(400);
  });

  it('is expected to create an authentication with token', async () => {
    const response = await request(app.server).post('/api/v1/user/login').send({
      email: "matheuslopes@gmail.com",
      senha: "040236",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('token');
  });

  it('expected error when logging in with wrong email', async () => {
    const response = await request(app.server).post('/api/v1/user/login').send({
      email: "matheus@gmail.com",
      senha: "040236",
    });

    expect(response.status).toBe(401);
  });

  it('error logging in with invalid password', async () => {
    const response = await request(app.server).post('/api/v1/user/login').send({
      email: "matheuslopes@gmail.com",
      senha: "040238",
    });

    expect(response.status).toBe(401);
  });

  it('logging out the user', async () => {
    const response = await request(app.server).get('/api/v1/user/logout');

    expect(response.status).toBe(200);
    expect(response.body);
  });
});
