import { createSlice } from "@reduxjs/toolkit";

interface ResourcesState {
    updated: boolean;
};

const initialState: ResourcesState = {
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
