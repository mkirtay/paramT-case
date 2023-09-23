import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    record: null
};

export const recordSlice = createSlice({
    name: "record",
    initialState,
    reducers: {
        setRecord: (state:any, action:any) => {
            const { record, mediaType } = action.payload;

            state.record = record;
        },
    }
});

export const { setRecord } = recordSlice.actions;

export default recordSlice.reducer;
