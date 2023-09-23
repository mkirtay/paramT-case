import {createSlice} from "@reduxjs/toolkit";
import {IPackage} from "../../../utilities/types";

const initialState : any = {
    selectedItems: null
};

export const selectedPackages = createSlice({
    name: "selectedItems",
    initialState,
    reducers: {
        setSelectedPackages: (state:any, action:any) => {
            state.selectedItems = action.payload;
        },
    }
});

export const { setSelectedPackages } = selectedPackages.actions;

export default selectedPackages.reducer;
