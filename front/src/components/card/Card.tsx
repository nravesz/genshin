import { IInventory } from "../inventory"
import { CharacterImage, Resources } from ".";

type CardProps = {
    name: string;
    id: string;
    inventory: IInventory;
};

const Card = ({name, id, inventory}: CardProps) => {
    return (
        <div>
            <CharacterImage
                id={id}
            />
            <Resources
                resources={inventory}
            />
        </div>
    );
};
 export default Card;
 