import request from 'supertest';
import { getConnection } from 'typeorm';
import App from '../src/App';
import Database from '../src/database';

const app = new App();

describe('Routes tests', () => {
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
    expect(response.type).toBe('application/json');
  });

  it('error creating user password less than 6 digits', async () => {
    const response = await request(app.server).post('/api/v1/user').send({
      email: "matheuslopes@gmail.com",
      senha: "04",
      habilitado: "sim",
    });

    expect(response.status).toBe(400);
    expect(response.type).toBe('application/json');
  });

  it('creating user error because enabled is required yes or no', async () => {
    const response = await request(app.server).post('/api/v1/user').send({
      email: "matheuslopes@gmail.com",
      senha: "04485632",
      habilitado: "s",
    });

    expect(response.status).toBe(400);
    expect(response.type).toBe('application/json');
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
    expect(response.type).toBe('application/json');
  });

  it('error logging in with invalid password', async () => {
    const response = await request(app.server).post('/api/v1/user/login').send({
      email: "matheuslopes@gmail.com",
      senha: "040238",
    });

    expect(response.status).toBe(401);
    expect(response.type).toBe('application/json');
  });

  it('logging out the user', async () => {
    const response = await request(app.server).get('/api/v1/user/logout');

    expect(response.status).toBe(200);
    expect(response.body);
  });

  it('an authentication error is expected for not logging in router gain', async () => {
    const response = await request(app.server).post('/api/v1/gain').send({
      total_ganhos: 1000.00,
    });

    expect(response.status).toBe(401);
    expect(response.type).toBe('application/json');
  });

  it('an authentication error is expected for not logging in router spend', async () => {
    const response = await request(app.server).post('/api/v1/spend').send({
      entretenimento: 1000.00,
      alimentacao: 80.00,
      educacao: 56.95,
      saude: 102.10,
      transporte: 80.90,
    });

    expect(response.status).toBe(401);
    expect(response.type).toBe('application/json');
  });

  it('an authentication error is expected for not logging in router account', async () => {
    const response = await request(app.server).post('/api/v1/spend').send({
      nome: "Matheus Lopes",
      cpf: "30117377031",
      data_nascimento: "07/02/2000",
      usuario_id: "6ec6c26f-e58f-4571-ac73-81df30b11222",
      ganhos_id: "27cd2d23-f374-4943-84f7-2687b7229ab4",
      gastos_id: "70e2379c-4d07-445b-bd04-87cc15cf2e64",
    });

    expect(response.status).toBe(401);
    expect(response.type).toBe('application/json');
  });
});
