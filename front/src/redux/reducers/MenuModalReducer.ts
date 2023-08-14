import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ModalState {
    value: boolean;
    component: string;
};

const initialState: ModalState = {
    value: false,
    component: "characters"
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
        },
        setComponent(state, action: PayloadAction<string>) {
            state.component = action.payload;
        }
    }
});

export const { closeModal, openModal, setComponent } = modalSlice.actions;
export default modalSlice.reducer;
