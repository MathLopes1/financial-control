import Server, { Express } from 'express';
import Database from './database/index';

class App {
  readonly server: Express;

  constructor() {
    this.server = Server();

    this.middlewares();
  }

  static async Starting() {
    const app: App = new App();
    await Database.connect();

    return app.server;
  }

  middlewares(): void {
    this.server.use(Server.json());
    this.server.use(Server.urlencoded({ extended: true }));
  }
}

export default App;
