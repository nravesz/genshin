import express from "express";
import { Request, Response } from "express";
import { InventoriesController, InventoriesService, InventoriesRepository } from ".";

const router = express.Router();

const inventoriesRepository = new InventoriesRepository();
const inventoriesService = new InventoriesService(inventoriesRepository);
const inventoriesController = new InventoriesController(inventoriesService);

router.get('/', (req: Request, res: Response) => {
    inventoriesController.getInventory(req, res);
});

router.post('/', (req: Request, res: Response) => {
    inventoriesController.createNewInventory(req, res);
});

router.put('/', (req: Request, res: Response) => {
    inventoriesController.modifyInventory(req, res);
});

export default router;
