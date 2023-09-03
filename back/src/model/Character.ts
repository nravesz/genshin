import { characters } from "../../data/characters";

type Resourses = {
    [key: string]: number;
};

type Items = {
    item: string;
    amount: number;
}





export class Character {
    // getAscensionItems (id: string, ascensionStartLvL: number, ascensionEndLvL: number) {
    //     if (this.isValidAscensionLvL(ascensionStartLvL)
    //         && this.isValidAscensionLvL(ascensionEndLvL)
    //         && ascensionStartLvL <= ascensionEndLvL
    //     ) {
    //         const materialsTotal: Material = {};
    //         const character = characters[id];
    //         const ascension = character.ascension;
    //         for (let i = ascensionStartLvL - 1; i < ascensionEndLvL; i++) {
    //             const itemsPerAscension = ascension[i].items;
    //             for (let itemPerAscension in itemsPerAscension) {
    //                 const item: Item = itemsPerAscension[itemPerAscension];
    //                 console.log(item.item.id)
    //             }

    //             ///console.log(JSON.parse(itemsPerAscension))
    //             // for (const item in itemsPerAscension) {
    //             //     console.log(JSON.parse(item).item)
    //             // }
    //         };
    //         return materialsTotal;
    //     } else {
    //         throw new Error("Invalid ascension level");
    //     }
    // };

    getAscensionItems (id: string, ascensionStartLvL: number, ascensionEndLvL: number) {
        if (this.isValidAscensionLvL(ascensionStartLvL)
            && this.isValidAscensionLvL(ascensionEndLvL)
            && ascensionStartLvL <= ascensionEndLvL
        ) {
            const resourses: Resourses = {};
            const character = characters[id];
            const ascension = character.ascension;
            for (let i = ascensionStartLvL - 1; i < ascensionEndLvL; i++) {
                const itemsPerAscension = ascension[i].items;
                for (let itemPerAscension in itemsPerAscension) {
                    const items: Items = itemsPerAscension[itemPerAscension];
                    console.log(items.item)
                }

                ///console.log(JSON.parse(itemsPerAscension))
                // for (const item in itemsPerAscension) {
                //     console.log(JSON.parse(item).item)
                // }
            };
            return resourses;
        } else {
            throw new Error("Invalid ascension level");
        }
    };


    
    isValidAscensionLvL(ascensionLvL: number) {
        if (ascensionLvL < 1 || ascensionLvL > 6) {
            return false;
        };
        return true;
    };

};
