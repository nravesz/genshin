import { InventoriesRepository } from ".";
import { Request, Response } from "express";

export class InventoriesService {
    private inventoryRepository: InventoriesRepository;
    
    constructor(inventoryRepository: InventoriesRepository) {
        this.inventoryRepository = inventoryRepository;
    };

    createNewInventory(req: Request, res: Response) {
        const email = "example@gmail.com"; // TODO: get email from request
        try {
            this.inventoryRepository.createNewInventory(email);
            res.status(200).json({
                message: "New inventory created"
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error creating new inventory",
                error: error
            });
        }
    };

    modifyInventory(req: Request, res: Response) {
        try {
            const email = "example@gmail.com"; // TODO: get email from request
            const items = req.body.items;
            this.inventoryRepository.modifyInventory(email, items);
            res.status(200).json({
                message: "Inventory modified"
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error modifying inventory",
                error: error
            });
        }
    };
};
