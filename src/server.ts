import 'dotenv/config';
import 'reflect-metadata';
import App from './App';

import { logger } from '../src/app/utils/log/logger';

const Server: Function = async (): Promise<void> => {
  const app = await App.Starting();
  const Port:string | undefined = process.env.PORT;

  app.listen(Port, () => logger
    .info(`online application at -> http://localhost:/${Port}`));
};

Server();
