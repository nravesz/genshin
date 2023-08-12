import { InventoriesService } from ".";
import { Request, Response } from "express";

export class InventoriesController {
    private inventoryService: InventoriesService;

    constructor(inventoryService: InventoriesService) {
        this.inventoryService = inventoryService;
    };

    createNewInventory(req: Request, res: Response) {
        this.inventoryService.createNewInventory(req, res);
    };

};
