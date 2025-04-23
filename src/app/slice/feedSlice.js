import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: 'feed',
    initialState: {
        feedData: null,
    },
    reducers: {
        setFeedData: (state, action) => {
            state.feedData = action.payload;
        },
        removeFeedData: (state, action) => null
    }
});

export const { setFeedData, removeFeedData } = feedSlice.actions;
export default feedSlice.reducer;