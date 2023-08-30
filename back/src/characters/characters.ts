import express from "express";
import { Request, Response } from "express";
import { CharactersRepository, CharactersService, CharactersController } from "./index";

const router = express.Router();

const charactersRepository = new CharactersRepository();
const charactersService = new CharactersService(charactersRepository);
const charactersController = new CharactersController(charactersService);

router.post('/', (req: Request, res: Response) => {
    charactersController.addCharacter(req, res);
});

export default router;
