import Server, { Express } from 'express';
import IndexRoutes from '../src/routes/index';
import Database from './database/index';

class App {
  readonly server: Express;

  constructor() {
    this.server = Server();
    this.middlewares();
    this.routes();
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

  routes(): void {
    this.server.use('/api', IndexRoutes.routes());
  }
}

export default App;
