import { Card } from ".";
import { ICharacter } from "../roster";
import { IInventory } from "../inventory";
import "./styles/CardList.scss";

type Props = {
    characters: ICharacter;
    data: Map<string, IInventory>;
};

const CardList= ({characters, data}: Props) => {
    return (
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

    );
};

export default CardList;
