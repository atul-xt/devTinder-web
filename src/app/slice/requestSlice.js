import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: "request",
    initialState: {
        requestData: []
    },
    reducers: {
        setRequestData: (state, action) => {
            state.requestData = action.payload;
        },
        removeRequestData: (state, action) => {
            state.requestData = []
        }
    }
})

export const { setRequestData, removeRequestData } = requestSlice.actions;

export default requestSlice.reducer;