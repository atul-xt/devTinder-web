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
        appendFeedData: (state, action) => {
            state.feedData = [...(state.feedData || []), ...action.payload];
        },
        removeOneUser: (state, action) => {
            state.feedData = state.feedData?.filter(user => user._id !== action.payload);
        },
        removeFeedData: (state) => {
            state.feedData = null;
        }
    }
});

export const { setFeedData, appendFeedData, removeOneUser, removeFeedData } = feedSlice.actions;
export default feedSlice.reducer;
