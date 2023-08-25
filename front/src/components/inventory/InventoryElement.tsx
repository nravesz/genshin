import React from "react";
import Image from "react-bootstrap/esm/Image";
import Form from 'react-bootstrap/Form';
import './styles/Inventory.scss';

interface InventoryElementProps {
    id:string;
    quantity: number;
}

const InventoryElement = ({id, quantity}: InventoryElementProps) => {
    const [value, setValue] = React.useState<number>(quantity);
    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: number = parseInt(event.target.value);
        if (value < 0) {
            setValue(0);
        } else {
            setValue(value);
        };
    };

    return (
        <div
            className="inventory-element"
        >
            <Image
                className="inventory-image"
                src={`https://paimon.moe/images/items/${id}.png`}
            />
            {/* <Form.Control
                className="inventory-form"
                defaultValue={value}
                onChange={handleValueChange}
                value={value}
                inputMode="numeric"
            /> */}
            <input
                type="number"
                className="inventory-form"
                value={value}
                onChange={handleValueChange}
            >

            </input>
        </div>
    );
};

export default InventoryElement;
