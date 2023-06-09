import { characters } from "../../../data/characters"

interface ICharacter {
    id: string;
    name: string;
}

export default class CharacterRoster {
    private characterList: Map<string, ICharacter> = new Map();

    addCharacters() {for (let c in characters) {
            const id: string = characters[c].id;
            const name: string = characters[c].name;
            this.characterList.set(id, {
                id: id,
                name: name
            });
        }
    };

    getCharactersBasicInfo() {
        const charactersBasicInfo: ICharacter[] = [];
        for (let [key, value] of this.characterList) {
            const id = value.id;
            const name = value.name;
            charactersBasicInfo.push({
                id: id,
                name: name
            });
        };
        return charactersBasicInfo;
    };
};
