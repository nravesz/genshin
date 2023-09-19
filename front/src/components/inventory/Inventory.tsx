import { IInventory } from "./InventoryContainer";
import { InventoryElement } from ".";
import './styles/Inventory.scss';

type Props = {
    data: IInventory;
    isLoading: boolean;
    isError: boolean;
}

const Inventory = ({ data, isLoading, isError }: Props) => {
    return (
        <div
            className="container-inventory"
        >
            {Object.keys(data).map((itemName) => (
                <InventoryElement
                    key={itemName}
                    id={itemName}
                    quantity={data[itemName]}
                />
            ))}
        </div>
    );
};

export default Inventory;
