import { Image } from "react-bootstrap"
import { CHARACTER_IMAGE_URL } from "../../config";

type CharacterImagePrompts = {
    id: string;
}

const CharacterImage = ({id}: CharacterImagePrompts) => {
    return (
        <Image
            src={`${CHARACTER_IMAGE_URL}/${id}.png`}
        />
    );
};

export default CharacterImage;
