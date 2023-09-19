import { Card } from ".";
import { ICharacterLvL } from "../card";
import { IInventory } from "../inventory";
import "./styles/CardList.scss";

type Props = {
    characters: Array<ICharacterLvL>;
    resources: Map<string, IInventory>;
};

const CardList= ({ characters, resources }: Props) => {
    return (
        <div
            className='card-list-div'
        >
            {characters.map((character) => (
                <Card
                    key={character.id}
                    id={character.id}
                    name={character.id}
                    resources={resources.get(character.id) as IInventory}
                />
            ))}
        </div>

    );
};

export default CardList;
