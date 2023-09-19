import { Card } from ".";
import { ICharacter } from "../roster";
import { IInventory } from "../inventory";
import "./styles/CardList.scss";

type Props = {
    characters: ICharacter;
    data: Map<string, IInventory>;
    isLoading: boolean;
    isError: boolean;
};

const CardList= ({characters, data, isLoading, isError}: Props) => {
    return (
        <div>
            {isLoading ? (
                <span>Loading...</span>
            ) : isError ? (
                <span>Error: {isError}</span>
            ) : (
                <div
                    className='card-list-div'
                >
                    {
                        Object.values(characters).map((character) => (
                            <Card
                                key={character.id}
                                name={character.id}
                                id={character.id}
                                resources={data?.get(character.id) as IInventory}
                            />
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default CardList;
