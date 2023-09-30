import {createSlice} from "@reduxjs/toolkit";
import {  agreementAction } from "./actions";


export const agreementSlice = createSlice({
    name: "auth",
    initialState: {
        file: false,
        isLoading: true,
        error: null,
        pending: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(agreementAction.fulfilled, (state, action ) => {
                state.file = action.payload;
                state.isLoading = false;
            })
            .addCase(agreementAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    },

})

export default agreementSlice.reducer;
