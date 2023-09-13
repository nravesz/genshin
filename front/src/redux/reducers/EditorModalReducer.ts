import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILvL } from "../../components/editor";

interface EditorModalState {
    isOpen: boolean;
    id: string;
    startLvL: ILvL;
    endLvL: ILvL;
};

const initialLvL: ILvL = { LvL: 1, isAscended: false };

const initialState: EditorModalState = {
    isOpen: false,
    id: "",
    startLvL: initialLvL,
    endLvL: initialLvL
};

export const modalSlice = createSlice({
    name: "EditorModalState",
    initialState,
    reducers: {
        closeModal: (state) => {
            state.isOpen = false;
        },
        openModal: (state) => {
            state.isOpen = true;
        },
        setID(state, action: PayloadAction<string>) {
            state.id = action.payload;
        },
        setStartLvL(state, action: PayloadAction<ILvL>) {
            state.startLvL = action.payload;
        },
        setEndLvL(state, action: PayloadAction<ILvL>) {
            state.endLvL = action.payload;
        },
        clearStates(state) {
            state.id = "";
            state.startLvL = initialLvL;
            state.endLvL = initialLvL;
        }
    }
});

export const {
    closeModal,
    openModal,
    setID,
    setStartLvL,
    setEndLvL,
    clearStates
} = modalSlice.actions;

export default modalSlice.reducer;
