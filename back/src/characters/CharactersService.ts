import { Request, Response } from "express";
import { CharactersRepository } from ".";

export class CharactersService {
    private charactersRepository: CharactersRepository;

    constructor(charactersRepository: CharactersRepository) {
        this.charactersRepository = charactersRepository;
    };

    addCharacter(req: Request, res: Response) {
        try {
            const character = req.body.character;
            this.charactersRepository.addCharacter(character);
            res.status(200).send(
                { message: "Character added" }
            );
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: "Error adding character"
            });
        };
    };
    
};
