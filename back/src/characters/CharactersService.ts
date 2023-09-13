import { Request, Response } from "express";
import { CharactersRepository } from ".";
import { Character } from "../model/Character";
import Resourses from "../model/Resourses";

export class CharactersService {
    private charactersRepository: CharactersRepository;

    constructor(charactersRepository: CharactersRepository) {
        this.charactersRepository = charactersRepository;
    };

    async getCharacters(req: Request, res: Response) {
        try {
            const email = "example@gmail.com"; // TODO: get email from token
            const characters = await this.charactersRepository.getCharacters(email);
            res.status(200).json({
                message: "Characters gotten",
                data: characters
            });
        } catch (error) {
            res.status(500).json({
                message: "Error getting characters",
                error: error
            });
        };
    };

    async addCharacter(req: Request, res: Response) {
        try {
            const email = "example@gmail.com"; // TODO: get email from token
            const { id, startLvL, startIsAscended, endLvL , endIsAscended} = this.addCharacterParseeBody(req);

            if (id !== undefined && startLvL !== undefined
                && startIsAscended !== undefined && endLvL !== undefined
                && endIsAscended !== undefined)
            {
                await this.charactersRepository.addCharacter(email, id, startLvL,
                    startIsAscended, endLvL, endIsAscended);
                res.status(200).json(
                    { message: "Character added" }
                );
            } else {
                res.status(400).json({
                    message: "Wrong info"
                });
            };
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error adding character"
            });
        };
    };

    async modifyCharacter(req: Request, res: Response) {
        try {
            const email = "example@gmail.com"; // TODO: get email from token
            const { id, startLvL, startIsAscended, endLvL , endIsAscended} = this.addCharacterParseeBody(req);
            if (id !== undefined && startLvL !== undefined
                && startIsAscended !== undefined && endLvL !== undefined
                && endIsAscended !== undefined)
            {
                await this.charactersRepository.modifyCharacter(email, id, startLvL,
                    startIsAscended, endLvL, endIsAscended);
                res.status(200).json(
                    { message: "Character added" }
                );
            } else {
                res.status(400).json({
                    message: "Wrong info"
                });
            };
        } catch (error) {
            res.status(500).json({
                message: "Error modifying character",
                error: error
            });
        };
    };

    async deleteCharacter(req: Request, res: Response) {
        const email = "example@gmail.com"; // TODO: get email from token
        try {
            console.log(req.body)
            const id: string | undefined = req.body.id as string | undefined;
            if (id !== undefined) {
                await this.charactersRepository.deleteCharacter(email, id);
                res.status(200).json({
                    message: "Character deleted"
                });
            } else {
                res.status(400).json({
                    message: "Character not found"
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "Error deleting character",
                error: error
            });
        };
    };

    async getResources(req: Request, res: Response) {
        try {
            const email = "example@gmail.com"; // TODO: get email from token
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

    addCharacterParseeBody(req: Request) {
        const id: string | undefined = req.body.id;
        const startLvL: number | undefined = parseInt(req.body.startLvL);
        const startIsAscended: boolean | undefined = `${req.body.startIsAscended}` === 'true';
        const endLvL: number | undefined = parseInt(req.body.endLvL);
        const endIsAscended: boolean | undefined = `${req.body.endIsAscended}` === 'true';
        return { id, startLvL, startIsAscended, endLvL, endIsAscended }
    }
    
};
