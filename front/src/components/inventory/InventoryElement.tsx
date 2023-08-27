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
    const [value, setValue] = React.useState<number>(quantity);
	const modalState = useSelector((state: RootState) => state.menuModal.value);
	const dispatch = useDispatch<AppDispatch>();

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: number = parseInt(event.target.value);
        if (value < 0) {
            setValue(0);
        } else {
            const inventoryElement: IInventoryElement = {
                id: id,
                quantity: value
            }
            setValue(value);
            dispatch(addElement(inventoryElement));
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
