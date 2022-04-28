import { createConnection } from 'typeorm';

class Database {
  constructor() {
    this.connect();
  }

  public async connect(): Promise<void> {
    try {
      await createConnection();
      console.log('connected with the database');
    } catch (err) {
      console.log(err);
    }
  }
}

export default new Database();
