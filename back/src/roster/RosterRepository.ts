import { characters } from "../../data/characters"
import { client } from "..";

interface ICharacter {
    id: string;
    name: string;
};

export class RosterRepository {
    
    async getRosterBasicInfo(email: string) {
        const roster: Record<string, ICharacter> = {};
        for (let id in characters) {
            const character = characters[id];
            roster[id] = {
                id: character.id,
                name: character.name
            };
        };
        try {
            const charactersC = client.db('UsersDB').collection('Characters');
            const filter = { email: email };
            const result = await charactersC.find(filter).toArray();
            for (let character of result) {
                const id: string = character.id;
                if (id in roster) {
                    delete roster[id];
                };
            }
        } catch (error) {
            throw error;
        };
        return roster;
    }
};
