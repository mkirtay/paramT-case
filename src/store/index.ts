import { configureStore } from '@reduxjs/toolkit'
import {recordSliceReducer, selectedPackagesReducer} from "./slices";

// create a slice

// config the store
const store = configureStore({
    reducer: {
        record: recordSliceReducer,
        selectedPackages: selectedPackagesReducer,
    }
})

// export default the store
export default store
