import express from "express";
import { Request, Response } from "express";
import { RosterRepository, RosterService, RosterController } from ".";

const router = express.Router();

const rosterRepository = new RosterRepository();
const rosterService = new RosterService(rosterRepository);
const rosterController = new RosterController(rosterService);

router.get('/', (req: Request, res: Response) => {
    rosterController.getCharactersBasicInfo(req, res);
});

export default router;
