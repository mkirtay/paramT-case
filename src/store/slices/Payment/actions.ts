import {createAsyncThunk} from "@reduxjs/toolkit";
import {http,} from "../../../utilities/http";

interface IFormValues {
    fullName: string,
    email: string
}


export const paymentAction : any = createAsyncThunk(
    "auth/login",
    async (values:IFormValues) => {
        const payment = await http('post', 'payment', {...values})

        if ( payment?.message === "Ödeme başarıyla gerçekleştirilmiştir." ) {
            return true
        } else {
            return false
        }
    }
);


