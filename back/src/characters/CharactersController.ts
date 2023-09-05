import { Request, Response } from "express";
import { CharactersService } from ".";

export class CharactersController {
    private charactersService: CharactersService;

    constructor(charactersService: CharactersService) {
        this.charactersService = charactersService;
    };

    addCharacter = async (req: Request, res: Response) => {
        this.charactersService.addCharacter(req, res);
    };

    getResources = async (req: Request, res: Response) => {
        this.charactersService.getResources(req, res);
    };
};