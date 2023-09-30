import {createAsyncThunk} from "@reduxjs/toolkit";
import {http} from "../../../utilities/http";

export const agreementAction : any = createAsyncThunk(
    "agreement",
    async () => {
        const getFile = await http('get', 'payment')
        const decoded = await decodeURIComponent(getFile.content)

        return decoded
    }
);


