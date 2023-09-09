import { Card } from ".";
import { ICharacter } from "../roster";
import { IInventory } from "../inventory";

type Prompts = {
    characters: ICharacter;
    data: Map<string, IInventory>;
    isLoading: boolean;
    isError: boolean;
};

const CardList= ({characters, data, isLoading, isError}: Prompts) => {
    return (
        <div>
            {isLoading ? (
                <span>Loading...</span>
            ) : isError ? (
                <span>Error: {isError}</span>
            ) : (
                <div>
                    {
                        Object.values(characters).map((character) => (
                            <Card
                                key={character.id}
                                name={character.id}
                                id={character.id}
                                inventory={data?.get(character.id) as IInventory}
                            />
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default CardList;
