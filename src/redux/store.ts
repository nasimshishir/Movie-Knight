import { configureStore } from "@reduxjs/toolkit"
import loadingReducer from "./features/loadingSlice"
import popupReducer from "./features/popupSlice"

export const store = configureStore({
    reducer: {
        loadingReducer,
        popupReducer
    },
    devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;