import {createSlice} from "@reduxjs/toolkit";
import {  login } from "./actions";


export const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: false,
        isLoading: true,
        error: null,
        pending: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action ) => {
                state.login = action.payload;
                state.isLoading = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    },

})

export default authSlice.reducer;
