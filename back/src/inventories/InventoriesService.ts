import { InventoriesRepository } from ".";
import { Request, Response } from "express";

export class InventoriesService {
    private inventoryRepository: InventoriesRepository;
    
    constructor(inventoryRepository: InventoriesRepository) {
        this.inventoryRepository = inventoryRepository;
    };

    async getInventory(req: Request, res: Response) {
        const email = "example@gmail.com"; // TODO: get email from request
        try {
            const inventory = await this.inventoryRepository.getInventory(email);
            res.status(200).json({
                message: "Inventory fetched",
                inventory: inventory
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error fetching inventory",
                error: error
            });
        };
    };

    async createNewInventory(req: Request, res: Response) {
        const email = "example@gmail.com"; // TODO: get email from request
        try {
            const result = await this.inventoryRepository.createNewInventory(email);
            if (result) {
                res.status(200).json({
                    message: "New inventory created"
                });
            } else {
                res.status(200).json({
                    message: "Inventory already exists"
                });
            }
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
