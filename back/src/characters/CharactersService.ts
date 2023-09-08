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
            res.status(200).json(
                { message: "Character added" }
            );
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error adding character"
            });
        };
    };

    // async getResources(req: Request, res: Response) {
    //     try {
    //         const email = "example@gmail.com"; // TODO: get email from token
    //         console.log(req.body)
    //         const { id, startLvL, startIsAscended, endLvL, endIsAscended } = req.body;
    //         const character = new Character();
    //         const resourcesNeeded = character.getResources(id, startLvL, startIsAscended,
    //             endLvL, endIsAscended);
    //         const resourcesList = Object.keys(resourcesNeeded);
    //         const resourcesInInventory = await this.charactersRepository.getResources(email, resourcesList);
    //         const resources: Resourses = {};
    //         for (let resource of resourcesList) {
    //             const resourceNeeded = resourcesNeeded[resource] - resourcesInInventory[resource];
    //             resources[resource] = resourceNeeded > 0 ? resourceNeeded : 0;
    //         };
    //         res.status(200).send({
    //             message: "Resources gotten",
    //             data: resources
    //         });
    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).send({
    //             message: "Error getting resources",
    //             error: error
    //         });
    //     };
    // };

    // async getResources(req: Request, res: Response) {
    //     try {
    //         const email = "example@gmail.com"; // TODO: get email from token
    //         console.log(req.query)
    //         const { id, startLvL, startIsAscended, endLvL, endIsAscended } = req.body;

    //         res.status(200).send({
    //             message: "Resources gotten",
    //         });
    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).send({
    //             message: "Error getting resources",
    //             error: error
    //         });
    //     };
    // };

    async getResources(req: Request, res: Response) {
        try {
            const email = "example@gmail.com"; // TODO: get email from token
            console.log(req.query)
            const { id, startLvL, startIsAscended, endLvL, endIsAscended } = this.getResourcesParseeQuery(req);
            if (id !== undefined && startLvL !== undefined
                && startIsAscended !== undefined && endLvL !== undefined
                && endIsAscended !== undefined)
            {
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
                res.status(200).json({
                    message: "Resources gotten",
                    data: resources
                });
            } else {
                res.status(400).json({
                    message: "Wrong query"
                });
            };
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error getting resources",
                error: error
            });
        };
    };

    getResourcesParseeQuery(req: Request) {
        const id: string | undefined = req.query.id as string | undefined;
        const startLvL: number | undefined = parseInt(req.query.startLvL as string);
        const startIsAscended: boolean | undefined = req.query.startIsAscended === 'true';
        const endLvL: number | undefined = parseInt(req.query.endLvL as string);
        const endIsAscended: boolean | undefined = req.query.endIsAscended === 'true';
        return { id, startLvL, startIsAscended, endLvL, endIsAscended }
    };
    
};
