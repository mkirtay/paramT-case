import axios from "axios";

export const http = async (type: string, endpoint: string, data?: Object) => {
    try {
        const req = await axios({
            method: type,
            url: `https://62f9ee323c4f110faa8ed350.mockapi.io/api/${endpoint}`,
            ...data
        })
        return await req.data;
    } catch (error: any) {
        return error
    }
}
