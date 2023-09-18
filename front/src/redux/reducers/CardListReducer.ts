import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CardListState {
    updated: boolean;
};

const initialState: CardListState = {
    updated: true,
};

export const dataUpdaterSlice = createSlice({
    name: "DataUpdater",
    initialState,
    reducers: {
        alreadyUpdated: (state) => {
            state.updated = true;
        },
        needsUpdate: (state) => {
            state.updated = false;
        }
    }
});


export const { alreadyUpdated, needsUpdate } = dataUpdaterSlice.actions;
export default dataUpdaterSlice.reducer;
