import express from "express";
import { Request, Response } from "express";
import { CharacterRoster, CharacterRepository, CharactersService, CharactersController } from "./index";

const router = express.Router();

const characterRoster = new CharacterRoster();
const characterRepository = new CharacterRepository();
const charactersService = new CharactersService(characterRepository);
const charactersController = new CharactersController(charactersService);

router.get('/', (req: Request, res: Response) => {
    charactersController.getCharactersBasicInfo(req, res);
});

export default router;
