import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ModalState {
    value: boolean;
    component: string;
    updateInventory: boolean;
};

const initialState: ModalState = {
    value: false,
    component: "characters",
    updateInventory: false
};

export const modalSlice = createSlice({
    name: "MenuModalState",
    initialState,
    reducers: {
        closeModal: (state) => {
            state.value = false;
        },
        openModal: (state) => {
            state.value = true;
        },
        setComponent(state, action: PayloadAction<string>) {
            state.component = action.payload;
        },
        updateInventory(state, action: PayloadAction<boolean>) {
            state.updateInventory = action.payload;
        }
    }
});

export const { closeModal, openModal, setComponent, updateInventory } = modalSlice.actions;
export default modalSlice.reducer;
