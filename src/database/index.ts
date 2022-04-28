import { createConnection } from 'typeorm';

import { logger } from '../app/utils/log/logger';

class Database {
  constructor() {
    this.connect();
  }

  public async connect(): Promise<void> {
    try {
      await createConnection();
      logger
        .info('connected with the database');
    } catch (err) {
      console.log(err);
    }
  }
}

export default new Database();
