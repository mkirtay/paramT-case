import {createAsyncThunk} from "@reduxjs/toolkit";
import {http} from "../../../utilities/http";

interface IFormValues {
    fullName: string,
    email: string
}


export const login : any = createAsyncThunk(
    "auth/login",
    async (values:IFormValues) => {
        const login = await http('post', 'signup', {...values})

        if ( login?.message === 'Signup completed!' ) {
            await localStorage.setItem('user', values?.fullName)
            await localStorage.setItem('active', 'true')

            return true
            /*const navigate = useNavigate();
            await navigate('/list')*/
        } else {
            return false
        }
    }
);


