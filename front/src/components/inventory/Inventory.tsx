import { IInventory } from "./InventoryContainer";
import { InventoryElement } from ".";

type InventoryPrompts = {
    data: IInventory;
    isLoading: boolean;
    isError: boolean;
}

const Inventory = ({data, isLoading, isError}: InventoryPrompts) => {
    return (
        <div>
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
