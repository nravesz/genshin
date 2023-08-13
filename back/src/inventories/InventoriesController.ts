import { InventoriesService } from ".";
import { Request, Response } from "express";

export class InventoriesController {
    private inventoryService: InventoriesService;

    constructor(inventoryService: InventoriesService) {
        this.inventoryService = inventoryService;
    };

    getInventory(req: Request, res: Response) {
        this.inventoryService.getInventory(req, res);
    };

    createNewInventory(req: Request, res: Response) {
        this.inventoryService.createNewInventory(req, res);
    };

    modifyInventory(req: Request, res: Response) {
        this.inventoryService.modifyInventory(req, res);
    };
};
