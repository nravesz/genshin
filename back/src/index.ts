import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

import { rosterRouter } from './roster';
import { inventoriesRouter } from './inventories';

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;
const mongodbUrl: string | undefined = process.env.MONGODB_URL;
export const client = new MongoClient(mongodbUrl as string);


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/roster', rosterRouter);
app.use('/inventories', inventoriesRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
