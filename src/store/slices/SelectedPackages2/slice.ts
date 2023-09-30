import {createSlice} from "@reduxjs/toolkit";
import { selectedPackageAction } from "./actions";
import {allPackagesAction} from "../AllPackages/actions";
import {IPackage} from "../../../utilities/types";

interface IInitial {
    selectedItems: IPackage[],
    isLoading: boolean,
    error: any,
    pending: boolean,
}

const initialState : IInitial = {
    selectedItems: [],
    isLoading: true,
    error: null,
    pending: false,
};

export const selectedPackages = createSlice({
    name: "selectedItems",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(selectedPackageAction.fulfilled, (state, action ) => {
                state.selectedItems = action.payload;
                state.isLoading = false;
            })
            .addCase(selectedPackageAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    },
});
export default selectedPackages.reducer;
