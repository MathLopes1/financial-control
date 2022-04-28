import 'dotenv/config';
import 'reflect-metadata';

import App from './App';

const Server: Function = async (): Promise<void> => {
  const app = await App.Starting();
  const Port:string | undefined = process.env.PORT;

  app.listen(Port, () => console.log(`online application at -> http://localhost:/${Port}`));
};

Server();
