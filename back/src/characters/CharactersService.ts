import { Request, Response } from "express";
import { CharactersRepository } from ".";
import { Character } from "../model/Character";
import Resourses from "../model/Resourses";

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

    async getResources(req: Request, res: Response) {
        try {
            const email = "example@gmail.com"; // TODO: get email from token
            const { id, startLvL, startIsAscended, endLvL, endIsAscended } = req.body;
            const character = new Character();
            const resourcesNeeded = character.getResources(id, startLvL, startIsAscended,
                endLvL, endIsAscended);
            const resourcesList = Object.keys(resourcesNeeded);
            const resourcesInInventory = await this.charactersRepository.getResources(email, resourcesList);
            const resources: Resourses = {};
            for (let resource of resourcesList) {
                const resourceNeeded = resourcesNeeded[resource] - resourcesInInventory[resource];
                resources[resource] = resourceNeeded > 0 ? resourceNeeded : 0;
            };
            res.status(200).send({
                message: "Resources gotten",
                data: resources
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: "Error getting resources",
                error: error
            });
        };
    };
    
};
