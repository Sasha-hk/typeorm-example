import { createConnection } from 'typeorm';
import express from 'express';
import { Banker } from './entities/banker';
import { Client } from './entities/client';
import { Transaction } from './entities/transaction';
import { ClientRouter } from './routes/create-client';

const main = async () => {
  const app = express();

  try {
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'oleksandr',
      password: undefined,
      database: 'typeorm',
      entities: [
        Client,
        Banker,
        Transaction,
      ],
      synchronize: true,
    });
    console.log('[*] Connected to Postgres database')

    app.use(express.json());
    app.use(ClientRouter);
    app.listen(3000, () => {
      console.log('[*] Server started on port 3000');
    });
  } catch (e: any) {
    console.log(e);
    console.log('[!] Unable connect to Postgres');
    throw new Error('Unable to connect to Postgresql')
  }
}

main();
