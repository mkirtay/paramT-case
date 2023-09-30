import { configureStore } from '@reduxjs/toolkit'
import {authReducer, allPackagesReducer, selectedPackagesReducer, agreementSlice, paymentSlice} from "./slices";

const store = configureStore({
    reducer: {
        selectedPackages: selectedPackagesReducer,
        allPackages: allPackagesReducer,
        auth: authReducer,
        agreement: agreementSlice,
        paymentSlice: paymentSlice,
    }
})

export default store
