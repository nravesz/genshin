import Image from "react-bootstrap/esm/Image";
import { CHARACTER_IMAGE_URL } from "../../config";
import './styles/CharacterCards.scss';
import '../card/styles/CharacterImage.scss';

type Props = {
    id: string;
    name: string;
}

const CharacterCard = ({ id, name } : Props) => {    
    return (
        <div
            className="character-card"
        >
            <Image
                className="image"
                src={`${CHARACTER_IMAGE_URL}/${id}.png`}
            />
            <p
                className="text"
            >
                {name}
            </p>
        </div>
    );
};

export default CharacterCard;
