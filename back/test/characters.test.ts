import CharacterRoster from '../src/characters/model/CharacterRoster';

describe("CharacterPool", () => {

    describe("character list", () => {
        it ("one of the character's id is alhaitham and his hame is ALhaitham", () => {
            const characterRoster = new CharacterRoster();
            characterRoster.addCharacters();
            const characterList = characterRoster.getCharactersBasicInfo();
            var hasCharacter = false;
            for (let {id, name} of characterList) {
                if (id == "alhaitham" && name == "Alhaitham") {
                    hasCharacter = true;
                    break;
                }
            };
            expect(hasCharacter).toBe(true);
        });

        // it ("one of the character's id is alhaitham and name is Alhaitham", () => {
        //     const characterPool = new CharacterPool();
        //     const data = characterPool.getAllIDsAndNames();
        //     var hasCharacter = false;
        //     for (let c in data) {
        //         if (data[c].id == "alhaitham" && data[c].name == "Alhaitham") {
        //             hasCharacter = true;
        //             break;
        //         }
        //     }
        //     expect(hasCharacter).toBe(true);
        // });
    });

});