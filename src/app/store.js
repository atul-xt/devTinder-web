import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import feedReducer from "./slice/feedSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        feed: feedReducer,
    }
});