import {createSlice} from "@reduxjs/toolkit";
import {  login } from "./actions";


export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isLoading: true,
        error: null,
        pending: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.pending = true;
            })
            .addCase(login.fulfilled, (state, {payload}) => {
                state.user = payload;
                state.isLoading = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    },

})

export default authSlice.reducer;
