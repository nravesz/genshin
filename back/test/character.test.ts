import { Character } from "../src/model/Character";

describe("Character", () => {

    describe("getAscensionItems", () => {
        it ("sLvL 0 f, eLvL20 t ascension show be 3 sand grease pupa", () => {
            const character = new Character();
            const ascensionItems = character.getAscensionItems("alhaitham", 0, false, 20, true);
            expect(ascensionItems.sand_grease_pupa).toStrictEqual(3);
        });

        it ("sLvL 0 f, eLvL 10 t ascension show be {}", () => {
            const character = new Character();
            const ascensionItems = character.getAscensionItems("alhaitham", 0, false, 10, false);
            expect(ascensionItems).toStrictEqual({});
        });

        it ("sLvL 15 f, eLvL 20 f ascension show be {}", () => {
            const character = new Character();
            const ascensionItems = character.getAscensionItems("alhaitham", 15, false, 20, false);
            expect(ascensionItems).toStrictEqual({});
        });

        it ("sLvL 15 f, eLvL 20 t ascension show be 13", () => {
            const character = new Character();
            const ascensionItems = character.getAscensionItems("alhaitham", 15, false, 20, true);
            expect(ascensionItems.sand_grease_pupa).toStrictEqual(3);
        });

        it ("sLvL 20 f, eLvL 20 t ascension show be 3", () => {
            const character = new Character();
            const ascensionItems = character.getAscensionItems("alhaitham", 20, false, 20, true);
            expect(ascensionItems.sand_grease_pupa).toStrictEqual(3);
        });

        it ("sLvL 20 f, eLvL 40 t ascension show be 13", () => {
            const character = new Character();
            const ascensionItems = character.getAscensionItems("alhaitham", 20, false, 40, true);
            expect(ascensionItems.sand_grease_pupa).toStrictEqual(13);
        });

        it ("sLvL 20 t, eLvL 40 t ascension show be 10", () => {
            const character = new Character();
            const ascensionItems = character.getAscensionItems("alhaitham", 20, true, 40, true);
            expect(ascensionItems.sand_grease_pupa).toStrictEqual(10);
        });

        it ("sLvL 20 t, eLvL 40 t ascension show be 10", () => {
            const character = new Character();
            const ascensionItems = character.getAscensionItems("alhaitham", 40, false, 70, true);
            expect(ascensionItems.sand_grease_pupa).toStrictEqual(105);
        });

    });

    describe("getAscensionLvLs", () => {
        it ("lvl 10 should be 0", () => {
            const character = new Character();
            const ascensionLvL = character.getAscensionLvLs(10);
            expect(ascensionLvL).toBe(0);
        });

        it ("lvl 20 should be 1", () => {
            const character = new Character();
            const ascensionLvL = character.getAscensionLvLs(20);
            expect(ascensionLvL).toBe(1);
        });

        it ("lvl 40 should be 1", () => {
            const character = new Character();
            const ascensionLvL = character.getAscensionLvLs(40);
            expect(ascensionLvL).toBe(2);
        });

        it ("lvl 50 should be 3", () => {
            const character = new Character();
            const ascensionLvL = character.getAscensionLvLs(50);
            expect(ascensionLvL).toBe(3);
        });
    });
});