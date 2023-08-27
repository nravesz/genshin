import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IInventory } from "../../components/inventory/InventoryContainer";

interface InventoryState {
    inventory: IInventory;
};

export interface IInventoryElement {
    id: string;
    quantity: number;
};

const initialState: InventoryState = {
    inventory: {}
};

export const modalSlice = createSlice({
    name: "modalState",
    initialState,
    reducers: {
        addElement: (state, action: PayloadAction<IInventoryElement>) => {
            state.inventory[action.payload.id] = action.payload.quantity;
            console.log(JSON.stringify(state.inventory));
        },
        clearInventory: (state) => {
            state.inventory = {};
        }
    }
});

export const { addElement, clearInventory } = modalSlice.actions;
export default modalSlice.reducer;
