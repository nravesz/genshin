import Image from "react-bootstrap/esm/Image";
import { CHARACTER_IMAGE_URL } from "../../config";
import './styles/CharacterCards.scss';

type CharacterCardPrompts = {
    id: string;
    name: string;
}

async function addCharacter(id: string) {
    console.log(id)
}

const CharacterCard = ({id, name} : CharacterCardPrompts) => {
    return (
        <div
            className="character-card"
            onClick={() => addCharacter(id)}
        >
            <Image
                src={`${CHARACTER_IMAGE_URL}/${id}.png`}
            />
            <p>{name}</p>
        </div>
    );
};

export default CharacterCard;
