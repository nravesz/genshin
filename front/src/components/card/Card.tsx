import { IInventory } from "../inventory"
import { CharacterImage, Resources } from ".";
import "./styles/Card.scss";

type CardProps = {
    name: string;
    id: string;
    inventory: IInventory;
};

const Card = ({name, id, inventory}: CardProps) => {
    return (
        <div
            className="card-div"
        >
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
 