import {createSlice} from "@reduxjs/toolkit";

const initialState : {selectedItems: []} = {
    selectedItems: []
};

export const selectedPackages = createSlice({
    name: "selectedItems",
    initialState,
    reducers: {
        setSelectedPackages: (state: {selectedItems: []}, action:any) => {
            state.selectedItems = action.payload;
        },
    }
});

export const { setSelectedPackages } = selectedPackages.actions;

export default selectedPackages.reducer;
