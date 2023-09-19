import { Image } from "react-bootstrap"
import { CHARACTER_IMAGE_URL } from "../../config";

type Props = {
    id: string;
}

const CharacterImage = ({ id }: Props) => {
    return (
        <Image
            src={`${CHARACTER_IMAGE_URL}/${id}.png`}
        />
    );
};

export default CharacterImage;
