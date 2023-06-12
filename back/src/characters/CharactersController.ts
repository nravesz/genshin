import { Request, Response } from "express";
import { CharactersService } from ".";

export class CharactersController {
    private charactersService: CharactersService;

    constructor(charactersService: CharactersService) {
        this.charactersService = charactersService;
    };

    getCharactersBasicInfo(req: Request, res: Response) {
        const data = this.charactersService.getCharactersBasicInfo();
        res.send({
            message: "Characters basic info",
            data: data
        });
    };

};