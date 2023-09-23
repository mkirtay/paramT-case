import {createAsyncThunk} from "@reduxjs/toolkit";

export const login : any = createAsyncThunk(
    "auth/login",
    async (data:any) => {
        localStorage.setItem('user', data);
        return data;
    }
);
