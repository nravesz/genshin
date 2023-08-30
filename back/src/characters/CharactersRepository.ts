import { characters } from "../../data/characters"

export class CharactersRepository {

    addCharacter(character: string) {
        if (character in characters) {
            console.log(characters[character]);
        } else {
            throw new Error("Character not found");
        };
    };
    
};
