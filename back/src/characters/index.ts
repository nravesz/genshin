import { CharactersController } from "./CharactersController";
import { CharactersService } from "./CharactersService";
import { CharactersRepository } from "./CharactersRepository";
import router from "./characters";

export {
    router as charactersRouter,
    CharactersController,
    CharactersService,
    CharactersRepository
};
