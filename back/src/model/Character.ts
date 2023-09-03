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
    getAscensionItems (id: string, startLvL: number, startIsAscended: boolean,
        endLvL: number, endIsAscended: boolean) {
        var ascensionStartLvL: number = this.getAscensionLvLs(startLvL);
        var ascensionEndLvL: number = this.getAscensionLvLs(endLvL);
        const resourses: Resourses = {};
        const character = characters[id];
        const ascension = character.ascension;
        if (ascensionStartLvL == 0 && ascensionEndLvL == 0) {
            return resourses;
        };
        var start = (startIsAscended ? ascensionStartLvL + 1 : ascensionStartLvL) - 1;
        console.log("start", start);
        var end = (endIsAscended ? ascensionEndLvL + 1 : ascensionEndLvL) - 1;
        console.log("end", end);
        for (let i = start; i < end; i++) {
            if (i === -1) {
                continue;
            }
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

    getAscensionLvLs (lvl: number) {
            var ascensionStartLvl: number;
            if (lvl < 20) {
                ascensionStartLvl = 0;
            } else if (lvl >= 20 && lvl < 40) {
                ascensionStartLvl = 1;
            } else {
                ascensionStartLvl = Math.floor(lvl / 10) - 2;
            }
            return ascensionStartLvl;
    }
    
    isValidAscensionLvL(ascensionLvL: number) {
        if (ascensionLvL < 0 || ascensionLvL > 6) {
            return false;
        };
        return true;
    };

};
