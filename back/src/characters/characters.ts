import express from "express";
import { Request, Response } from "express";
import { CharactersRepository, CharactersService, CharactersController } from "./index";

const router = express.Router();

const charactersRepository = new CharactersRepository();
const charactersService = new CharactersService(charactersRepository);
const charactersController = new CharactersController(charactersService);

router.get('/', (req: Request, res: Response) => {
    charactersController.getCharacters(req, res);
});

router.post('/', (req: Request, res: Response) => {
    charactersController.addCharacter(req, res);
});

router.put('/', (req: Request, res: Response) => {
    charactersController.modifyCharacter(req, res);
});

router.delete('/', (req: Request, res: Response) => {
    charactersController.deleteCharacter(req, res);
});

router.get('/resources', (req: Request, res: Response) => {
    charactersController.getResources(req, res);
});

export default router;
