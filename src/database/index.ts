import { Connection, createConnection, getConnectionOptions } from 'typeorm';

class Database {
  constructor() {
    this.connect();
  }

  public async connect(): Promise<Connection> {
    try {
      const defaultOptions = await getConnectionOptions();
      return await createConnection(Object.assign(defaultOptions, {
        type: process.env.NODE_ENV === 'test' ? 'sqlite' : defaultOptions.type,
        database:
          process.env.NODE_ENV === 'test'
            ? '../../__tests__/database/database.test.sqlite'
            : defaultOptions.database,
      }));
    } catch (err) {
      console.log(err);
    }
  }
}

export default new Database();
