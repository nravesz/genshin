import { Request, Response } from "express";
import { CharactersService } from ".";

export class CharactersController {
    private charactersService: CharactersService;

    constructor(charactersService: CharactersService) {
        this.charactersService = charactersService;
    };

    getCharacters = async (req: Request, res: Response) => {
        this.charactersService.getCharacters(req, res);
    };

    addCharacter = async (req: Request, res: Response) => {
        this.charactersService.addCharacter(req, res);
    };

    modifyCharacter = async (req: Request, res: Response) => {
        this.charactersService.modifyCharacter(req, res);
    };

    deleteCharacter = async (req: Request, res: Response) => {
        this.charactersService.deleteCharacter(req, res);
    }

    getResources = async (req: Request, res: Response) => {
        this.charactersService.getResources(req, res);
    };
};