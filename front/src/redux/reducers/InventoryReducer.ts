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
    name: "InventoryModalState",
    initialState,
    reducers: {
        addElement: (state, action: PayloadAction<IInventoryElement>) => {
            state.inventory[action.payload.id] = action.payload.quantity;
        },

        clearInventory: (state) => {
            state.inventory = {};
        },
        
        getInventory: (state) => {
            return state;
        },
    }
});

export const { addElement, clearInventory, getInventory } = modalSlice.actions;
export default modalSlice.reducer;
