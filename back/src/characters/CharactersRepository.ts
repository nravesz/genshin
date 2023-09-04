import { characters } from "../../data/characters"
import { Character } from "../model/Character";
import Resourses from "../model/Resourses";
import { client } from "..";

export class CharactersRepository {

    addCharacter(character: string) {
        if (character in characters) {
            console.log(characters[character]);
        } else {
            throw new Error("Character not found");
        };
    };
    
    async getResources(email: string, resourcesList: string[]) {
        const resources: Resourses = {};
        try {
            const inventoriesC = client.db('UsersDB').collection('Inventories');
            const filter = { email: email };
            const result = await inventoriesC.findOne(filter);
            if (result) {
                for (let resource of resourcesList) {
                    resources[resource] = result[resource];
                };
                return result;
            } else {
                throw new Error("Inventory not found");
            }
        } catch (error) {
            console.log(error);
            throw error;
        };
    };

};
