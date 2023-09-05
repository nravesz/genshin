import { Image } from "react-bootstrap";
import { ITEM_IMAGE_URL } from "../../config";

type ResourcesElementPrompts = {
    id: string;
    quantity: number;
};

const ResourcesElement = ({id, quantity}: ResourcesElementPrompts) => {
    return (
        <div>
            <p>{quantity}</p>
            <Image
                src={`${ITEM_IMAGE_URL}/${id}.png`}
            />
        </div>
    );
};

export default ResourcesElement;
