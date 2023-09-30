import {createAsyncThunk} from "@reduxjs/toolkit";
import {IPackage} from "../../../utilities/types";


export const selectedPackageAction : any = createAsyncThunk(
    "selectedItems",
    async (values:IPackage[]) => {
        return values;
    }
);


