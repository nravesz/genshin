import { Request, Response } from "express";
import { CharactersService } from ".";

export class CharactersController {
    private charactersService: CharactersService;

    constructor(charactersService: CharactersService) {
        this.charactersService = charactersService;
    };

    getCharactersBasicInfo(req: Request, res: Response) {
        this.charactersService.getRosterBasicInfo(req, res);
    };

};