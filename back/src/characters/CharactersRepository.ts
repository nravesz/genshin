import { characters } from "../../data/characters"
import { Character } from "../model/Character";
import Resourses from "../model/Resourses";
import { client } from "..";

export class CharactersRepository {

    async getCharacters(email: string) {
        const charactersC = client.db('UsersDB').collection('Characters');
        try {
            const filter = { email: email };
            const result = await charactersC.find(filter).toArray();
            if (result) {
                return result;
            } else {
                throw new Error("Characters not found");
            };
        } catch (error) {
            throw error;
        };
    };

    async addCharacter(email: string, id: string, startLvL: number,
        startIsAscended: boolean, endLvL: number, endIsAscended: boolean) {
        if (id in characters) {
            const charactersC = client.db('UsersDB').collection('Characters');
            const filter = { email: email, id: id };
            const result = await charactersC.findOne(filter);
            if (result) {
                throw new Error("Character already exists");
            } else {
                const character = {
                    email: email,
                    id: id,
                    startLvL: startLvL,
                    startIsAscended: startIsAscended,
                    endLvL: endLvL,
                    endIsAscended: endIsAscended
                };
                await charactersC.insertOne(character);
            }
        } else {
            throw new Error("Character not found");
        };
    };

    async modifyCharacter(email: string, id: string, startLvL: number,
        startIsAscended: boolean, endLvL: number, endIsAscended: boolean) {
        try {
            const charactersC = client.db('UsersDB').collection('Characters');
            const filter = { email: email, id: id };
            const character = {
                email: email,
                id: id,
                startLvL: startLvL,
                startIsAscended: startIsAscended,
                endLvL: endLvL,
                endIsAscended: endIsAscended
            };
            const result = await charactersC.findOneAndUpdate(filter, character);
        } catch (error) {
            throw error;
        };
    };

    async deleteCharacter(email: string, id: string) {
        try {
            const charactersC = client.db('UsersDB').collection('Characters');
            const filter = { email: email, id: id };
            await charactersC.findOneAndDelete(filter);
        } catch (error) {
            throw error;
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
