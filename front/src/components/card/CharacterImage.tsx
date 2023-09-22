import { Image } from "react-bootstrap"
import { CHARACTER_IMAGE_URL } from "../../config";
import "./styles/CharacterImage.scss";

type Props = {
    id: string;
}

const CharacterImage = ({ id }: Props) => {
    return (
        <Image
            className="image"
            src={`${CHARACTER_IMAGE_URL}/${id}.png`}
        />
    );
};

export default CharacterImage;
