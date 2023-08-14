import { createSlice } from "@reduxjs/toolkit"

interface ModalState {
    value: boolean;
};

const initialState: ModalState = {
    value: false,
};

export const modalSlice = createSlice({
    name: "modalState",
    initialState,
    reducers: {
        closeModal: (state) => {
            state.value = false;
        },
        openModal: (state) => {
            state.value = true;
        }
    }
});

export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;
