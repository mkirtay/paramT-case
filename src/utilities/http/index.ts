import axios from "axios";

export const get = async (endpoint: string) => {
    try {
        const req = await axios({
            method: 'get',
            url: `https://62f9ee323c4f110faa8ed350.mockapi.io/api/${endpoint}`
        })
        const data = await req.data
        return data;
    } catch (error: any) {
        return error
    }
}
export const post = async (endpoint: string, data: Object) => {
    try {
        const req = await axios({
            method: 'post',
            url: `https://62f9ee323c4f110faa8ed350.mockapi.io/api/${endpoint}`,
            ...data
        })
        return await req.data;
    } catch (error) {
        // Handle errors
        return error
    }
}
