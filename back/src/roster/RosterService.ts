import { Request, Response } from "express";
import { RosterRepository } from ".";

export class RosterService {
    private rosterRepository: RosterRepository;

    constructor(charactersRepository: RosterRepository) {
        this.rosterRepository = charactersRepository;
    };

    async getRosterBasicInfo(req: Request, res: Response) {
        try {
            const email = "example@gmail.com"; // TODO: get email from token
            const data = await this.rosterRepository.getRosterBasicInfo(email);
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
