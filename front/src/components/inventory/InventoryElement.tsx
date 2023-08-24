import Image from "react-bootstrap/esm/Image";

interface InventoryElementProps {
    id:string;
    quantity: number;
}

const InventoryElement = ({id, quantity}: InventoryElementProps) => {
    return (
        <div>
            <Image
                src={`https://paimon.moe/images/items/${id}.png`}
            />
            <p>{quantity}</p>
        </div>
    );
};

export default InventoryElement;
