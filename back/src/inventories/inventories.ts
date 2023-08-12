import express from "express";
import { Request, Response } from "express";
import { InventoriesController, InventoriesService, InventoriesRepository } from ".";

const router = express.Router();

const inventoriesRepository = new InventoriesRepository();
const inventoriesService = new InventoriesService(inventoriesRepository);
const inventoriesController = new InventoriesController(inventoriesService);

router.post('/', (req: Request, res: Response) => {
    inventoriesController.createNewInventory(req, res);
});

export default router;
