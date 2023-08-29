import { characters } from "../../data/characters"

interface ICharacter {
    id: string;
    name: string;
};

export class RosterRepository {
    
    getRosterBasicInfo() {
        const roster: Record<string, ICharacter> = {};
        for (let id in characters) {
            const character = characters[id];
            roster[id] = {
                id: character.id,
                name: character.name
            };
        };
        return roster;
    }
};
