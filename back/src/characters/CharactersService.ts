import { Request, Response } from "express";
import { CharacterRoster, CharacterRepository } from ".";

export class CharactersService {
    private charactersRepository: CharacterRepository;

    constructor(charactersRepository: CharacterRepository) {
        this.charactersRepository = charactersRepository;
    };

    getRosterBasicInfo(req: Request, res: Response) {
        try {
            const data = this.charactersRepository.getRosterBasicInfo();
            res.status(200).json({
                message: "Roster fetched",
                data: data
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error fetching roster",
                error: error
            });
        };
    };
    
};
