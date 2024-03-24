import { configureStore } from "@reduxjs/toolkit";
import filters from "./filters";

export const store = configureStore({
    reducer: {
        filters
    },
    devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;