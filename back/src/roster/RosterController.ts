import { Request, Response } from "express";
import { RosterService } from ".";

export class RosterController {
    private rosterService: RosterService;

    constructor(charactersService: RosterService) {
        this.rosterService = charactersService;
    };

    getCharactersBasicInfo(req: Request, res: Response) {
        this.rosterService.getRosterBasicInfo(req, res);
    };

};
