import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

import CharacterRoster from './characters/model/CharacterRoster';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const mongodbUrl: string | undefined = process.env.MONGODB_URL;
export const client = new MongoClient(mongodbUrl as string);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/characters', async (req: Request, res: Response) => {
  // const charactersC = client.db('UsersDB').collection('Characters');
  // const publications = await charactersC.find({}).toArray();
  // res.send(publications);
  const characterRoster = new CharacterRoster();
  characterRoster.addCharacters();
  res.send(characterRoster.getCharactersBasicInfo());
});

app.get('/uwu', async (req: Request, res: Response) => {
  // const charactersC = client.db('UsersDB').collection('Characters');
  // const publications = await charactersC.find({}).toArray();
  // res.send(publications);
  const characterRoster = new CharacterRoster();
  characterRoster.addCharacters();
  console.log("aaah");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
