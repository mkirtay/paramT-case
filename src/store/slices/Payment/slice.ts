import {createSlice} from "@reduxjs/toolkit";
import {  paymentAction } from "./actions";


export const paymentSlice = createSlice({
    name: "payment",
    initialState: {
        payment: false,
        isLoading: true,
        error: null,
        pending: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(paymentAction.fulfilled, (state, action ) => {
                state.payment = action.payload;
                state.isLoading = false;
            })
            .addCase(paymentAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    },

})

export default paymentSlice.reducer;
