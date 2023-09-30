import {createSlice} from "@reduxjs/toolkit";
import { allPackagesAction } from "./actions";
import {IPackage} from "../../../utilities/types";
interface IInitial {
    packages: IPackage[],
    isLoading: boolean,
    error: any,
    pending: boolean,
}

const initialState : IInitial = {
    packages: [],
    isLoading: true,
    error: null,
    pending: false,
}; 

export const allPackages = createSlice({
    name: "packages",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(allPackagesAction.fulfilled, (state, action ) => {
                state.packages = action.payload;
                state.isLoading = false;
            })
            .addCase(allPackagesAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    },

})

export default allPackages.reducer;
