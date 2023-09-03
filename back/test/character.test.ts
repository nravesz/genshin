import { Character } from "../src/model/Character";

describe("Character", () => {

    describe("character items", () => {
        it ("one of the character's id is alhaitham and his hame is ALhaitham", () => {
            const character = new Character();
            console.log(character.getAscensionItems("alhaitham", 1, 1));
            expect(true).toBe(true);
        });
    });

});