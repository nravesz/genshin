import { Image } from "react-bootstrap";
import { ITEM_IMAGE_URL } from "../../config";
import "./styles/ResourcesElement.scss";

type Props = {
    id: string;
    quantity: number;
};

const ResourcesElement = ({ id, quantity }: Props) => {
    return (
        <div>
            <div
                className="quantity-div"
            >
                {quantity}
            </div>
            <div className="image-div">
                <Image
                    src={`${ITEM_IMAGE_URL}/${id}.png`}
                    className="element-image"
                />
            </div>
        </div>
    );
};

export default ResourcesElement;
