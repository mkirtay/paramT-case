import {createAsyncThunk} from "@reduxjs/toolkit";
import {http, } from "../../../utilities/http";

export const allPackagesAction : any = createAsyncThunk(
    "packages",
    async () => {
        return await http('get', 'packages')
    }
);


