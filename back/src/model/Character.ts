import { characters } from "../../data/characters";

type Resourses = {
    [key: string]: number;
};

interface Item {
    item: ItemData ;
    amount: number;
}

interface ItemData {
    id: string;
    name: string;
}



export class Character {
    // getAscensionItems (id: string, startLvL: number, startIsAscended: boolean,
    //     endLvL: number, endIsAscended: boolean) {
    //     if (this.isValidAscensionLvL(ascensionStartLvL)
    //         && this.isValidAscensionLvL(ascensionEndLvL)
    //         && ascensionStartLvL <= ascensionEndLvL
    //     ) {
    //         const resourses: Resourses = {};
    //         const character = characters[id];
    //         const ascension = character.ascension;
    //         if (ascensionStartLvL == 0 && ascensionEndLvL == 0) {
    //             return resourses;
    //         }
    //         for (let i = ascensionStartLvL; i < ascensionEndLvL; i++) {
    //             const itemsPerAscension = ascension[i].items;
    //             for (let items in itemsPerAscension) {
    //                 const item: Item = itemsPerAscension[items];
    //                 if (item.item.id != "none") {
    //                     if (resourses[item.item.id]) {
    //                         resourses[item.item.id] += item.amount;
    //                     } else {
    //                         resourses[item.item.id] = item.amount;
    //                     };
    //                 };
    //             };
    //         };
    //         return resourses;
    //     } else {
    //         throw new Error("Invalid ascension level");
    //     }
    // };

    getAscensionItems (id: string, startLvL: number, startIsAscended: boolean,
        endLvL: number, endIsAscended: boolean) {
        var ascensionStartLvL = this.getAscensionLvLs(startLvL, startIsAscended);
        console.log("ascensionStartLvL", ascensionStartLvL)
        var ascensionEndLvL = this.getAscensionLvLs(endLvL, endIsAscended);
        console.log("ascensionEndLvL", ascensionEndLvL);
        const resourses: Resourses = {};
        const character = characters[id];
        const ascension = character.ascension;
        if (ascensionStartLvL == 0 && ascensionEndLvL == 0) {
            return resourses;
        };
        // if (ascensionStartLvL == 0) {
        //     ascensionStartLvL = 1;
        // }
        for (let i = ascensionStartLvL - 1; i < ascensionEndLvL; i++) {
            if (i === -1 || (i + 1 === ascensionStartLvL && startIsAscended)) {
                continue;
            };
            const itemsPerAscension = ascension[i].items;
            for (let items in itemsPerAscension) {
                const item: Item = itemsPerAscension[items];
                if (item.item.id != "none") {
                    if (resourses[item.item.id]) {
                        resourses[item.item.id] += item.amount;
                    } else {
                        resourses[item.item.id] = item.amount;
                    };
                };
            };
        };
        return resourses;
    };

    getAscensionLvLs (lvl: number, isAscended: boolean) {
            //const ascensionStartLvL = startIsAscended ? start + 1 : start;
            var ascensionStartLvl: number;
            if (lvl <= 20) {
                ascensionStartLvl = 0;
            } else if (lvl >= 20 && lvl <= 40) {
                ascensionStartLvl = 1;
            } else {
                ascensionStartLvl = Math.floor(lvl / 10) - 2;
            }
            return isAscended ? ascensionStartLvl + 1 : ascensionStartLvl;
    }
    
    isValidAscensionLvL(ascensionLvL: number) {
        if (ascensionLvL < 0 || ascensionLvL > 6) {
            return false;
        };
        return true;
    };

};
