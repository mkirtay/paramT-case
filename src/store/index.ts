import { configureStore } from '@reduxjs/toolkit'
import {authReducer, selectedPackagesReducer} from "./slices";

const store = configureStore({
    reducer: {
        selectedPackages: selectedPackagesReducer,
        auth: authReducer
    }
})

export default store
