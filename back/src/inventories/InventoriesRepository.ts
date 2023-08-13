import { itemList } from "../../data/itemList";
import { client } from "..";

const exceptions = ['unknown', 'none', 'any_weapon_1', 'any_weapon_2', 'any_weapon_3'];

type Item = {
    [key: string]: number;
};

export class InventoriesRepository {

    async getInventory(email: string) {
        try {
            const inventoriesC = client.db('UsersDB').collection('Inventories');
            const filter = { email: email };
            const result = await inventoriesC.findOne(filter);
            if (result) {
                const keyToRemove = ['_id', 'email'];
                for (let key of keyToRemove) {
                    if (result.hasOwnProperty(key)) {
                        delete result[key];
                    };
                };
                return result;
            } else {
                return null;
            };
        } catch (error) {
            console.log(error);
            throw error;
        };
    };

    async createNewInventory(email: string) {
        const inventory: Item = {};

        for (let i in itemList) {
            if (exceptions.includes(i)) {
                continue
            }
            inventory[i] = 0;
        };

        try {
            const inventoriesC = client.db('UsersDB').collection('Inventories');
            const result = await inventoriesC.findOne({ email: email });
            if (!result) {
                return inventoriesC.insertOne({ email, ...inventory });
            } else {
                return null;
            }
        } catch (error) {
            console.log(error);
            throw error;
        };
    };

    async modifyInventory(email: string, items: Item) {
        try {
            const inventoriesC = client.db('UsersDB').collection('Inventories');
            const result = await inventoriesC.findOne({ email: email });
            if (result) {
                const filter = { email: email };
                const update = { $set: items };
                inventoriesC.updateOne(filter, update);
            };
        } catch (error) {
            console.log(error);
            throw error;
        };
    };

};