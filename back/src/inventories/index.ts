import { InventoriesController } from "./InventoriesController";
import { InventoriesService } from "./InventoriesService";
import { InventoriesRepository } from "./InventoriesRepository";
import router from "./inventories";

export {
    router as inventoriesRouter,
    InventoriesController,
    InventoriesService,
    InventoriesRepository
};
