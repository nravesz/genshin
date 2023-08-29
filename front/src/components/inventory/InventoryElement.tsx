import React from "react";
import Image from "react-bootstrap/esm/Image";
import { IInventoryElement } from "../../redux/reducers/InventoryReducer";
import './styles/Inventory.scss';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { addElement } from "../../redux/reducers/InventoryReducer";

interface InventoryElementProps {
    id:string;
    quantity: number;
}

const InventoryElement = ({id, quantity}: InventoryElementProps) => {
    const [value, setValue] = React.useState<string>(quantity.toString());
	const dispatch = useDispatch<AppDispatch>();

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value);
        setValue(isNaN(newValue) ? "" : newValue.toString());
    };

    const handleBlur = () => {
        const newValue = isNaN(parseInt(value)) ? "0" : value;
        const inventoryElement: IInventoryElement = {
            id: id,
            quantity: parseInt(newValue)
        };
        setValue(newValue);
        dispatch(addElement(inventoryElement));
    };

    return (
        <div
            className="inventory-element"
        >
            <Image
                className="inventory-image"
                src={`https://paimon.moe/images/items/${id}.png`}
            />
            <input
                //type="number"
                className="inventory-form"
                value={value}
                onChange={handleValueChange}
                onBlur={handleBlur}
            >

            </input>
        </div>
    );
};

export default InventoryElement;
