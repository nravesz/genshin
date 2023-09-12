import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILvL } from "../../components/editor";

interface EditorModalState {
    isOpen: boolean;
    startLvL: ILvL;
    endLvL: ILvL;
};

const initialLvL: ILvL = { LvL: 1, isAscended: false };

const initialState: EditorModalState = {
    isOpen: true,
    startLvL: initialLvL,
    endLvL: initialLvL
};

export const modalSlice = createSlice({
    name: "modalState",
    initialState,
    reducers: {
        closeModal: (state) => {
            state.isOpen = false;
        },
        openModal: (state) => {
            state.isOpen = true;
        },
        setStartLvL(state, action: PayloadAction<ILvL>) {
            state.startLvL = action.payload;
        },
        setEndLvL(state, action: PayloadAction<ILvL>) {
            state.endLvL = action.payload;
        },
        clearStates(state) {
            state.startLvL = initialLvL;
            state.endLvL = initialLvL;
        }
    }
});

export const { closeModal, openModal, setStartLvL, setEndLvL, clearStates } = modalSlice.actions;
export default modalSlice.reducer;
