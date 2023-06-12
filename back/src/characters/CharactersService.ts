import { CharacterRoster } from ".";

export class CharactersService {
    private characterRoster: CharacterRoster

    constructor(characterRoster: CharacterRoster) {
        this.characterRoster = characterRoster;
        this.characterRoster.addCharacters();
    };

    getCharactersBasicInfo() {
        return this.characterRoster.getCharactersBasicInfo();
    };
};
