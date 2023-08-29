import { CharactersController } from "./CharactersController";
import { CharactersService } from "./CharactersService";
import { CharacterRepository } from "./CharacterRepository";
import router from "./characters";

export {
    router as charactersRouter,
    CharactersController,
    CharactersService,
    CharacterRepository
};
