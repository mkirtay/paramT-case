import {createAsyncThunk} from "@reduxjs/toolkit";


export const login : any = createAsyncThunk(
    "auth/login",
    async (data:string) => {
        localStorage.setItem('user', data)
        localStorage.setItem('active', 'true')

        return data;
    }
);
