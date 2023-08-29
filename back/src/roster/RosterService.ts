import { Request, Response } from "express";
import { RosterRepository } from ".";

export class RosterService {
    private rosterRepository: RosterRepository;

    constructor(charactersRepository: RosterRepository) {
        this.rosterRepository = charactersRepository;
    };

    getRosterBasicInfo(req: Request, res: Response) {
        try {
            const data = this.rosterRepository.getRosterBasicInfo();
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
