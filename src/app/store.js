import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import feedReducer from "./slice/feedSlice";
import connectionReducer from "./slice/connectionSlice";
import requestReducer from "./slice/requestSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        feed: feedReducer,
        connection: connectionReducer,
        request: requestReducer,
    }
});